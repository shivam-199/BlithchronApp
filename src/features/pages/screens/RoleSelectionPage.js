import {bindActionCreators} from 'redux';
import * as pagesActions from '../redux/action';
import * as authActions from '../../auth/redux/action';
import {connect} from 'react-redux';

import React, {Component} from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import ScreenStyle from './styles/StylesRoleSelectionPage';

import PageRoutes from '../../../constants/PageRoutes';
import Roles from '../../../constants/Roles';

// cccs: component class with constuctor
class RoleSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleCARedirect = () => {
    this.props.authActions.selectRolePreference(Roles.ca);
  };

  handleHomeRedirect = () => {
    this.props.authActions.selectRolePreference(Roles.casual);
  };

  componentDidUpdate = () => {
    if (this.props.auth.userRole == Roles.ca) {
      this.props.navigation.navigate(PageRoutes.Drawer.CAPage);
    } else if (this.props.auth.userRole == Roles.casual) {
      this.props.navigation.navigate(PageRoutes.Drawer.HomePage);
    }
  };

  render() {
    return (
      <View style={ScreenStyle.root}>
        <View style={ScreenStyle.caRole}>
          <View style={ScreenStyle.caRoleBg}>
            <View style={ScreenStyle.caRoleBackgroundOverlay} />
            <TouchableOpacity
              style={ScreenStyle.caRoleContent}
              onPress={this.handleCARedirect}>
              <Image
                source={require('../../../assets/RoleSelection/CAArt.png')}
              />
              <Text style={ScreenStyle.caText}>
                I want to be a {'\n'} Campus {'\n'} Ambassador
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={ScreenStyle.noRole}>
          <View style={ScreenStyle.noRoleBg}>
            <View style={ScreenStyle.noRoleBackgroundOverlay} />
            <TouchableOpacity
              style={ScreenStyle.noRoleContent}
              onPress={this.handleHomeRedirect}>
              <Text style={ScreenStyle.caText}>
                I am here {'\n'} to look {'\n'} around
              </Text>
              <Image
                source={require('../../../assets/RoleSelection/NoRoleArt.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
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
    authActions: bindActionCreators({...authActions}, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RoleSelection);
