import {bindActionCreators} from 'redux';
import * as pagesActions from '../redux/action';
import {connect} from 'react-redux';

import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import ScreenStyle from './styles/StylesSponsorPage';

class SponsorsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={ScreenStyle.root}>
        <Text>Hello World: Sponsors Page</Text>
      </View>
    );
  }
}

const mapStateToProps = ({events = {}} = state) => ({events});

function mapDispatchToProps(dispatch) {
  return {
    pagesActions: bindActionCreators({...pagesActions}, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SponsorsPage);
