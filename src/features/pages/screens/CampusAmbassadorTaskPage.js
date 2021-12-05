import {bindActionCreators} from 'redux';
import * as pagesActions from '../redux/action';
import {connect} from 'react-redux';

import React, {Component} from 'react';
import {Text, View, ScrollView, Image, Platform} from 'react-native';
import ScreenStyle from './styles/StylesCampusAmbassadorTaskPage';
import {LinearTextGradient} from 'react-native-text-gradient';

import Icon from 'react-native-vector-icons/MaterialIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Colors from '../../../utilities/Colors';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {launchImageLibrary} from 'react-native-image-picker';
import Lightbox from 'react-native-lightbox-v2';
import TaskStatus from '../../../constants/TaskStatus';

function SelectedImage({src, id, status, onRemove}) {
  handleRemove = id => {
    onRemove(id) || onRemove();
  };
  return (
    <View style={ScreenStyle.imageViewStyles}>
      {(status === TaskStatus.INCOMPLETE ||
        status === '' ||
        status === TaskStatus.ACTION_REQUIRED) && (
        <Entypo
          name="cross"
          color={Colors.white}
          size={20}
          style={ScreenStyle.galleryCross}
          onPress={() => handleRemove(id)}
        />
      )}
      <Lightbox
        activeProps={{
          width: '100%',
          height: '100%',
        }}>
        <Image
          source={{
            uri: src,
          }}
          style={ScreenStyle.uploadedPic}
          resizeMode="contain"
        />
      </Lightbox>
    </View>
  );
}

class CampusAmbassadorTaskPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const id = this.props.route.params.id;
    this.props.pagesActions.viewTask(id);
  }

  handlePicker = () => {
    let options = {
      title: 'Select Image',
      mediaType: 'photo',
      selectionLimit: 0,
    };
    launchImageLibrary(options, res => {
      if (res.didCancel) {
      } else {
        res.assets.map(asset => {
          this.props.pagesActions
            .selectPhotos({
              name: asset.fileName,
              uri: asset.uri,
            })
            .then(data => {})
            .catch(error => {});
        });
      }
    });
  };

  handleSubmit = () => {
    const taskId = this.props.route.params.id;
    this.props.pagesActions
      .submitTask({taskId})
      .then(data => {})
      .catch(error => {});
  };

  handleRemovePhoto = id => {
    this.props.pagesActions.removeSelectedPhoto(id);
  };

  handlePin = id => {
    this.props.pagesActions.pinTask(id);
  };

  render() {
    const {pages} = this.props;
    const {userTasks} = pages;
    const {currentTask} = userTasks;
    console.log(userTasks.taskList);

    return (
      <ScrollView style={ScreenStyle.root}>
        <View style={ScreenStyle.topBar}>
          <Icon
            name="arrow-back-ios"
            color={Colors.white}
            size={25}
            onPress={() => this.props.navigation.goBack()}
          />
          <AntIcon
            name={currentTask.isPinned ? 'pushpin' : 'pushpino'}
            color={Colors.white}
            size={30}
            onPress={() => this.handlePin(currentTask.id)}
          />
        </View>
        <View style={ScreenStyle.taskView}>
          <LinearTextGradient
            style={ScreenStyle.taskText}
            colors={[
              Colors.gradientTextLeft,
              Colors.gradientTextMiddle,
              Colors.gradientTextRight,
            ]}
            locations={[0, 0.5, 1]}>
            <Text>Task: {currentTask.name}</Text>
          </LinearTextGradient>
          <View style={ScreenStyle.taskDescView}>
            <Text style={ScreenStyle.taskDesc}>{currentTask.description}</Text>
            <Text style={ScreenStyle.ptsDesc}>
              Submission details: {currentTask.ptsDesc}
            </Text>
          </View>
          <View style={ScreenStyle.statusView}>
            {currentTask.status === TaskStatus.COMPLETED && (
              <View style={ScreenStyle.galleryView}>
                <Text style={ScreenStyle.completedTask}>Task Completed</Text>
                {currentTask.uploads.length >= 1 &&
                  currentTask.uploads.map(props => (
                    <SelectedImage
                      {...props}
                      key={props.id}
                      status={currentTask.status}
                    />
                  ))}
              </View>
            )}

            {currentTask.status === TaskStatus.SUBMITTED && (
              <View style={ScreenStyle.galleryView}>
                <Text style={ScreenStyle.markApproval}>Sumbitted</Text>
                {currentTask.uploads.length >= 1 &&
                  currentTask.uploads.map(props => (
                    <SelectedImage
                      {...props}
                      key={props.id}
                      status={currentTask.status}
                    />
                  ))}
              </View>
            )}

            {currentTask.status === TaskStatus.ACTION_REQUIRED && (
              <View>
                <Text style={ScreenStyle.returned}>Returned by Admin</Text>
                <Text style={ScreenStyle.adminComments}>
                  {
                    'Your task should you choose to accept it Your task should you choose to accept itYour task should you choose to accept itYour task should you choose to accept itYour task should you choose to accept it'
                  }
                </Text>
                <TouchableOpacity onPress={this.handleSubmit}>
                  <Text style={ScreenStyle.resubmit}>Resubmit</Text>
                </TouchableOpacity>
                <View style={ScreenStyle.galleryView}>
                  <TouchableOpacity
                    style={ScreenStyle.uploadPlaceholder}
                    onPress={this.handlePicker}>
                    <Text style={ScreenStyle.selectText}>
                      Click to Select Image
                    </Text>
                    <SimpleIcon color={Colors.white} size={24} name="plus" />
                  </TouchableOpacity>
                  {currentTask.uploads.length >= 1 &&
                    currentTask.uploads.map(props => (
                      <SelectedImage {...props} key={props.id} />
                    ))}
                </View>
              </View>
            )}

            {(currentTask.status === '' ||
              currentTask.status === TaskStatus.INCOMPLETE) && (
              <View>
                <TouchableOpacity onPress={this.handleSubmit}>
                  <Text style={ScreenStyle.markApproval}>
                    Mark for Approval
                  </Text>
                </TouchableOpacity>
                <View style={ScreenStyle.galleryView}>
                  <TouchableOpacity
                    style={ScreenStyle.uploadPlaceholder}
                    onPress={this.handlePicker}>
                    <Text style={ScreenStyle.selectText}>
                      Click to Select Image
                    </Text>
                    <SimpleIcon color={Colors.white} size={24} name="plus" />
                  </TouchableOpacity>
                  {currentTask.uploads.length >= 1 &&
                    currentTask.uploads.map(props => (
                      <SelectedImage
                        {...props}
                        key={props.id}
                        status={currentTask.status}
                        onRemove={id => this.handleRemovePhoto(id)}
                      />
                    ))}
                </View>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    pages: state.pages,
    auth: state.auth,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    pagesActions: bindActionCreators({...pagesActions}, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CampusAmbassadorTaskPage);
