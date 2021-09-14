import {bindActionCreators} from 'redux';
import * as pagesActions from '../redux/action';
import {connect} from 'react-redux';

import React, {Component} from 'react';
import {View, StyleSheet, Text, Image, Linking} from 'react-native';

import {ScrollView} from 'react-native-gesture-handler';
import {LinearTextGradient} from 'react-native-text-gradient';
import Fontisto from 'react-native-vector-icons/Fontisto';
import ScreenStyles from './styles/StylesDeveloperPage';
import Colors from '../../../utilities/Colors';

class DevelopersPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ScrollView style={ScreenStyles.root}>
        <View style={ScreenStyles.backgroundStyle}>
          <View style={ScreenStyles.titleMargin}>
            <LinearTextGradient
              style={ScreenStyles.titleTextStyle}
              colors={[
                Colors.gradientTextLeft,
                Colors.gradientTextMiddle,
                Colors.gradientTextRight,
              ]}
              locations={[0, 0.5, 1]}>
              <Text>Developers</Text>
            </LinearTextGradient>
          </View>
          <View style={ScreenStyles.boxes}>
            <View style={ScreenStyles.devNameSection}>
              <Text style={ScreenStyles.textStyle}>Shivam Chaudhary</Text>
            </View>
            <View style={ScreenStyles.devEmailIdSection}>
              <View style={ScreenStyles.emailIdIconPosition}>
                <Fontisto
                  name="email"
                  size={18}
                  style={ScreenStyles.iconStyle}
                  onPress={() =>
                    Linking.openURL('mailto:shivamchaudhary@iitgn.ac.in')
                  }
                />

                <Text
                  style={ScreenStyles.emailId}
                  onPress={() =>
                    Linking.openURL('mailto:shivamchaudhary@iitgn.ac.in')
                  }>
                  shivamchaudhary@iitgn.ac.in
                </Text>
              </View>
            </View>
          </View>
          <View style={ScreenStyles.boxes}>
            <View style={ScreenStyles.devNameSection}>
              <Text style={ScreenStyles.textStyle}>Xhitij Choudhary</Text>
            </View>
            <View style={ScreenStyles.devEmailIdSection}>
              <View style={ScreenStyles.emailIdIconPosition}>
                <Fontisto
                  name="email"
                  size={18}
                  style={ScreenStyles.iconStyle}
                  onPress={() =>
                    Linking.openURL('mailto:xhitij.cm@iitgn.ac.in')
                  }
                />

                <Text
                  style={ScreenStyles.emailId}
                  onPress={() =>
                    Linking.openURL('mailto:xhitij.cm@iitgn.ac.in')
                  }>
                  xhitij.cm@iitgn.ac.in
                </Text>
              </View>
            </View>
          </View>
          <View style={ScreenStyles.boxes}>
            <View style={ScreenStyles.devNameSection}>
              <Text style={ScreenStyles.textStyle}>Varun Chandwani</Text>
            </View>
            <View style={ScreenStyles.devEmailIdSection}>
              <View style={ScreenStyles.emailIdIconPosition}>
                <Fontisto
                  name="email"
                  size={18}
                  style={ScreenStyles.iconStyle}
                  onPress={() =>
                    Linking.openURL('mailto:varun.chandwani@iitgn.ac.in')
                  }
                />

                <Text
                  style={ScreenStyles.emailId}
                  onPress={() =>
                    Linking.openURL('mailto:varun.chandwani@iitgn.ac.in')
                  }>
                  varun.chandwani@iitgn.ac.in
                </Text>
              </View>
            </View>
          </View>
          <View style={ScreenStyles.boxes}>
            <View style={ScreenStyles.devNameSection}>
              <Text style={ScreenStyles.textStyle}>Mahesh Abhale</Text>
            </View>
            <View style={ScreenStyles.devEmailIdSection}>
              <View style={ScreenStyles.emailIdIconPosition}>
                <Fontisto
                  name="email"
                  size={18}
                  style={ScreenStyles.iconStyle}
                  onPress={() =>
                    Linking.openURL('mailto:abhale.mahesh@iitgn.ac.in')
                  }
                />

                <Text
                  style={ScreenStyles.emailId}
                  onPress={() =>
                    Linking.openURL('mailto:abhale.mahesh@iitgn.ac.in')
                  }>
                  abhale.mahesh@iitgn.ac.in
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = ({events = {}} = state) => ({events});

function mapDispatchToProps(dispatch) {
  return {
    pagesActions: bindActionCreators({...pagesActions}, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DevelopersPage);
