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
              <Text>About Us</Text>
            </LinearTextGradient>
          </View>
          
          
          <Text style={ScreenStyles.textStyleDepartment}>Events</Text>
          <View style={{alignItems:'center'}}>
          <View style={ScreenStyles.boxes}>
            
            <View style={ScreenStyles.infoSection}>
              <Text style={ScreenStyles.textStyle}>Saagar Parikh</Text>
              <Text style={ScreenStyles.roletextStyle}>Core</Text>
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
              <Text style={ScreenStyles.textStyle}>Aditi Agarwal</Text>
              <Text style={ScreenStyles.roletextStyle}>Coordinator</Text>
            </View>
            <View style={ScreenStyles.EmailIdSection}>
              <View style={ScreenStyles.contactNumberIconPosition}>
                <Feather
                  name="phone"
                  size={18}
                  style={ScreenStyles.iconStyle}
                  onPress={() => Linking.openURL('tel:${+917014153288}')}
                />

                <Text
                  style={ScreenStyles.emailId}
                  onPress={() => Linking.openURL('tel:${+917014153288}')}>
                  +91 7014153288
                </Text>
              </View>
            </View>

            <View style={ScreenStyles.EmailIdSection}>
              <View style={ScreenStyles.emailIdIconPosition}>
                <Fontisto
                  name="email"
                  size={18}
                  style={ScreenStyles.iconStyle}
                  onPress={() => Linking.openURL('mailto:agarwal.aditi@iitgn.ac.in')}
                />

                <Text
                  style={ScreenStyles.emailId}
                  onPress={() =>
                    Linking.openURL('mailto:agarwal.aditi@iitgn.ac.in')
                  }>
                  agarwal.aditi@iitgn.ac.in
                </Text>
              </View>
            </View>
          </View>
         
          
          
          <View style={ScreenStyles.boxes}>
            
            <View style={ScreenStyles.infoSection}>
              <Text style={ScreenStyles.textStyle}>Harshvardhan Vala</Text>
              <Text style={ScreenStyles.roletextStyle}>Coordinator</Text>
            </View>
            <View style={ScreenStyles.EmailIdSection}>
              <View style={ScreenStyles.contactNumberIconPosition}>
                <Feather
                  name="phone"
                  size={18}
                  style={ScreenStyles.iconStyle}
                  onPress={() => Linking.openURL('tel:${+918140317228}')}
                />

                <Text
                  style={ScreenStyles.emailId}
                  onPress={() => Linking.openURL('tel:${+918140317228}')}>
                  +91 8140317228
                </Text>
              </View>
            </View>

            <View style={ScreenStyles.EmailIdSection}>
              <View style={ScreenStyles.emailIdIconPosition}>
                <Fontisto
                  name="email"
                  size={18}
                  style={ScreenStyles.iconStyle}
                  onPress={() => Linking.openURL('mailto:harshvardhan.vala@iitgn.ac.in')}
                />

                <Text
                  style={ScreenStyles.emailId}
                  onPress={() =>
                    Linking.openURL('mailto:harshvardhan.vala@iitgn.ac.in')
                  }>
                  harshvardhan.vala@iitgn.ac.in
                </Text>
              </View>
            </View>
          </View>
          </View>
          


          <Text style={ScreenStyles.textStyleDepartment}>Sponsorship</Text>
          <View style={{alignItems:'center'}}>
          <View style={ScreenStyles.boxes}>
          
            <View style={ScreenStyles.infoSection}>
              <Text style={ScreenStyles.textStyle}>Progyan Das</Text>
              <Text style={ScreenStyles.roletextStyle}>Core</Text>
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
              <Text style={ScreenStyles.textStyle}>Riya Bansal</Text>
              <Text style={ScreenStyles.roletextStyle}>Coordinator</Text>
            </View>
            <View style={ScreenStyles.EmailIdSection}>
              <View style={ScreenStyles.contactNumberIconPosition}>
                <Feather
                  name="phone"
                  size={18}
                  style={ScreenStyles.iconStyle}
                  onPress={() => Linking.openURL('tel:${+917249785909}')}
                />

                <Text
                  style={ScreenStyles.emailId}
                  onPress={() => Linking.openURL('tel:${+917249785909}')}>
                  +91 7249785909
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
                    Linking.openURL('mailto:riya.bansal@iitgn.ac.in')
                  }
                />

                <Text
                  style={ScreenStyles.emailId}
                  onPress={() =>
                    Linking.openURL('mailto:riya.bansal@iitgn.ac.in')
                  }>
                  riya.bansal@iitgn.ac.in
                </Text>
              </View>
            </View>
          </View>
          </View>
          


          <Text style={ScreenStyles.textStyleDepartment}>Marketing</Text>
          <View style={{alignItems:'center'}}>

          <View style={ScreenStyles.boxes}>
          
            <View style={ScreenStyles.infoSection}>
              <Text style={ScreenStyles.textStyle}>Saniya Patwardhan</Text>
              <Text style={ScreenStyles.roletextStyle}>Core</Text>
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
              <Text style={ScreenStyles.textStyle}>Hiral Sharma</Text>
              <Text style={ScreenStyles.roletextStyle}>Coordinator</Text>
            </View>
            <View style={ScreenStyles.EmailIdSection}>
              <View style={ScreenStyles.contactNumberIconPosition}>
                <Feather
                  name="phone"
                  size={18}
                  style={ScreenStyles.iconStyle}
                  onPress={() => Linking.openURL('tel:${+917977172936}')}
                />

                <Text
                  style={ScreenStyles.emailId}
                  onPress={() => Linking.openURL('tel:${+917977172936}')}>
                  +91 7977172936
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
                    Linking.openURL('mailto:hiral.s@iitgn.ac.in')
                  }
                />

                <Text
                  style={ScreenStyles.emailId}
                  onPress={() =>
                    Linking.openURL('mailto:hiral.s@iitgn.ac.in')
                  }>
                  hiral.s@iitgn.ac.in
                </Text>
              </View>
            </View>
          </View>
         

          <View style={ScreenStyles.boxes}>
          
            <View style={ScreenStyles.infoSection}>
              <Text style={ScreenStyles.textStyle}>Haikoo Khandor</Text>
              <Text style={ScreenStyles.roletextStyle}>Coordinator</Text>
            </View>
            <View style={ScreenStyles.EmailIdSection}>
              <View style={ScreenStyles.contactNumberIconPosition}>
                <Feather
                  name="phone"
                  size={18}
                  style={ScreenStyles.iconStyle}
                  onPress={() => Linking.openURL('tel:${+919265275137}')}
                />

                <Text
                  style={ScreenStyles.emailId}
                  onPress={() => Linking.openURL('tel:${+919265275137}')}>
                  +91 9265275137
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
                    Linking.openURL('mailto:haikoo.ashok@iitgn.ac.in')
                  }
                />

                <Text
                  style={ScreenStyles.emailId}
                  onPress={() =>
                    Linking.openURL('mailto:haikoo.ashok@iitgn.ac.in')
                  }>
                  haikoo.ashok@iitgn.ac.in
                </Text>
              </View>
            </View>
          </View>
          </View>
          


          <Text style={ScreenStyles.textStyleDepartment}>Design</Text>
          <View style={{alignItems:'center'}}>

          <View style={ScreenStyles.boxes}>
          
            <View style={ScreenStyles.infoSection}>
              <Text style={ScreenStyles.textStyle}>Shrija Agrawal</Text>
              <Text style={ScreenStyles.roletextStyle}>Core</Text>
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
          

          <View style={ScreenStyles.boxes}>
          
            <View style={ScreenStyles.infoSection}>
              <Text style={ScreenStyles.textStyle}>Pavidhar Jain</Text>
              <Text style={ScreenStyles.roletextStyle}>Coordinator</Text>
            </View>
            <View style={ScreenStyles.EmailIdSection}>
              <View style={ScreenStyles.contactNumberIconPosition}>
                <Feather
                  name="phone"
                  size={18}
                  style={ScreenStyles.iconStyle}
                  onPress={() => Linking.openURL('tel:${+919610366556}')}
                />

                <Text
                  style={ScreenStyles.emailId}
                  onPress={() => Linking.openURL('tel:${+919610366556}')}>
                  +91 9610366556
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
                    Linking.openURL('mailto:pavidhar.jain@iitgn.ac.in')
                  }
                />

                <Text
                  style={ScreenStyles.emailId}
                  onPress={() =>
                    Linking.openURL('mailto:pavidhar.jain@iitgn.ac.in')
                  }>
                  pavidhar.jain@iitgn.ac.in
                </Text>
              </View>
            </View>
          </View>
          

          <View style={ScreenStyles.boxes}>
          
            <View style={ScreenStyles.infoSection}>
              <Text style={ScreenStyles.textStyle}>Sukruta Midigeshi</Text>
              <Text style={ScreenStyles.roletextStyle}>Coordinator</Text>
            </View>
            <View style={ScreenStyles.EmailIdSection}>
              <View style={ScreenStyles.contactNumberIconPosition}>
                <Feather
                  name="phone"
                  size={18}
                  style={ScreenStyles.iconStyle}
                  onPress={() => Linking.openURL('tel:${+918310843531}')}
                />

                <Text
                  style={ScreenStyles.emailId}
                  onPress={() => Linking.openURL('tel:${+918310843531}')}>
                  +91 8310843531
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
                    Linking.openURL('mailto:sukruta.midigeshi@iitgn.ac.in')
                  }
                />

                <Text
                  style={ScreenStyles.emailId}
                  onPress={() =>
                    Linking.openURL('mailto:sukruta.midigeshi@iitgn.ac.in')
                  }>
                  sukruta.midigeshi@iitgn.ac.in
                </Text>
              </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(AboutUsPage);
