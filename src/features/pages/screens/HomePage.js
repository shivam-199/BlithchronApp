import {bindActionCreators} from 'redux';
import * as pagesActions from '../redux/action';
import {connect} from 'react-redux';
import Colors from '../../../utilities/Colors';

import React, {Component} from 'react';
import {Image, Text, View, ScrollView, Pressable, Linking, Modal, Dimensions} from 'react-native';
import ScreenStyle from './styles/StylesHomePage';

import {LinearTextGradient} from 'react-native-text-gradient';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Button} from 'react-native-elements';

import Icon from 'react-native-vector-icons/EvilIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;

// cccs: component class with constuctor
class HomePage extends Component {
  //started here
  state = {modalVisible: false};
  setModalVisible = (visible) => {
    this.setState({modalVisible:visible});
  }
  //ended here

  constructor(props) {
    super(props);
    // this.state = {};

    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: 'Item 1',
          text: 'Text 1',
        },
        {
          title: 'Item 2',
          text: 'Text 2',
        },
        {
          title: 'Item 3',
          text: 'Text 3',
        },
        {
          title: 'Item 4',
          text: 'Text 4',
        },
        {
          title: 'Item 5',
          text: 'Text 5',
        },
      ],

      pastEvents: [
        {
          title: 'Item 1',
          text: 'Text 1',
          image: require('../../../assets/pastEventBanners/event1.jpg'),
        },

        {
          title: 'Item 2',
          text: 'Text 2',
          image: require('../../../assets/pastEventBanners/event2.jpg'),
        },

        {
          title: 'Item 3',
          text: 'Text 3',
          image: require('../../../assets/pastEventBanners/event3.jpg'),
        },

        {
          title: 'Item 4',
          text: 'Text 4',
          image: require('../../../assets/pastEventBanners/event4.jpg'),
        },

        {
          title: 'Item 5',
          text: 'Text 5',
          image: require('../../../assets/pastEventBanners/event5.jpg'),
        },

        {
          title: 'Item 6',
          text: 'Text 6',
          image: require('../../../assets/pastEventBanners/event6.jpg'),
        },

        {
          title: 'Item 7',
          text: 'Text 7',
          image: require('../../../assets/pastEventBanners/event7.jpg'),
        },

        {
          title: 'Item 8',
          text: 'Text 8',
          image: require('../../../assets/pastEventBanners/event8.jpg'),
        },
        {
          title: 'Item 9',
          text: 'Text 9',
          image: require('../../../assets/pastEventBanners/event9.jpg'),
        },
        {
          title: 'Item 10',
          text: 'Text 10',
          image: require('../../../assets/pastEventBanners/event10.jpg'),
        },
      ],
    };
  }

  get pagination() {
    const {carouselItems, activeSlide} = this.state;
    return (
      <Pagination
        dotsLength={carouselItems.length}
        activeDotIndex={activeSlide}
        containerStyle={{backgroundColor: 'rgba(0, 0, 0, 0.75)'}}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
        }}
        inactiveDotStyle={
          {
            // Define ScreenStyle for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }

  _renderItem({item, index}) {
    return (
      <View
        style={{
          backgroundColor: 'black',
          borderRadius: 5,
          height: 200,
          padding: 50,
          marginLeft: 2,
          marginRight: 2,
          marginTop: 35,
          backgroundColor: 'black',
        }}>
        {/* <Text style={{fontSize: 30}}>{item.title}</Text>
      <Text>{item.text}</Text> */}
        <Icon
          size={84}
          name="lock"
          color="white"
          style={{alignSelf: 'center', marginTop: '10%'}}
        />
        {/* <Image source={{uri: 'https://static.vecteezy.com/system/resources/thumbnails/000/581/959/small_2x/icon0-vector-494-01.jpg'}} style={{width: 150, height: 150, flex:1, marginLeft:20}} /> */}
      </View>
    );
  }

  _renderPastEvents({item, index}) {
    return (
      <View
        style={{
          backgroundColor: 'black',
          // borderRadius: 5,
          height: 200,
          width: 200,
          // padding: 50,
          marginLeft: 2,
          marginRight: 2,
          marginTop: 35,
        }}>
        <Image source={item.image} style={{height: '100%', width: '100%'}} />
      </View>
    );
  }

  componentDidMount() {
    this.props.pagesActions
      .fetchLeaderboard()
      .then(data => {})
      .catch(error => {});
  }

  render() {
    const {modalVisible} = this.state;
    
    const leaderboard = this.props.pages.leaderboard;
    // const rank1 = leaderboard.filter(user => user.rank === 1)[0];
    // const rank2 = leaderboard.filter(user => user.rank === 2)[0];
    // const rank3 = leaderboard.filter(user => user.rank === 3)[0];
    return ( 
      // Scroll view starts
      <ScrollView style={ScreenStyle.root}>
        <View style={{paddingTop: 20}}>
          {/* BLITHCHRON  text*/}
          <LinearTextGradient
            style={ScreenStyle.textGradientStyle}
            colors={[
              Colors.gradientTextLeft,
              Colors.gradientTextMiddle,
              Colors.gradientTextRight,
            ]}
            locations={[0, 0.5, 1]}>
            <Text style={ScreenStyle.blithTitle}>Blithchron</Text>
          </LinearTextGradient>

          <LinearTextGradient
            style={ScreenStyle.textGradientStyle}
            colors={[
              Colors.gradientTextLeft,
              Colors.gradientTextMiddle,
              Colors.gradientTextRight,
            ]}
            locations={[0, 0.5, 1]}>
            <Text style={ScreenStyle.blithSubTitle}>
              VIBE DIFFERENT
            </Text>
          </LinearTextGradient>
        </View>

        {/* UPCOMING EVENTS + CAROUSEL  */}

        <View>
          <Text style={ScreenStyle.whiteSubTitles}>Upcoming Events</Text>
          <View style={ScreenStyle.carouselViewStyle}>
            <Carousel
              layout={'default'}
              ref={ref => (this.carousel = ref)}
              data={this.state.carouselItems}
              sliderWidth={325}
              itemWidth={250}
              loop={true}
              renderItem={this._renderItem}
              activeSlideAlignment={'center'}
              onSnapToItem={index => this.setState({activeIndex: index})}
            />
          </View>
        </View>

        {/* PAST EVENTS + CAROUSEL  */}

        <View>
          <Text style={ScreenStyle.whiteSubTitles}>Past Events</Text>
          <View style={[ScreenStyle.carouselViewStyle, {marginBottom: 20}]}>
            <Carousel
              layout={'default'}
              ref={ref => (this.carousel = ref)}
              data={this.state.pastEvents}
              sliderWidth={325}
              itemWidth={200}
              loop={true}
              renderItem={this._renderPastEvents}
              activeSlideAlignment={'center'}
              onSnapToItem={index => this.setState({activeIndex: index})}
            />
          </View>
        </View>

        {/* <View style={{ backgroundColor: "transparent"}}>
            { this.pagination }
            </View>  */}

        {/* CA LEADREBOARD  */}

        <View style={ScreenStyle.CALeaderboardView}>
          <Text style={ScreenStyle.CALeaderboardTitle}>CA Leaderboard</Text>

          <View style={ScreenStyle.CALeaderboardBoard}>
            <View style={ScreenStyle.CALeaderboardRank23}>
              <View style={{alignSelf: 'center'}}>
                <Text style={ScreenStyle.rankNumber}>2</Text>
                <Icon
                  name="chevron-down"
                  style={ScreenStyle.downIconStyle}></Icon>
              </View>

              <IonIcon
                name="person"
                style={ScreenStyle.personIconStyle}></IonIcon>

              <View style={{alignItems: 'center'}}>
                <Text style={{color: 'white'}}>Rank 2</Text>
                <Text style={{color: 'white'}}>
                  {/* {(rank2 && rank2.points) || '0'} */}
                </Text>
              </View>
            </View>

            <View style={ScreenStyle.CALeaderboardRank1}>
              <View style={{alignSelf: 'center'}}>
                <Text style={ScreenStyle.rankNumber1}>1</Text>
                <Icon
                  name="chevron-down"
                  style={{color: 'white', fontSize: 25}}></Icon>
              </View>

              <IonIcon
                name="person"
                style={{fontSize: 80, color: 'white'}}></IonIcon>

              <View style={{alignItems: 'center'}}>
                <Text style={{color: 'white'}}>Rank 1</Text>
                <Text style={{color: 'white'}}>
                  {/* {(rank1 && rank1.points) || '0'} */}
                </Text>
              </View>
            </View>

            <View style={ScreenStyle.CALeaderboardRank23}>
              <View style={{alignSelf: 'center'}}>
                <Text style={ScreenStyle.rankNumber}>3</Text>
                <Icon
                  name="chevron-down"
                  style={ScreenStyle.downIconStyle}></Icon>
              </View>

              <IonIcon
                name="person"
                style={ScreenStyle.personIconStyle}></IonIcon>

              <View style={{alignItems: 'center'}}>
                <Text style={{color: 'white'}}>Rank 3</Text>
                <Text style={{color: 'white'}}>
                  {/* {(rank3 && rank3.points) || '0'} */}
                </Text>
              </View>
            </View>
          </View>

          {/* <View style={ScreenStyle.buttonBackgroundStyle}>
            <Button
              title="Know More"
              onPress={() => {
                Linking.openURL('https://google.com');
              }}
            />
          </View> */}
        </View>

        {/* CONNECT WITH US  */}

        <View style={ScreenStyle.connectWithUs}>
          <View>
            <Text style={ScreenStyle.connectWithUsTitle}>Connect with us!</Text>
          </View>

          <View style={ScreenStyle.socialLogos}>
            <Pressable
              onPress={() => {
                Linking.openURL('https://www.instagram.com/blithchron_iitgn/');
              }}>
              <IonIcon
                name="logo-instagram"
                style={{
                  fontSize: 30,
                  color: 'white',
                  marginLeft: 45,
                }}></IonIcon>
            </Pressable>

            <Pressable
              onPress={() => {
                Linking.openURL('https://www.facebook.com/Blithchron');
              }}>
              <IonIcon
                name="logo-facebook"
                style={{fontSize: 30, color: 'white'}}></IonIcon>
            </Pressable>

            <Pressable
              onPress={() => {
                Linking.openURL('https://www.youtube.com/user/IITGnBlithchron');
              }}>
              <IonIcon
                name="logo-youtube"
                style={{fontSize: 30, color: 'white'}}></IonIcon>
            </Pressable>

            <Pressable
              onPress={() => {
                Linking.openURL('https://blithchron.iitgn.ac.in/');
              }}>
              <IonIcon
                name="globe-outline"
                style={{
                  fontSize: 30,
                  color: 'white',
                }}></IonIcon>
            </Pressable>
            <Pressable
              onPress={() => {
                Linking.openURL(
                  'https://www.linkedin.com/company/blithchron-iit-gandhinagar/',
                );
              }}>
              <IonIcon
                name="logo-linkedin"
                style={{
                  fontSize: 30,
                  color: 'white',
                  marginRight: 45,
                }}></IonIcon>
            </Pressable>
          </View>
        </View>

        <View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setModalVisible(!modalVisible);
          }}
        >
          <View style={{ }}>
            {/* <View style={{ margin: 20, backgroundColor: Colors.shadowDark, padding: 35, alignItems: "center", shadowColor: "#000", shadowOffset: {width: 0, height: 2},shadowOpacity: 0.25,shadowRadius: 4,elevation: 5}}> */}
              <View style={{backgroundColor: Colors.shadowDark, width:ScreenWidth, height:ScreenHeight, }}>
                <View style={{height:ScreenHeight/1.9, width:ScreenWidth/1.3, backgroundColor:Colors.primaryDark, alignSelf:"center", marginTop:"40%", borderRadius:37, flexDirection:"column", paddingHorizontal:20, justifyContent:"space-around", paddingBottom:15}}>
                  <View style={{flexDirection:"row", marginTop:0}}>
                    <Text style={{color:"white", fontSize:30, flex:1}}>Event Name</Text>
                    <Pressable style={{}} onPress={() => this.setModalVisible(!modalVisible)}> 
                    <IonIcon
                      name="arrow-back-sharp" style={{fontSize: 40, color: 'green', marginRight:0, fontSize:40}}>
                    </IonIcon>
                    </Pressable>



                    </View>
                  <Text style={{color:"white"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in </Text>
                  <Button
                    title="Rulebook"
                    titleStyle={{
                      fontSize: 13,
                      color: 'white',
                    }}
                    type="solid"
                    buttonStyle={{
                      borderWidth: 3,
                      borderRadius: 40,
                      minWidth: 70,
                      backgroundColor:"#7F3F98",
                      borderColor:"#662D91"
                    }}
                  />
                  <Button   
                    title="Register"
                    titleStyle={{
                      fontSize: 13,
                      color: 'white',
                    }}
                    type="outline"
                    buttonStyle={{
                      borderWidth: 3,
                      borderRadius: 40,
                      width: "70%",
                      marginRight:"auto",
                      marginLeft:"auto"
                    }}
                  />
                </View>
            </View>
          </View>

          

          
        </Modal>

          <Pressable style={{alignItems:'center'}} onPress={() => this.setModalVisible(true)}> 
            <Text style={{color:'white'}}>Click here for modal</Text>
          </Pressable>
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



export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
