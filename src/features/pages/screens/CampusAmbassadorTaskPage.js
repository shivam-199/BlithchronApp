import {bindActionCreators} from 'redux';
import * as pagesActions from '../redux/action';
import {connect} from 'react-redux';

import React, {Component} from 'react';
import {Text, View, ScrollView, Image, Alert, TextInput} from 'react-native';
import ScreenStyle from './styles/StylesCampusAmbassadorTaskPage';
import {LinearTextGradient} from 'react-native-text-gradient';

import Icon from 'react-native-vector-icons/MaterialIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Colors from '../../../utilities/Colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import * as Progress from 'react-native-progress';

import {launchImageLibrary} from 'react-native-image-picker';
import Lightbox from 'react-native-lightbox-v2';
import TaskStatus from '../../../constants/TaskStatus';

function SelectedImage({src, id, status, onRemove}) {
  const [loaded, setLoaded] = React.useState(false);

  handleRemove = id => {
    onRemove(id) || onRemove();
  };

  return (
    <View style={ScreenStyle.imageViewStyles}>
      {(status === TaskStatus.INCOMPLETE ||
        status === TaskStatus.ACTION_REQUIRED ||
        status === '') && (
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
        <View>
          {!loaded && <Progress.Circle size={25} indeterminate={true} />}
          <Image
            source={{
              uri: src,
            }}
            style={ScreenStyle.uploadedPic}
            resizeMode="contain"
            onLoad={() => setLoaded(true)}
          />
        </View>
      </Lightbox>
    </View>
  );
}

class CampusAmbassadorTaskPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: '',
    };
  }

  componentDidMount() {
    const id = this.props.route.params.id;
    this.props.pagesActions.viewTask(id);

    if (
      this.props.pages.userTasks.currentTask.status ===
      TaskStatus.ACTION_REQUIRED
    ) {
      this.setState({
        textInput: this.props.pages.userTasks.currentTask.userTextInput,
      });
    }
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
    Alert.alert('Submit', 'Are you sure you want to submit task?', [
      {
        text: 'Yes',
        onPress: () => {
          const taskId = this.props.route.params.id;
          this.props.pagesActions
            .submitTask({taskId, userTextInput: this.state.textInput})
            .then(data => {})
            .catch(error => {});
        },
      },
      {text: 'Go back', onPress: () => {}},
    ]);
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
    const textInput = this.state.textInput;

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

          <View>
            {currentTask.status === TaskStatus.COMPLETED && (
              <View>
                <Text style={ScreenStyle.completedTask}>Task Completed</Text>
                <Text style={ScreenStyle.submittedText}>
                  User Input: {currentTask.userTextInput || '~No User Input~'}
                </Text>
                <Text style={ScreenStyle.showPointsText}>
                  Points Scored:{' '}
                  <Text style={ScreenStyle.showPoints}>
                    {currentTask.ptsReceived}
                  </Text>
                </Text>
                <View style={ScreenStyle.galleryView}>
                  {currentTask.uploads.length >= 1 &&
                    currentTask.uploads.map(props => (
                      <SelectedImage
                        {...props}
                        key={props.id}
                        status={currentTask.status}
                      />
                    ))}
                </View>
              </View>
            )}

            {currentTask.status === TaskStatus.SUBMITTED && (
              <View>
                <Text style={ScreenStyle.markApproval}>Sumbitted</Text>
                <Text style={ScreenStyle.submittedText}>
                  User Input: {currentTask.userTextInput || 'No User Input'}
                </Text>
                <View style={ScreenStyle.galleryView}>
                  {currentTask.uploads.length >= 1 &&
                    currentTask.uploads.map(props => (
                      <SelectedImage
                        {...props}
                        key={props.id}
                        status={currentTask.status}
                      />
                    ))}
                </View>
              </View>
            )}

            {currentTask.status === TaskStatus.ACTION_REQUIRED && (
              <View>
                <Text style={ScreenStyle.returned}>Returned by Admin</Text>
                <Text style={ScreenStyle.adminComments}>
                  {currentTask.adminComment}
                </Text>
                <TouchableOpacity
                  style={ScreenStyle.touchableOpacityReUpload}
                  onPress={this.handleSubmit}>
                  <Text style={ScreenStyle.resubmit}>Resubmit</Text>
                </TouchableOpacity>
                <TextInput
                  defaultValue={textInput}
                  onChangeText={value => this.setState({textInput: value})}
                  style={ScreenStyle.input}
                  text={textInput}
                  placeholder="Enter some text"
                  multiline={true}
                  numberOfLines={2}
                />
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

            {(currentTask.status === '' ||
              currentTask.status === TaskStatus.INCOMPLETE) && (
              <View>
                <TouchableOpacity
                  style={ScreenStyle.touchableOpacityUpload}
                  onPress={this.handleSubmit}>
                  <Text style={ScreenStyle.markApproval}>
                    Mark for Approval
                  </Text>
                </TouchableOpacity>
                <TextInput
                  defaultValue={textInput}
                  onChangeText={value => this.setState({textInput: value})}
                  style={ScreenStyle.input}
                  text={textInput}
                  placeholder="Enter some text"
                  multiline={true}
                  numberOfLines={2}
                />
                <View style={ScreenStyle.galleryView}>
                  <TouchableOpacity
                    style={ScreenStyle.uploadPlaceholder}
                    onPress={this.handlePicker}>
                    <Text style={ScreenStyle.selectText}>
                      Click to Select Image
                    </Text>
                    <SimpleIcon
                      color={Colors.borderBlue}
                      size={24}
                      name="plus"
                    />
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
