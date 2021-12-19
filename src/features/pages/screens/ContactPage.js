import {bindActionCreators} from 'redux';
import * as pagesActions from '../redux/action';
import {connect} from 'react-redux';

import React, {Component} from 'react';
import {Image, Text, View, StyleSheet, Linking} from 'react-native';

import {ScrollView} from 'react-native-gesture-handler';
import {LinearTextGradient} from 'react-native-text-gradient';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import ScreenStyles from './styles/StylesContactPage';
import Colors from '../../../utilities/Colors';

class ContactPage extends Component {
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
              <Text>Follow Us</Text>
            </LinearTextGradient>
          </View>

          <View style={ScreenStyles.websiteIconPosition}>
            <MaterialCommunityIcons
              name="web"
              size={30}
              style={ScreenStyles.iconStyle}
              onPress={() => Linking.openURL('https://blithchron.iitgn.ac.in')}
            />

            <Text
              style={ScreenStyles.website}
              onPress={() => Linking.openURL('https://blithchron.iitgn.ac.in')}>
              blithchron.iitgn.ac.in
            </Text>
          </View>
          <View style={ScreenStyles.socialMediaWebsiteIcon}>
            <View style={ScreenStyles.socialMediaIconsMargin}>
              <AntDesign
                name="instagram"
                size={30}
                style={ScreenStyles.iconStyle}
                onPress={() =>
                  Linking.openURL('https://www.instagram.com/blithchron_iitgn/')
                }
              />
            </View>
            <View style={ScreenStyles.socialMediaIconsMargin}>
              <AntDesign
                name="twitter"
                size={30}
                style={ScreenStyles.iconStyle}
                onPress={() =>
                  Linking.openURL('https://twitter.com/blithchroniitgn?lang=en')
                }
              />
            </View>
            <View style={ScreenStyles.socialMediaIconsMargin}>
              <AntDesign
                name="youtube"
                size={30}
                style={ScreenStyles.iconStyle}
                onPress={() =>
                  Linking.openURL(
                    'https://www.youtube.com/user/IITGnBlithchron',
                  )
                }
              />
            </View>
            <View style={ScreenStyles.socialMediaIconsMargin}>
              <AntDesign
                name="facebook-square"
                size={30}
                style={ScreenStyles.iconStyle}
                onPress={() =>
                  Linking.openURL('https://www.facebook.com/Blithchron')
                }
              />
            </View>
            <AntDesign
              name="linkedin-square"
              size={30}
              style={ScreenStyles.iconStyle}
              onPress={() =>
                Linking.openURL(
                  'https://www.linkedin.com/company/blithchron-iit-gandhinagar/',
                )
              }
            />
          </View>
          <View style={ScreenStyles.contactUsMargin}>
            <LinearTextGradient
              style={ScreenStyles.titleTextStyle}
              colors={[
                Colors.gradientTextLeft,
                Colors.gradientTextMiddle,
                Colors.gradientTextRight,
              ]}
              locations={[0, 0.5, 1]}>
              <Text>Contact Us</Text>
            </LinearTextGradient>
          </View>
          <View style={ScreenStyles.blithEmailIdSection}>
            <View style={ScreenStyles.emailIdIconPosition}>
              <Fontisto
                name="email"
                size={30}
                style={ScreenStyles.iconStyle}
                onPress={() => Linking.openURL('mailto:blithchron@iitgn.ac.in')}
              />

              <Text
                style={ScreenStyles.emailIdBlithchron}
                onPress={() =>
                  Linking.openURL('mailto:blithchron@iitgn.ac.in')
                }>
                blithchron@iitgn.ac.in
              </Text>
            </View>
          </View>

          <View style={ScreenStyles.boxes}>
            <View style={ScreenStyles.infoSection}>
              <Text style={ScreenStyles.textStyle}>Saagar Parikh</Text>
              <Text style={ScreenStyles.roletextStyle}>EVENTS</Text>
            </View>
            <View style={ScreenStyles.EmailIdSection}>
              <View style={ScreenStyles.contactNumberIconPosition}>
                <Feather
                  name="phone"
                  size={18}
                  style={ScreenStyles.iconStyle}
                  onPress={() => Linking.openURL('tel:${+919712549922}')}
                />

