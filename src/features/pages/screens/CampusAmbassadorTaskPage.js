import {bindActionCreators} from 'redux';
import * as pagesActions from '../redux/action';
import {connect} from 'react-redux';

import React, {Component} from 'react';
import {Text, View, ScrollView, Image, Platform} from 'react-native';
import ScreenStyle from './styles/StylesCampusAmbassadorTaskPage';
import {LinearTextGradient} from 'react-native-text-gradient';

import Icon from 'react-native-vector-icons/MaterialIcons';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import Colors from '../../../utilities/Colors';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {launchImageLibrary} from 'react-native-image-picker';
import Lightbox from 'react-native-lightbox-v2';
import TaskStatus from '../../../constants/TaskStatus';

function SelectedImage({src}) {
  return (
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

  handlePin = () => {};

  handlePicker = () => {
    let options = {
      title: 'Select Image',
      mediaType: 'photo',
      selectionLimit: 0,
    };
    launchImageLibrary(options, res => {
      if (res.didCancel) {
      } else {
        this.props.pagesActions.selectPhotos(res);
      }
    });
  };

  handleSubmit = () => {
    this.props.pagesActions.submitTask();
  };

  render() {
    const {pages} = this.props;
    const {userTasks} = pages;
    const {currentTask} = userTasks;

    return (
      <ScrollView style={ScreenStyle.root}>
        {/* <SnackbarComponent actionText="OKAY!" /> */}
        <View style={ScreenStyle.topBar}>
          <Icon
            name="arrow-back-ios"
            color={Colors.white}
            size={25}
            onPress={() => this.props.navigation.goBack()}
          />
          <Icon
            name="push-pin"
            color={Colors.white}
            size={30}
            onPress={this.handlePin}
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
              <Text style={ScreenStyle.completedTask}>Task Completed</Text>
            )}

            {currentTask.status === TaskStatus.SUBMITTED && (
              <Text style={ScreenStyle.markApproval}>Sumbitted</Text>
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
                      <SelectedImage {...props} key={props.id} />
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
