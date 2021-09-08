import {bindActionCreators} from 'redux';
import * as pagesActions from '../redux/action';
import {connect} from 'react-redux';

// import ROLES from '../../../constants/Roles';

import React, {Component} from 'react';
import {Text, View, TextInput, Button} from 'react-native';
import ScreenStyle from './styles/StylesLoginPagePage';
import {TouchableOpacity} from 'react-native-gesture-handler';

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
  };

  handleTextChange = (value, type) => {
    switch (type) {
      case 'email-input':
        this.setState({email: value});
        break;
      case 'password-input':
        this.setState({password: value});
        break;
      default:
        break;
    }
  };

  render() {
    const {email, password} = this.state;
    return (
      <View style={ScreenStyle.root}>
        <Text>Blithchron</Text>
        <Text>Campus Ambassador Login</Text>
        <TextInput
          onChangeText={value => this.handleTextChange(value, 'email-input')}
          style={ScreenStyle.emailInput}
          text={email}
        />
        <TextInput
          text={password}
          style={ScreenStyle.passwordInput}
          onChangeText={value => this.handleTextChange(value, 'password-input')}
        />
        <View>
          <TouchableOpacity style={ScreenStyle.forgotPass}>
            Forgot Password?
          </TouchableOpacity>
          <Button
            title="Login"
            onPress={this.handleLogin}
            style={ScreenStyle.submitButton}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({auth = {}} = state) => ({auth});

function mapDispatchToProps(dispatch) {
  return {
    authAction: bindActionCreators({...authAction}, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
