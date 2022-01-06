import {bindActionCreators} from 'redux';
import * as pagesActions from '../redux/action';
import {connect} from 'react-redux';
import Colors from '../../../utilities/Colors';

import React, {Component} from 'react';
import {Text, View, ScrollView, Linking} from 'react-native';
import ScreenStyle from './styles/StylesCampusAmbassadorPage';

import {LinearTextGradient} from 'react-native-text-gradient';
import {Button} from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome';

import PageRoutes from '../../../constants/PageRoutes';

class CampusAmbassadorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleLogin = () => {
    this.props.navigation.navigate(PageRoutes.Drawer.LoginPage);
  };

  render() {
    return (
      <ScrollView style={ScreenStyle.root}>
        {/* Campus Ambassador  text*/}

        <View style={ScreenStyle.TitleView}>
          <LinearTextGradient
            style={ScreenStyle.textGradientStyle}
            colors={[
              Colors.gradientTextLeft,
              Colors.gradientTextMiddle,
              Colors.gradientTextRight,
            ]}
            locations={[0, 0.5, 1]}>
            <Text style={ScreenStyle.bold45}>Campus Ambassador</Text>
          </LinearTextGradient>

          <View style={{height: 10}} />

          <LinearTextGradient
            style={ScreenStyle.textGradientStyle}
            colors={[
              Colors.gradientTextLeft,
              Colors.gradientTextMiddle,
              Colors.gradientTextRight,
            ]}
            locations={[0, 0.5, 1]}>
            <Text style={ScreenStyle.bold17}>
              BECOME A CAMPUS AMBASSADOR TODAY!
            </Text>
          </LinearTextGradient>
        </View>

        {/* LOGIN REGISTER BUTTONS  */}

        <View style={ScreenStyle.buttonsAlignment}>
          <Button
            title="Login"
            titleStyle={ScreenStyle.buttonTitleStyle}
            type="outline"
            buttonStyle={ScreenStyle.loginButtonStyle}
            onPress={this.handleLogin}
          />
          <Button
            title="Register"
            titleStyle={ScreenStyle.buttonTitleStyle}
            type="outline"
            buttonStyle={ScreenStyle.registerButtonStyle}
            onPress={() => {
              Linking.openURL(
                'https://docs.google.com/forms/d/e/1FAIpQLSfwpPFyd2Gi26qP08tUoe1rZasa-yWXZxqeRIblrKlFrKTlYA/viewform',
              );
            }}
          />
          <Button
            title="Terms & Conditions"
            titleStyle={ScreenStyle.buttonTitleStyle}
            type="outline"
            buttonStyle={ScreenStyle.tncButtonStyle}
            onPress={() => {
              Linking.openURL(
                'https://docs.google.com/document/d/1GJtZ94rbyk4cU8u-p1Q02YMxcWz394G8VFQCeIaautw/edit?usp=sharing',
              );
            }}
          />
        </View>

        <View style={ScreenStyle.TextCardView}>
          <View style={ScreenStyle.singleInfoCard}>
            <Text style={ScreenStyle.infoCardTitle}>
              What do we ask of you?
            </Text>
            <Text style={ScreenStyle.white15}>
              As the CA you will be carrying out following tasks: {'\n\n'}
              1. Creating awareness about Blithchron ’22 among your college’s
              student community. {'\n\n'}
              2. Bringing in participation for various kinds of events from your
              college. {'\n\n'}
              3. Increasing the reach of Social Media platforms by sharing the
              content we put out on various other social media. {'\n\n'}
              4. Getting more and more downloads of our app on Google Play Store
              to increase awareness about the event. {'\n\n'}
              This list is not exhaustive and you might be asked to do more as
              and when require.
            </Text>
          </View>
          <View style={ScreenStyle.singleInfoCard}>
            <Text style={ScreenStyle.infoCardTitle}>About the Program</Text>
            <Text style={ScreenStyle.white15}>
              The campus Ambassador program is a learning opportunity for every
              person wanting to learn leadership, teamwork, and communication
              skill. Every year, we appoint CA’s from various colleges who
              spread the word about the event in their respective organizations.
              By working with different people outside of the peer circle, this
              program brings a unique opportunity to learn how to work
              professionally and be an effective orator. By enrolling in the
              program, you would directly interact with your college students
              and become a connecting link between them and us. And you get
              rewarded for the work you do with prizes like access to premium
              courses on Inmovidu Technologies, Official Merch, Cash Prizes,
              Vouchers, and much more!
            </Text>
          </View>
          <View style={ScreenStyle.singleInfoCard}>
            <Text style={ScreenStyle.infoCardTitle}>Perks:</Text>
            <Text style={ScreenStyle.white15}>
              Access to premium courses (one of IoT, Robotics, VLSI, Machine
              Learning, Webpreneurship, AutoCAD) on Inmovidu Technologies.{' '}
              {'\n\n'}
              Apart from the various skills that you would learn being the CA
              for the event there are exciting prizes and incentives like:{' '}
              {'\n\n'}
              1. Official Merchandise {'\n\n'}
              2. Vouchers {'\n\n'}
              3. Customizable bag, badges, and more, {'\n'}
            </Text>
          </View>
          <View style={ScreenStyle.singleInfoCard}>
            <Text style={ScreenStyle.infoCardTitle}>Questions?</Text>
            <View style={ScreenStyle.questionName}>
              <Icon name="phone" size={24} color={Colors.white} />
              <Text style={ScreenStyle.contactText}>
                Rushik: +91 83696 10187
              </Text>
            </View>
            <View style={ScreenStyle.questionMail}>
              <Icon name="envelope" size={24} color={Colors.white} />
              <Text style={ScreenStyle.contactText}>
                blithchron@iitgn.ac.in
              </Text>
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
)(CampusAmbassadorPage);
