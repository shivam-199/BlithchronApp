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
              Linking.openURL('https://www.instagram.com/blithchron_iitgn/');
            }}
          />
          <Button
            title="Terms & Conditions"
            titleStyle={ScreenStyle.buttonTitleStyle}
            type="outline"
            buttonStyle={ScreenStyle.tncButtonStyle}
            onPress={() => {
              Linking.openURL('https://www.instagram.com/blithchron_iitgn/');
            }}
          />
        </View>

        <View style={ScreenStyle.TextCardView}>
          <View style={ScreenStyle.singleInfoCard}>
            <Text style={ScreenStyle.infoCardTitle}>About the Program</Text>
            <Text style={ScreenStyle.white15}>
              Campus Ambassador program is a learning opportunity for every
              person wanting to learn leadership, teamwork and communication
              skill. Every year, we appoint CA's from different colleges who
              spread the word about the event in their respective organizations.
              By working with different people outside of peer circle, this
              program brings a unique opportunity to learn how to work
              professionally and how to be an effective orator. By enrolling in
              the program, you would interact with the students of your college
              directly and become a connecting link between us and them.
            </Text>
          </View>
          <View style={ScreenStyle.singleInfoCard}>
            <Text style={ScreenStyle.infoCardTitle}>
              What will you be doing?
            </Text>
            <Text style={ScreenStyle.white15}>
              As the CA you will be carrying out following tasks: {'\n'}
              1. Creating awareness about Blithchron '21 among your college's
              student community. {'\n'}
              2, Bringing in participation for various kinds of events from your
              college. {'\n'}
              3. Increasing the reach of Social Media platforms by sharing the
              content we put out on various other social media. {'\n'}
              4. Getting more and more downloads of our app on Google Play Store
              to increase awareness about the event. {'\n'}
              This list is not exhaustive and you might be asked to do more as
              and when require.
            </Text>
          </View>
          <View style={ScreenStyle.singleInfoCard}>
            <Text style={ScreenStyle.infoCardTitle}>What's in it for you?</Text>
            <Text style={ScreenStyle.white15}>
              Apart from the various skills that you would learn being the BA
              for the event there are exciting prizes and incentives. Being the
              top CA can get you prizes worth Rs. 4000 and other exciting
              incentives like: {'\n'}
              1. Official Merchandise {'\n'}
              2. Vouchers {'\n'}
              3. Customizable bag, badges, and more, {'\n'}
              Moreover you would also be given the certificate for representing
              Blithchron as the campus ambassador of your college.
            </Text>
          </View>
          <View style={ScreenStyle.singleInfoCard}>
            <Text style={ScreenStyle.infoCardTitle}>Questions?</Text>
            <View style={ScreenStyle.questionName}>
              <Icon name="phone" size={24} color={Colors.white} />
              <Text style={ScreenStyle.contactText}>
                Rishita: +91 12345 67890
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
