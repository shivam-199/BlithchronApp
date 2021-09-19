import {bindActionCreators} from 'redux';
import * as authActions from '../redux/action';
import {connect} from 'react-redux';

// import ROLES from '../../../constants/Roles';

import React, {Component} from 'react';
import {Text, View, TextInput, Button} from 'react-native';
import ScreenStyle from './styles/StylesLoginPage';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {LinearTextGradient} from 'react-native-text-gradient';

import Colors from '../../../utilities/Colors';

// cccs: component class with constuctor
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleLogin = () => {
    console.log('Login button pressed');
    // this.props.authActions.login();
  };

  handleForgotPassword = () => {
    console.log('Forgot password');
    // this.props.authActions.forgotPassword();
  };

  handleTextChange = (value, type) => {
    const auth = {};
    switch (type) {
      case 'email-input':
        this.setState({email: value});
        auth.email = value;
        break;
      case 'password-input':
        this.setState({password: value});
        auth.pass = value;
        break;
      default:
        break;
    }
  };

  render() {
    const {email, password} = this.state;
    // console.log(this.props);
    return (
      <View style={ScreenStyle.root}>
        <LinearTextGradient
          style={ScreenStyle.textGradient}
          colors={[
            Colors.gradientTextLeft,
            Colors.gradientTextMiddle,
            Colors.gradientTextRight,
          ]}
          locations={[0, 0.5, 1]}>
          <Text>Blithchron</Text>
        </LinearTextGradient>
        <LinearTextGradient
          style={ScreenStyle.textCAGradient}
          colors={[
            Colors.gradientTextLeft,
            Colors.gradientTextMiddle,
            Colors.gradientTextRight,
          ]}
          locations={[0, 0.5, 1]}>
          <Text>Campus Ambassador Login</Text>
        </LinearTextGradient>
        <View style={ScreenStyle.inputView}>
          <TextInput
            onChangeText={value => this.handleTextChange(value, 'email-input')}
            style={ScreenStyle.input}
            text={email}
            placeholder="Email"
            keyboardType="email-address"
          />
          <TextInput
            text={password}
            style={ScreenStyle.input}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={value =>
              this.handleTextChange(value, 'password-input')
            }
          />
        </View>
        <View style={ScreenStyle.buttonRow}>
          <TouchableOpacity onPress={this.handleForgotPassword}>
            <Text style={ScreenStyle.forgotPass}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.handleLogin}
            style={ScreenStyle.buttonView}>
            <Text style={ScreenStyle.submitButton}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({auth = {}} = state) => ({auth});

function mapDispatchToProps(dispatch) {
  return {
    authActions: bindActionCreators({...authActions}, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