                <Text
                  style={ScreenStyles.emailId}
                  onPress={() => Linking.openURL('tel:${+919712549922}')}>
                  +91 9712549922
                </Text>
              </View>
            </View>

            <View style={ScreenStyles.EmailIdSection}>
              <View style={ScreenStyles.emailIdIconPosition}>
                <Fontisto
                  name="email"
                  size={18}
                  style={ScreenStyles.iconStyle}
                  onPress={() => Linking.openURL('mailto:saagar.p@iitgn.ac.in')}
                />

                <Text
                  style={ScreenStyles.emailId}
                  onPress={() =>
                    Linking.openURL('mailto:saagar.p@iitgn.ac.in')
                  }>
                  saagar.p@iitgn.ac.in
                </Text>
              </View>
            </View>
          </View>
          <View style={ScreenStyles.boxes}>
            <View style={ScreenStyles.infoSection}>
              <Text style={ScreenStyles.textStyle}>Progyan Das</Text>
              <Text style={ScreenStyles.roletextStyle}>SPONSORSHIP</Text>
            </View>
            <View style={ScreenStyles.EmailIdSection}>
              <View style={ScreenStyles.contactNumberIconPosition}>
                <Feather
                  name="phone"
                  size={18}
                  style={ScreenStyles.iconStyle}
                  onPress={() => Linking.openURL('tel:${+916009884968}')}
                />

                <Text
                  style={ScreenStyles.emailId}
                  onPress={() => Linking.openURL('tel:${+916009884968}')}>
                  +91 6009884968
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
                    Linking.openURL('mailto:progyan.das@iitgn.ac.in')
                  }
                />

                <Text
                  style={ScreenStyles.emailId}
                  onPress={() =>
                    Linking.openURL('mailto:progyan.das@iitgn.ac.in')
                  }>
                  progyan.das@iitgn.ac.in
                </Text>
              </View>
            </View>
          </View>
          <View style={ScreenStyles.boxes}>
            <View style={ScreenStyles.infoSection}>
              <Text style={ScreenStyles.textStyle}>Saniya Patwardhan</Text>
              <Text style={ScreenStyles.roletextStyle}>MARKETING</Text>
            </View>
            <View style={ScreenStyles.EmailIdSection}>
              <View style={ScreenStyles.contactNumberIconPosition}>
                <Feather
                  name="phone"
                  size={18}
                  style={ScreenStyles.iconStyle}
                  onPress={() => Linking.openURL('tel:${+919850042104}')}
                />

                <Text
                  style={ScreenStyles.emailId}
                  onPress={() => Linking.openURL('tel:${+919850042104}')}>
                  +91 9850042104
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
                    Linking.openURL('mailto:patwardhan.saniya@iitgn.ac.in')
                  }
                />

                <Text
                  style={ScreenStyles.emailId}
                  onPress={() =>
                    Linking.openURL('mailto:patwardhan.saniya@iitgn.ac.in')
                  }>
                  patwardhan.saniya@iitgn.ac.in
                </Text>
              </View>
            </View>
          </View>
          <View style={ScreenStyles.boxes}>
            <View style={ScreenStyles.infoSection}>
              <Text style={ScreenStyles.textStyle}>Shrija Agrawal</Text>
              <Text style={ScreenStyles.roletextStyle}>DESIGN</Text>
            </View>
            <View style={ScreenStyles.EmailIdSection}>
              <View style={ScreenStyles.contactNumberIconPosition}>
                <Feather
                  name="phone"
                  size={18}
                  style={ScreenStyles.iconStyle}
                  onPress={() => Linking.openURL('tel:${+919428670002}')}
                />

                <Text
                  style={ScreenStyles.emailId}
                  onPress={() => Linking.openURL('tel:${+919428670002}')}>
                  +91 9428670002
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
                    Linking.openURL('mailto:shrija.agrawal@iitgn.ac.in')
                  }
                />

                <Text
                  style={ScreenStyles.emailId}
                  onPress={() =>
                    Linking.openURL('mailto:shrija.agrawal@iitgn.ac.in')
                  }>
                  shrija.agrawal@iitgn.ac.in
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

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);
