import {bindActionCreators} from 'redux';
import * as pagesActions from '../redux/action';
import {connect} from 'react-redux';

import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  Linking,
} from 'react-native';
import ScreenStyle from './styles/StylesEventsPage';
import {ScrollView} from 'react-native-gesture-handler';

import {LinearTextGradient} from 'react-native-text-gradient';

import Colors from '../../../utilities/Colors';

class EventsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.pagesActions
      .fetchNewEvents()
      .then(data => {})
      .catch(error => {});
  }

  render() {
    const newEvents = this.props.pages.newEvents;

    return (
      <ScrollView>
        <View style={ScreenStyle.root}>
          <View style={ScreenStyle.backgroundStyle}>
            <View style={ScreenStyle.titleMargin}>
              <LinearTextGradient
                style={ScreenStyle.titleTextStyle}
                colors={[
                  Colors.gradientTextLeft,
                  Colors.gradientTextMiddle,
                  Colors.gradientTextRight,
                ]}
                locations={[0, 0.5, 1]}>
                <Text>Events</Text>
              </LinearTextGradient>
            </View>
            {newEvents.map(item => (
              <View style={ScreenStyle.component1} key={item.id}>
                <Image
                  source={{uri: item.posterLink}}
                  style={ScreenStyle.eventpage}
                />
                <Text style={ScreenStyle.textafterimg}>{item.name}</Text>

                <View style={ScreenStyle.buttoncontainer}>
                  <TouchableOpacity
                    onPress={() => {
                      Linking.openURL(`${item.rulebookSrc}`);
                    }}
                    style={ScreenStyle.forbutton}>
                    <Text style={ScreenStyle.buttonText}>Rulebook</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => Linking.openURL(`${item.regLink}`)}
                    style={ScreenStyle.forbutton}>
                    <Text style={ScreenStyle.buttonText}>Register</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = ({pages = {}} = state) => ({pages});

function mapDispatchToProps(dispatch) {
  return {
    pagesActions: bindActionCreators({...pagesActions}, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsPage);
