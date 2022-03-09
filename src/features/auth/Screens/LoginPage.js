import {bindActionCreators} from 'redux';
import * as authActions from '../redux/action';
import {connect} from 'react-redux';

// import ROLES from '../../../constants/Roles';

import React, {Component} from 'react';
import {Text, View, TextInput, Keyboard} from 'react-native';
import ScreenStyle from './styles/StylesLoginPage';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {LinearTextGradient} from 'react-native-text-gradient';
import SnackBar from 'react-native-snackbar-component';

import Colors from '../../../utilities/Colors';
import Validations from '../../../utilities/Validations';
import PageRoutes from '../../../constants/PageRoutes';

// cccs: component class with constuctor
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      snackMessage: '',
      showSnack: false,
    };
  }

  componentDidMount() {
    const isLoggedIn = this.props.auth.isLoggedIn;
    if (isLoggedIn) {
      this.props.navigation.reset({
        index: 0,
        routes: [{name: PageRoutes.Drawer.CAHomePage}],
      });
    }
  }

  handleLoginRoute = () => {
    this.props.navigation.reset({
      index: 0,
      routes: [{name: PageRoutes.Drawer.CAHomePage}],
    });
    // this.props.navigation.navigate(PageRoutes.Drawer.CAHomePage);
  };

  handleLogin = () => {
    Keyboard.dismiss();
    const {email, password} = this.state;
    if (Validations.isEmail(email) && !Validations.isEmpty(password)) {
      this.props.authActions
        .caLogin({email, password})
        .then(data => {
          this.handleLoginRoute();
        })
        .catch(error => {
          this.setState({
            snackMessage: error.code.slice(5),
            showSnack: true,
          });
        });
    } else {
      this.setState({
        snackMessage: 'Invalid email or password!',
        showSnack: true,
      });
    }
  };

  handleForgotPassword = () => {
    const {email} = this.state;
    if (Validations.isEmail(email)) {
      this.props.authActions
        .resetPassword({email})
        .then(data => {
          this.setState({
            snackMessage: 'Please check your email for password reset link',
            showSnack: true,
          });
        })
        .catch(error => {
          this.setState({
            snackMessage: error.code.slice(5),
            showSnack: true,
          });
        });
    } else {
      this.setState({
        snackMessage: 'Invalid email',
        showSnack: true,
      });
    }
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

  closeSnack = () => {
    this.setState({
      showSnack: false,
      snackMessage: '',
    });
  };

  render() {
    const {email, password, snackMessage, showSnack} = this.state;

    return (
      <View style={ScreenStyle.root}>
        <SnackBar
          visible={showSnack}
          textMessage={snackMessage}
          actionText={'Okay!'}
          actionHandler={this.closeSnack}
        />
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
            autoCapitalize="none"
          />
          <TextInput
            text={password}
            style={ScreenStyle.input}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={value =>
              this.handleTextChange(value, 'password-input')
            }
            autoCapitalize="none"
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
