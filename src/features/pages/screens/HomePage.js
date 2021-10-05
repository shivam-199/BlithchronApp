import {bindActionCreators} from 'redux';
import * as pagesActions from '../redux/action';
import {connect} from 'react-redux';
import Colors from '../../../utilities/Colors';

import React, {Component} from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  Platform,
  ScrollView,
  Pressable,
  Linking,
} from 'react-native';
import ScreenStyle from './styles/StylesHomePage';
import {color} from 'react-native-reanimated';

import LinearGradient from 'react-native-linear-gradient';
import {LinearTextGradient} from 'react-native-text-gradient';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Button} from 'react-native-elements';

import Icon from 'react-native-vector-icons/EvilIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';

// cccs: component class with constuctor
class HomePage extends Component {
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
            // Define styles for inactive dots here
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

  render() {
    return (
      // Scroll view starts
      <ScrollView style={ScreenStyle.root}>
        <View style={{paddingTop: 20}}>
          {/* BLITHCHRON  text*/}
          <LinearTextGradient
            style={styles.textGradientStyle}
            colors={[
              Colors.gradientTextLeft,
              Colors.gradientTextMiddle,
              Colors.gradientTextRight,
            ]}
            locations={[0, 0.5, 1]}>
            <Text style={styles.blithTitle}>Blithchron</Text>
          </LinearTextGradient>

          <LinearTextGradient
            style={styles.textGradientStyle}
            colors={[
              Colors.gradientTextLeft,
              Colors.gradientTextMiddle,
              Colors.gradientTextRight,
            ]}
            locations={[0, 0.5, 1]}>
            <Text style={styles.blithSubTitle}>A CONFLUENCE OF ECSTASIES</Text>
          </LinearTextGradient>
        </View>

        {/* UPCOMING EVENTS + CAROUSEL  */}

        <View>
          <Text style={styles.whiteSubTitles}>Upcoming Events</Text>
          <View style={styles.carouselViewStyle}>
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
          <Text style={styles.whiteSubTitles}>Past Events</Text>
          <View style={[styles.carouselViewStyle, {marginBottom: 20}]}>
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

        <View style={styles.CALeaderboardView}>
          <Text style={styles.CALeaderboardTitle}>CA Leaderboard</Text>

          <View style={styles.CALeaderboardBoard}>
            <View style={styles.CALeaderboardRank23}>
              <View style={{alignSelf: 'center'}}>
                <Text style={styles.rankNumber}>2</Text>
                <Icon name="chevron-down" style={styles.downIconStyle}></Icon>
              </View>

              <IonIcon name="person" style={styles.personIconStyle}></IonIcon>

              <View style={{alignItems: 'center'}}>
                <Text style={{color: 'white'}}>Rank 2</Text>
                <Text style={{color: 'white'}}>999</Text>
              </View>
            </View>

            <View style={styles.CALeaderboardRank1}>
              <View style={{alignSelf: 'center'}}>
                <Text style={styles.rankNumber1}>1</Text>
                <Icon
                  name="chevron-down"
                  style={{color: 'white', fontSize: 25}}></Icon>
              </View>

              <IonIcon
                name="person"
                style={{fontSize: 80, color: 'white'}}></IonIcon>

              <View style={{alignItems: 'center'}}>
                <Text style={{color: 'white'}}>Rank 1</Text>
                <Text style={{color: 'white'}}>9999</Text>
              </View>
            </View>

            <View style={styles.CALeaderboardRank23}>
              <View style={{alignSelf: 'center'}}>
                <Text style={styles.rankNumber}>3</Text>
                <Icon name="chevron-down" style={styles.downIconStyle}></Icon>
              </View>

              <IonIcon name="person" style={styles.personIconStyle}></IonIcon>

              <View style={{alignItems: 'center'}}>
                <Text style={{color: 'white'}}>Rank 3</Text>
                <Text style={{color: 'white'}}>99</Text>
              </View>
            </View>
          </View>

          <View style={styles.buttonBackgroundStyle}>
            <Button
              title="Know More"
              onPress={() => {
                Linking.openURL('https://google.com');
              }}
            />
          </View>
        </View>

        {/* CONNECT WITH US  */}

        <View style={styles.connectWithUs}>
          <View>
            <Text style={styles.connectWithUsTitle}>Connect with us!</Text>
          </View>

          <View style={styles.socialLogos}>
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
                  marginRight: 45,
                }}></IonIcon>
            </Pressable>
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

const styles = StyleSheet.create({
  blithTitle: {
    marginTop: 16,
    paddingVertical: 8,
    // color: "blue",
    textAlign: 'left',
    fontSize: 52,
    fontWeight: 'bold',
  },
  blithSubTitle: {
    marginTop: -10,
    paddingVertical: 0,
    color: 'blue',
    textAlign: 'left',
    fontSize: 20,
    fontWeight: 'bold',
  },
  whiteSubTitles: {
    color: 'white',
    marginTop: 50,
    paddingVertical: 0,
    textAlign: 'left',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  CABox: {
    backgroundColor: 'black',
    borderRadius: 5,
    height: 250,
    padding: 50,
    marginLeft: 2,
    marginRight: 30,
    marginTop: 35,
  },
  boxWithShadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  textGradientStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 20,
  },
  carouselViewStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 20,
  },
  CALeaderboardView: {
    flexDirection: 'column',
    backgroundColor: '#0E0E0E',
    height: 490,
    width: '90%',
    marginTop: 20,
    marginLeft: 20,
    elevation: 20,
    shadowColor: 'black',
  },
  CALeaderboardTitle: {
    color: 'white',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 10,
  },
  CALeaderboardBoard: {
    height: '80%',
    flexDirection: 'row',
  },
  CALeaderboardRank23: {
    height: '100%',
    width: '30%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  rankNumber: {
    color: 'white',
    alignSelf: 'center',
    marginTop: 40,
    fontWeight: 'bold',
  },
  downIconStyle: {
    color: 'white',
    fontSize: 25,
  },

  personIconStyle: {
    fontSize: 40,
    color: 'white',
  },

  CALeaderboardRank1: {
    height: '100%',
    width: '40%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  rankNumber1: {
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  buttonBackgroundStyle: {
    width: '40%',
    alignSelf: 'center',
    marginTop: -20,
  },
  connectWithUs: {
    flexDirection: 'column',
    backgroundColor: '#0E0E0E',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 12,
    marginBottom: 20,
    elevation: 20,
    shadowColor: 'black',
  },
  connectWithUsTitle: {
    marginTop: 10,
    marginLeft: 10,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  socialLogos: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
    marginBottom: 30,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
