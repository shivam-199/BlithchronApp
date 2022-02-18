import {bindActionCreators} from 'redux';
import * as pagesActions from '../redux/action';
import {connect} from 'react-redux';
import Colors from '../../../utilities/Colors';

import React, {Component} from 'react';
import {
  Image,
  Text,
  View,
  ScrollView,
  Pressable,
  Linking,
  Modal,
  TouchableOpacity,
} from 'react-native';
import ScreenStyle from './styles/StylesHomePage';

import {LinearTextGradient} from 'react-native-text-gradient';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Button} from 'react-native-elements';

import PAST_EVENTS from '../../../constants/PastEvents';

import Icon from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import IonIcon from 'react-native-vector-icons/Ionicons';

// cccs: component class with constuctor
class HomePage extends Component {
  constructor(props) {
    super(props);
    this._renderItem = this._renderItem.bind(this);
    this._renderPastEvents = this._renderPastEvents.bind(this);

    this.state = {
      modalVisible: false,
      modalInfo: {
        name: '',
        desc: '',
        rulebookSrc: '',
        regLink: '',
        type: '',
      },
      activeIndex: 0,
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

  handleUpcomingEvent = item => {
    this.setState({
      modalVisible: true,
      modalInfo: {
        type: 'UPCOMING_EVENTS',
        name: item.name,
        desc: item.description,
        rulebookSrc: item.rulebookSrc,
        regLink: item.regLink,
      },
    });
  };

  _renderItem({item, index}) {
    return (
      <TouchableOpacity
        onPress={() => this.handleUpcomingEvent(item)}
        style={{
          backgroundColor: 'black',
          borderRadius: 5,
          height: 200,
          width: 200,
          marginLeft: 2,
          marginRight: 2,
          marginTop: 35,
          backgroundColor: 'black',
        }}>
        <Image
          source={{uri: item.posterLink}}
          style={{height: '100%', width: '100%'}}
        />
      </TouchableOpacity>
    );
  }

  handlePastEvent = item => {
    this.setState({
      modalVisible: true,
      modalInfo: {
        type: 'PAST_EVENTS',
        name: item.name,
        desc: item.description,
        rulebookSrc: item.rulebookSrc,
      },
    });
  };

  _renderPastEvents({item, index}) {
    return (
      <TouchableOpacity
        onPress={() => this.handlePastEvent(item)}
        style={{
          backgroundColor: 'black',
          height: 200,
          width: 200,
          marginLeft: 2,
          marginRight: 2,
          marginTop: 35,
        }}>
        <Image source={item.image} style={{height: '100%', width: '100%'}} />
      </TouchableOpacity>
    );
  }

  setModalVisible = visible => {
    this.setState({modalVisible: visible});
  };

  componentDidMount() {
    this.props.pagesActions
      .fetchLeaderboard()
      .then(data => {})
      .catch(error => {});

    this.props.pagesActions
      .fetchNewEvents()
      .then(data => {})
      .catch(error => {});
  }

  render() {
    const {modalVisible, modalInfo} = this.state;
    const newEvents = this.props.pages.newEvents;

    const leaderboard = this.props.pages.leaderboard;
    const rank1 = leaderboard.filter(user => user.rank === 1)[0];
    const rank2 = leaderboard.filter(user => user.rank === 2)[0];
    const rank3 = leaderboard.filter(user => user.rank === 3)[0];

    const isLoggedIn = this.props.auth.isLoggedIn;

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
            <Text style={ScreenStyle.blithSubTitle}>VIBE DIFFERENT</Text>
          </LinearTextGradient>
        </View>

        {/* UPCOMING EVENTS + CAROUSEL  */}

        <View>
          <Text style={ScreenStyle.whiteSubTitles}>Upcoming Events</Text>
          <View style={ScreenStyle.carouselViewStyle}>
            <Carousel
              layout={'default'}
              ref={ref => (this.carousel = ref)}
              data={newEvents}
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
              data={PAST_EVENTS}
              sliderWidth={325}
              itemWidth={200}
              loop={true}
              renderItem={this._renderPastEvents}
              activeSlideAlignment={'center'}
              onSnapToItem={index => this.setState({activeIndex: index})}
            />
          </View>
        </View>

        {/* CA LEADREBOARD  */}

        {isLoggedIn && (
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
                    {(rank2 && rank2.points) || '0'}
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
                    {(rank1 && rank1.points) || '0'}
                  </Text>
                </View>
              </View>

              <View style={ScreenStyle.CALeaderboardRank1}>
                <View style={{alignSelf: 'center'}}>
                  <Text style={ScreenStyle.rankNumber1}>3</Text>
                  <Icon
                    name="chevron-down"
                    style={{color: 'white', fontSize: 25}}></Icon>
                </View>

                <IonIcon
                  name="person"
                  style={ScreenStyle.personIconStyle}></IonIcon>

                <View style={{alignItems: 'center'}}>
                  <Text style={{color: 'white'}}>Rank 3</Text>
                  <Text style={{color: 'white'}}>
                    {(rank1 && rank1.points) || '0'}
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
                    {(rank3 && rank3.points) || '0'}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}

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
            onRequestClose={() => this.setState({modalVisible: false})}>
            <View style={{}}>
              {/* <View style={{ margin: 20, backgroundColor: Colors.shadowDark, padding: 35, alignItems: "center", shadowColor: "#000", shadowOffset: {width: 0, height: 2},shadowOpacity: 0.25,shadowRadius: 4,elevation: 5}}> */}
              <View style={ScreenStyle.modalOuter}>
                <View style={ScreenStyle.modalInner}>
                  <View style={ScreenStyle.modalTopRow}>
                    <Text style={ScreenStyle.modalTitle}>{modalInfo.name}</Text>
                    <Pressable
                      style={{}}
                      onPress={() => this.setState({modalVisible: false})}>
                      <Entypo
                        name="cross"
                        style={ScreenStyle.modalClose}></Entypo>
                    </Pressable>
                  </View>
                  <Text style={ScreenStyle.modalDesc}>{modalInfo.desc} </Text>
                  <Button
                    title="Rulebook"
                    titleStyle={ScreenStyle.modalRulebookTitle}
                    type="solid"
                    buttonStyle={ScreenStyle.modalRulebookBtn}
                    onPress={() => Linking.openURL(modalInfo.rulebookSrc)}
                  />
                  {modalInfo.regLink !== '' && (
                    <Button
                      title="Register"
                      titleStyle={ScreenStyle.modalRulebookTitle}
                      type="outline"
                      buttonStyle={ScreenStyle.modalRegBtn}
                      onPress={() => Linking.openURL(modalInfo.registerSrc)}
                    />
                  )}
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = ({pages, auth = {}} = state) => ({pages, auth});

function mapDispatchToProps(dispatch) {
  return {
    pagesActions: bindActionCreators({...pagesActions}, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
