import {bindActionCreators} from 'redux';
import * as pagesActions from '../redux/action';
import {connect} from 'react-redux';

import React, {Component} from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import ScreenStyle from './styles/StylesCampusAmbassadorTaskPage';
import {LinearTextGradient} from 'react-native-text-gradient';

import Icon from 'react-native-vector-icons/MaterialIcons';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import Colors from '../../../utilities/Colors';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {launchImageLibrary} from 'react-native-image-picker';

class CampusAmbassadorTaskPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleBack = () => {};

  handlePin = () => {};

  handlePicker = () => {
    let options = {
      title: 'Select Image',
      mediaType: 'photo',
      selectionLimit: 0,
    };
    launchImageLibrary(options, res => {
      console.log(res);
    });
  };

  render() {
    return (
      <ScrollView style={ScreenStyle.root}>
        <View style={ScreenStyle.topBar}>
          <Icon
            name="arrow-back-ios"
            color={Colors.white}
            size={25}
            onPress={this.handleBack}
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
            <Text>Task: {'App downloads'}</Text>
          </LinearTextGradient>
          <View style={ScreenStyle.taskDescView}>
            <Text style={ScreenStyle.taskDesc}>
              {
                'Your task should you choose to accept it Your task should you choose to accept itYour task should you choose to accept itYour task should you choose to accept itYour task should you choose to accept it'
              }
            </Text>
            <Text style={ScreenStyle.ptsDesc}>
              Submission details:{' '}
              {
                'Your task should you choose to accept it Your task should you choose to accept itYour task should you choose to accept itYour task should you choose to accept itYour task should you choose to accept it'
              }
            </Text>
          </View>
          <View style={ScreenStyle.statusView}>
            {/* <Text style={ScreenStyle.completedTask}>Task Completed</Text> */}
            <TouchableOpacity onPress={this.handleSubmit}>
              <Text style={ScreenStyle.markApproval}>Mark for Approval</Text>
            </TouchableOpacity>
            {/* <Text style={ScreenStyle.returned}>Returned by Admin</Text>
            <Text style={ScreenStyle.adminComments}>
              {
                'Your task should you choose to accept it Your task should you choose to accept itYour task should you choose to accept itYour task should you choose to accept itYour task should you choose to accept it'
              }
            </Text>
            <TouchableOpacity onPress={this.handleSubmit}>
              <Text style={ScreenStyle.resubmit}>Resubmit</Text>
            </TouchableOpacity> */}
            <View style={ScreenStyle.galleryView}>
              <TouchableOpacity
                style={ScreenStyle.uploadPlaceholder}
                onPress={this.handlePicker}>
                <SimpleIcon color={Colors.white} size={24} name="plus" />
              </TouchableOpacity>
              {/* <Image
                source={require('file:///data/user/0/com.blithchronapp/cache/rn_image_picker_lib_temp_01f07e15-2fca-4089-81d5-7209e6847899.jpg')}
              /> */}
            </View>
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
