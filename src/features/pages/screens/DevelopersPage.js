import {bindActionCreators} from 'redux';
import * as pagesActions from '../redux/action';
import {connect} from 'react-redux';

import React, {Component} from 'react';
import {View, Text, Image, Linking} from 'react-native';

import OurTeam from '../../../constants/OurTeam';

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
          {OurTeam.appDev.map(dev => (
            <View style={ScreenStyles.boxes} key={dev.id}>
              <Image style={ScreenStyles.image} source={dev.src} />
              <View style={ScreenStyles.info}>
                <View style={ScreenStyles.devNameSection}>
                  <Text style={ScreenStyles.textStyle}>{dev.name}</Text>
                </View>
                <View style={ScreenStyles.devEmailIdSection}>
                  <View style={ScreenStyles.emailIdIconPosition}>
                    <Fontisto
                      name="email"
                      size={18}
                      style={ScreenStyles.iconStyle}
                      onPress={() => Linking.openURL(`mailto:${dev.email}`)}
                    />

                    <Text
                      style={ScreenStyles.emailId}
                      onPress={() => Linking.openURL(`mailto:${dev.email}`)}>
                      {dev.email}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
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
