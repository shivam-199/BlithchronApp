import {bindActionCreators} from 'redux';
import * as pagesActions from '../redux/action';
import {connect} from 'react-redux';

import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import ScreenStyle from './styles/StylesCampusAmbassadorPage';

class CampusAmbassadorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSignup = () => {
    console.log('Signup');
  };

  handleLogin = () => {
    console.log('Login');
  };

  render() {
    return (
      <View style={ScreenStyle.root}>
        <Text>Hello World: CA</Text>

        <Button title="Sign Up" onPress={this.handleSignup} />
        <Button title="Login" onPress={this.handleLogin} />
      </View>
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
