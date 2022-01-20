import {bindActionCreators} from 'redux';
import * as pagesActions from '../redux/action';
import {connect} from 'react-redux';

import React, {Component} from 'react';
import {StyleSheet, Image, Text, View, TouchableOpacity, Linking} from 'react-native';
import ScreenStyle from './styles/StylesEventsPage';
import { ScrollView } from 'react-native-gesture-handler';

import {LinearTextGradient} from 'react-native-text-gradient';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';

import Colors from '../../../utilities/Colors';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { Card } from 'react-native-elements/dist/card/Card';

class EventsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  render() {
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
            <View style={ScreenStyle.component1}>
                <Image 
                source={require('../../../assets/pastEventBanners/event3.jpg')}
                style={ScreenStyle.eventpage}/>
                <Text style={ScreenStyle.textafterimg}>Jazbaa</Text>
                
                <View style={ScreenStyle.buttoncontainer}>
                  <TouchableOpacity onPress={() =>{
                    Linking.openURL('https://drive.google.com/file/d/1vSrX7jScaDRTju0hkBbQciXPb96mHcmd/view?usp=sharing');
                  }}
                  style={ScreenStyle.forbutton}>
                    
                      <Text style={ScreenStyle.buttonText}>Rulebook</Text>
                  
                  </TouchableOpacity>

                  <TouchableOpacity 
                    onPress={() => Linking.openURL('http://google.com')}

                  style={ScreenStyle.forbutton}>
                    
                      <Text style={ScreenStyle.buttonText}>Register</Text>
                  
                  </TouchableOpacity>

                </View>
            </View>
            
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = ({events = {}} = state) => ({events});

function mapDispatchToProps(dispatch) {
  return {
    pagesActions: bindActionCreators({...pagesActions}, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsPage);
