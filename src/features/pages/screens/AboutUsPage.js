import {bindActionCreators} from 'redux';
import * as pagesActions from '../redux/action';
import {connect} from 'react-redux';

import React, {Component} from 'react';
import {Image, Text, View, Linking} from 'react-native';

import OurTeam from '../../../constants/OurTeam';

import {ScrollView} from 'react-native-gesture-handler';
import {LinearTextGradient} from 'react-native-text-gradient';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';

import ScreenStyles from './styles/StylesAboutUsPage';
import Colors from '../../../utilities/Colors';

class AboutUsPage extends Component {
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
              <Text>Our Team</Text>
            </LinearTextGradient>
          </View>

          <Text style={ScreenStyles.textStyleDepartment}>Events</Text>
          <View style={{alignItems: 'center'}}>
            {OurTeam.events.map(member => (
              <View style={ScreenStyles.boxes} key={member.id}>
                <Image style={ScreenStyles.image} source={member.src} />
                <View style={ScreenStyles.info}>
                  <View style={ScreenStyles.infoSection}>
                    <Text style={ScreenStyles.textStyle}>{member.name}</Text>
                    <Text style={ScreenStyles.roletextStyle}>
                      {member.position}
                    </Text>
                  </View>
                  <View style={ScreenStyles.EmailIdSection}>
                    <View style={ScreenStyles.contactNumberIconPosition}>
                      <Feather
                        name="phone"
                        size={18}
                        style={ScreenStyles.iconStyle}
                        onPress={() => Linking.openURL(`tel:${member.phone}`)}
                      />

                      <Text
                        style={ScreenStyles.emailId}
                        onPress={() => Linking.openURL(`tel:${member.phone}`)}>
                        {member.phone}
                      </Text>
                    </View>
                  </View>

                  <View style={ScreenStyles.EmailIdSection}>
                    <View style={ScreenStyles.emailIdIconPosition}>
                      <Fontisto
                        name="email"
                        size={18}
                        style={ScreenStyles.iconStyle}
                        onPress={() =>
                          Linking.openURL(`mailto:${member.email}`)
                        }
                      />

                      <Text
                        style={ScreenStyles.emailId}
                        onPress={() =>
                          Linking.openURL(`mailto:${member.email}`)
                        }>
                        {member.email}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>

          <Text style={ScreenStyles.textStyleDepartment}>Sponsorship</Text>
          <View style={{alignItems: 'center'}}>
            {OurTeam.sponsorship.map(member => (
              <View style={ScreenStyles.boxes} key={member.id}>
                <Image style={ScreenStyles.image} source={member.src} />
                <View style={ScreenStyles.info}>
                  <View style={ScreenStyles.infoSection}>
                    <Text style={ScreenStyles.textStyle}>{member.name}</Text>
                    <Text style={ScreenStyles.roletextStyle}>
                      {member.position}
                    </Text>
                  </View>
                  <View style={ScreenStyles.EmailIdSection}>
                    <View style={ScreenStyles.contactNumberIconPosition}>
                      <Feather
                        name="phone"
                        size={18}
                        style={ScreenStyles.iconStyle}
                        onPress={() => Linking.openURL(`tel:${member.phone}`)}
                      />

                      <Text
                        style={ScreenStyles.emailId}
                        onPress={() => Linking.openURL(`tel:${member.phone}`)}>
                        {member.phone}
                      </Text>
                    </View>
                  </View>

                  <View style={ScreenStyles.EmailIdSection}>
                    <View style={ScreenStyles.emailIdIconPosition}>
                      <Fontisto
                        name="email"
                        size={18}
                        style={ScreenStyles.iconStyle}
                        onPress={() =>
                          Linking.openURL(`mailto:${member.email}`)
                        }
                      />

                      <Text
                        style={ScreenStyles.emailId}
                        onPress={() =>
                          Linking.openURL(`mailto:${member.email}`)
                        }>
                        {member.email}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>

          <Text style={ScreenStyles.textStyleDepartment}>Marketing</Text>
          <View style={{alignItems: 'center'}}>
            {OurTeam.marketing.map(member => (
              <View style={ScreenStyles.boxes} key={member.id}>
                <Image style={ScreenStyles.image} source={member.src} />
                <View style={ScreenStyles.info}>
                  <View style={ScreenStyles.infoSection}>
                    <Text style={ScreenStyles.textStyle}>{member.name}</Text>
                    <Text style={ScreenStyles.roletextStyle}>
                      {member.position}
                    </Text>
                  </View>
                  <View style={ScreenStyles.EmailIdSection}>
                    <View style={ScreenStyles.contactNumberIconPosition}>
                      <Feather
                        name="phone"
                        size={18}
                        style={ScreenStyles.iconStyle}
                        onPress={() => Linking.openURL(`tel:${member.phone}`)}
                      />

                      <Text
                        style={ScreenStyles.emailId}
                        onPress={() => Linking.openURL(`tel:${member.phone}`)}>
                        {member.phone}
                      </Text>
                    </View>
                  </View>

                  <View style={ScreenStyles.EmailIdSection}>
                    <View style={ScreenStyles.emailIdIconPosition}>
                      <Fontisto
                        name="email"
                        size={18}
                        style={ScreenStyles.iconStyle}
                        onPress={() =>
                          Linking.openURL(`mailto:${member.email}`)
                        }
                      />

                      <Text
                        style={ScreenStyles.emailId}
                        onPress={() =>
                          Linking.openURL(`mailto:${member.email}`)
                        }>
                        {member.email}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>

          <Text style={ScreenStyles.textStyleDepartment}>Design</Text>
          <View style={{alignItems: 'center'}}>
            {OurTeam.design.map(member => (
              <View style={ScreenStyles.boxes} key={member.id}>
                <Image style={ScreenStyles.image} source={member.src} />
                <View style={ScreenStyles.info}>
                  <View style={ScreenStyles.infoSection}>
                    <Text style={ScreenStyles.textStyle}>{member.name}</Text>
                    <Text style={ScreenStyles.roletextStyle}>
                      {member.position}
                    </Text>
                  </View>
                  <View style={ScreenStyles.EmailIdSection}>
                    <View style={ScreenStyles.contactNumberIconPosition}>
                      <Feather
                        name="phone"
                        size={18}
                        style={ScreenStyles.iconStyle}
                        onPress={() => Linking.openURL(`tel:${member.phone}`)}
                      />

                      <Text
                        style={ScreenStyles.emailId}
                        onPress={() => Linking.openURL(`tel:${member.phone}`)}>
                        {member.phone}
                      </Text>
                    </View>
                  </View>

                  <View style={ScreenStyles.EmailIdSection}>
                    <View style={ScreenStyles.emailIdIconPosition}>
                      <Fontisto
                        name="email"
                        size={18}
                        style={ScreenStyles.iconStyle}
                        onPress={() =>
                          Linking.openURL(`mailto:${member.email}`)
                        }
                      />

                      <Text
                        style={ScreenStyles.emailId}
                        onPress={() =>
                          Linking.openURL(`mailto:${member.email}`)
                        }>
                        {member.email}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            ))}
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

export default connect(mapStateToProps, mapDispatchToProps)(AboutUsPage);
