import {bindActionCreators} from 'redux';
import * as pagesActions from '../redux/action';
import {connect} from 'react-redux';
import Colors from '../../../utilities/Colors';

import React, {Component} from 'react';
import {Text, View, ScrollView, Linking} from 'react-native';
import ScreenStyle from './styles/StylesCampusAmbassadorPage';

import {LinearTextGradient} from 'react-native-text-gradient';
import {Button} from 'react-native-elements';

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

        <View style={{height: 20}} />

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

        {/* TASKS  */}

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
