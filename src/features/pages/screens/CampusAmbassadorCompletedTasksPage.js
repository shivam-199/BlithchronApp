import {bindActionCreators} from 'redux';
import * as pagesActions from '../redux/action';
import {connect} from 'react-redux';
import Colors from '../../../utilities/Colors';

import React, {Component} from 'react';
import {Image, Text, View, StyleSheet, ScrollView, SafeAreaView, TouchableHighlight, Pressable,TouchableOpacity} from 'react-native';
import ScreenStyle from './styles/StylesCampusAmbassadorCompletedTasksPage';

import LinearGradient from 'react-native-linear-gradient';
import { LinearTextGradient } from "react-native-text-gradient";
import { Button } from 'react-native-elements';

import Icon from 'react-native-vector-icons/EvilIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { color } from 'react-native-reanimated';


class EventsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onnPress = () => {
    console.log("I gt pressed")
  }
  render() {
    return (
      
      
        <ScrollView style={ScreenStyle.root}>
          
          {/* Pinned Tasks  text*/}
          
          <View style={ScreenStyle.TitleView}>
            <LinearTextGradient style={ScreenStyle.textGradientStyle}  colors={[Colors.gradientTextLeft,Colors.gradientTextMiddle,Colors.gradientTextRight]} locations={[0,0.5,1]}>
              <Text style={ScreenStyle.TitleText}>
                Completed Tasks
              </Text>
            </LinearTextGradient>
          </View>

          <View style={ScreenStyle.MainView}>
            <TouchableOpacity>
              <View style={{flexDirection:"column"}}>
                <View style={ScreenStyle.CardView}>
                    
                <LinearTextGradient style={ScreenStyle.LinearTextGradientStyle}  colors={[Colors.gradientTextLeft,Colors.gradientTextMiddle,Colors.gradientTextRight]} locations={[0,0.5,1]}>
                  <Text style={ScreenStyle.font16}>
                    Total points earned: <Text style={ScreenStyle.boldFont}>450 </Text>pts
                  </Text>
                </LinearTextGradient>

                    <View style={ScreenStyle.rowFlex}>
                    <View style={ScreenStyle.cardContent}> 
                    
                      <Text style={ScreenStyle.white15}>
                        App Download Pt. 1
                      </Text>

                      <Text style={ScreenStyle.white8}>
                        Your task is to get students from your campus download the Blithchron '22 App.
                      </Text>

                      <View style={ScreenStyle.startEndDateStyle}>
                        <View>
                          <Text style={ScreenStyle.white8}>
                          Start Date: 12/10/21
                        </Text>

                        <Text style={ScreenStyle.white8}>
                          End Date: 20/10/21
                        </Text>
                        </View>

                        <AntDesignIcon name="pushpin" style={ScreenStyle.pinIconStyle} size={20}/>
                        
                      </View>

                    </View>
                    

                  <View style={ScreenStyle.pointsBox}>

                    <View style={ScreenStyle.pointsBoxSquare}>
                      
                      <View style={ScreenStyle.pointsBoxRow}>

                        <View style={ScreenStyle.pointsBoxTopLeft}>
                          <Text style={ScreenStyle.white8}>
                            20 Pts
                          </Text>

                          <Text style={ScreenStyle.white6Center}>
                            200+ Downloads
                          </Text>

                        </View>

                        <View style={ScreenStyle.pointsBoxTopRight}>
                          <Text style={ScreenStyle.white8}>
                            15 Pts
                          </Text>

                          <Text style={ScreenStyle.white6Center}>
                            100+ Downloads
                          </Text>

                        </View>


                      </View> 

                      <View style={ScreenStyle.pointsBoxRow}>
                        
                      <View style={ScreenStyle.pointsBoxBottomLeft}>
                          <Text style={ScreenStyle.white8}>
                            10 Pts
                          </Text>

                          <Text style={ScreenStyle.white6Center}>
                            10+ Downloads
                          </Text>

                        </View>
                        <View style={ScreenStyle.pointsBoxBottomRight}>
                          <Text style={ScreenStyle.white8}>
                            5 Pts
                          </Text>

                          <Text style={ScreenStyle.white6Center}>
                            20+ Downloads
                          </Text>

                        </View>
                        
                      </View>  

                    </View>

                  </View>
                  <View style={ScreenStyle.playButtonColumn}>
                    <IonIcon name="play" style={ScreenStyle.selfAlignCenter} size={30} color="white"/>

                  </View>
                
              </View>
              </View>
              </View>
              </TouchableOpacity> 
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

const styles = StyleSheet.create({
});

export default connect(mapStateToProps, mapDispatchToProps)(EventsPage);