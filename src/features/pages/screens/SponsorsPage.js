import {bindActionCreators} from 'redux';
import * as pagesActions from '../redux/action';
import {connect} from 'react-redux';

import React, {Component} from 'react';
import {Image, Text, View, ScreenStyleheet, ScrollView} from 'react-native';
import ScreenStyle from './styles/StylesSponsorPage';

import {LinearTextGradient} from 'react-native-text-gradient';

class SponsorsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ScrollView style={ScreenStyle.root}>
        {/* CURRENT SPONSORS  */}
        <View style={ScreenStyle.titleView}>
          <LinearTextGradient
            colors={['#41ABFE', '#9460F1', '#F5375C']}
            locations={[0, 0.5, 1]}>
            <Text style={ScreenStyle.pageTitle}>Sponsors</Text>
          </LinearTextGradient>
        </View>

        <View style={{flexDirection: 'column'}}>
          <View style={ScreenStyle.oneRowOfSponsors}>
            <View style={ScreenStyle.oneSponsor}>
              <Image
                source={require('../../../assets/currentSponsors/gujaratTourism.png')}
                style={ScreenStyle.sponsorImageDimensions}></Image>
              <Text style={ScreenStyle.sponsorTitle}>Title Sponsor</Text>
            </View>

            <View style={ScreenStyle.oneSponsor}>
              <Image
                source={require('../../../assets/currentSponsors/sbi.png')}
                style={ScreenStyle.sponsorImageDimensions}></Image>
              <Text style={ScreenStyle.sponsorTitle}>Platinum Sponsor</Text>
            </View>
          </View>

          <View style={ScreenStyle.oneRowOfSponsors}>
            <View style={ScreenStyle.oneSponsor}>
              <Image
                source={require('../../../assets/currentSponsors/ITC_Logo.jpg')}
                style={ScreenStyle.sponsorImageDimensions}></Image>
              <Text style={ScreenStyle.sponsorTitle}>Major Event Partner</Text>
            </View>

            <View style={ScreenStyle.oneSponsor}>
              <Image
                source={require('../../../assets/currentSponsors/hidden_brains.png')}
                style={{height: 100, width: '120%', marginTop: 20}}></Image>
              <Text style={[ScreenStyle.sponsorTitle, {marginTop: 'auto'}]}>
                Event Partner
              </Text>
            </View>
          </View>

          <View style={ScreenStyle.oneRowOfSponsors}>
            <View style={ScreenStyle.oneSponsor}>
              <Image
                source={require('../../../assets/currentSponsors/GIL_Logo.png')}
                style={{height: 80, width: '80%'}}></Image>
              <Text style={ScreenStyle.sponsorTitle}>Information Sponsor</Text>
            </View>

            <View style={ScreenStyle.oneSponsor}>
              <Image
                source={require('../../../assets/currentSponsors/Garvi_Logo.jpg')}
                style={{height: 25, width: '80%', marginTop: 20}}></Image>
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginTop: 'auto',
                }}>
                <Text style={ScreenStyle.sponsorTitle}>Handicraft and</Text>
                <Text
                  style={{
                    color: 'white',
                    marginTop: 0,
                    fontSize: 15,
                    fontWeight: 'bold',
                  }}>
                  Handloom Sponsor
                </Text>
              </View>
            </View>
          </View>

          <View style={ScreenStyle.oneRowOfSponsors}>
            <View style={ScreenStyle.oneSponsor}>
              <Image
                source={require('../../../assets/currentSponsors/Sparsh_Publications.png')}
                style={ScreenStyle.sponsorImageDimensions}></Image>
              <Text style={ScreenStyle.sponsorTitle}>Literature Sponsor</Text>
            </View>

            <View style={ScreenStyle.oneSponsor}>
              <Image
                source={require('../../../assets/currentSponsors/yocket.png')}
                style={{height: 55, width: '80%', marginTop: 20}}></Image>
              <Text style={[ScreenStyle.sponsorTitle, {marginTop: 'auto'}]}>
                Study Abroad Sponsor
              </Text>
            </View>
          </View>
        </View>

        <View style={ScreenStyle.oneRowOfSponsors}>
          <View style={ScreenStyle.oneSponsor}>
            <Image
              source={require('../../../assets/currentSponsors/CIMS.jpg')}
              style={{height: 80, width: '160%', marginTop: 20}}></Image>
            <Text style={ScreenStyle.sponsorTitle}>Medical Sponsor</Text>
          </View>

          <View style={ScreenStyle.oneSponsor}>
            <Image
              source={require('../../../assets/currentSponsors/einfochips.png')}
              style={{
                height: 45,
                width: '150%',
                marginTop: 'auto',
                marginBottom: 'auto',
              }}></Image>
            <Text style={ScreenStyle.sponsorTitle}>IT Sponsor</Text>
          </View>
        </View>

        <View style={ScreenStyle.oneRowOfSponsors}>
          <View style={ScreenStyle.oneSponsor}>
            <Image
              source={require('../../../assets/currentSponsors/Vivo_Logo.png')}
              style={ScreenStyle.sponsorImageDimensions}></Image>
            <Text style={ScreenStyle.sponsorTitle}>Pronites Title Sponsor</Text>
          </View>

          <View style={ScreenStyle.oneSponsor}>
            <Image
              source={require('../../../assets/currentSponsors/Wiley.jpg')}
              style={{
                height: 50,
                width: '125%',
                marginTop: 'auto',
                marginBottom: 'auto',
              }}></Image>
            <Text style={ScreenStyle.sponsorTitle}>Literature Partner</Text>
          </View>
        </View>

        <View style={ScreenStyle.oneRowOfSponsors}>
          <View style={ScreenStyle.oneSponsor}>
            <Image
              source={require('../../../assets/currentSponsors/noticebard.png')}
              style={{
                height: 57,
                width: '130%',
                marginTop: 'auto',
                marginBottom: 'auto',
              }}></Image>
            <Text style={ScreenStyle.sponsorTitle}>Broadcast Partner</Text>
          </View>

          <View style={ScreenStyle.oneSponsor}>
            <Image
              source={require('../../../assets/currentSponsors/Score.png')}
              style={{
                height: 60,
                width: '130%',
                marginTop: 'auto',
                marginBottom: 'auto',
              }}></Image>
            <Text style={ScreenStyle.sponsorTitle}>Media Partner</Text>
          </View>
        </View>

        <View
          style={[
            ScreenStyle.oneRowOfSponsors,
            {justifyContent: 'flex-start', marginLeft: 30},
          ]}>
          <View style={ScreenStyle.oneSponsor}>
            <Image
              source={require('../../../assets/currentSponsors/JawedHabibLogo.png')}
              style={{
                height: 40,
                width: '100%',
                marginTop: 'auto',
                marginBottom: 'auto',
              }}></Image>
            <Text style={ScreenStyle.sponsorTitle}>Grooming Partner</Text>
          </View>
        </View>

        {/* OLD SPONSORS  */}
        {/* BLITHCHRON  text*/}
        <View style={ScreenStyle.titleView}>
          <LinearTextGradient
            colors={['#41ABFE', '#9460F1', '#F5375C']}
            locations={[0, 0.5, 1]}>
            <Text style={ScreenStyle.pageTitle}>Past Sponsors</Text>
          </LinearTextGradient>
        </View>

        <View style={{flexDirection: 'column'}}>
          <View style={ScreenStyle.oneRowOfSponsors}>
            <View style={ScreenStyle.oneSponsor}>
              <Image
                source={require('../../../assets/pastSponsors/gujaratTourism.png')}
                style={ScreenStyle.sponsorImageDimensions}></Image>
              <Text style={ScreenStyle.sponsorTitle}>Title Sponsor</Text>
            </View>

            <View style={ScreenStyle.oneSponsor}>
              <Image
                source={require('../../../assets/pastSponsors/ITC_Logo.jpg')}
                style={ScreenStyle.sponsorImageDimensions}></Image>
              <Text style={ScreenStyle.sponsorTitle}>CSR Sponsor</Text>
            </View>
          </View>

          <View style={ScreenStyle.oneRowOfSponsors}>
            <View style={ScreenStyle.oneSponsor}>
              <Image
                source={require('../../../assets/pastSponsors/GIL_Logo.png')}
                style={{height: 80, width: '80%'}}></Image>
              <Text style={ScreenStyle.sponsorTitle}>Information Partner</Text>
            </View>

            <View style={ScreenStyle.oneSponsor}>
              <Image
                source={require('../../../assets/pastSponsors/yocket.png')}
                style={{height: 55, width: '80%', marginTop: 20}}></Image>
              <Text style={[ScreenStyle.sponsorTitle, {marginTop: 'auto'}]}>
                Study Abroad Partner
              </Text>
            </View>
          </View>

          <View style={ScreenStyle.oneRowOfSponsors}>
            <View style={ScreenStyle.oneSponsor}>
              <Image
                source={require('../../../assets/pastSponsors/Garvi_Logo.jpg')}
                style={{height: 25, width: '80%', marginTop: 20}}></Image>
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginTop: 'auto',
                }}>
                <Text style={ScreenStyle.sponsorTitle}>Handicraft and</Text>
                <Text
                  style={{
                    color: 'white',
                    marginTop: 0,
                    fontSize: 15,
                    fontWeight: 'bold',
                  }}>
                  Handloom Sponsor
                </Text>
              </View>
            </View>

            <View style={ScreenStyle.oneSponsor}>
              <Image
                source={require('../../../assets/pastSponsors/Vivo_Logo.png')}
                style={ScreenStyle.sponsorImageDimensions}></Image>
              <Text style={ScreenStyle.sponsorTitle}>
                Pronites Title Sponsor
              </Text>
            </View>
          </View>

          <View style={ScreenStyle.oneRowOfSponsors}>
            <View style={ScreenStyle.oneSponsor}>
              <Image
                source={require('../../../assets/pastSponsors/paytm.jpeg')}
                style={ScreenStyle.sponsorImageDimensions}></Image>
              <Text style={ScreenStyle.sponsorTitle}>Event Sponsor</Text>
            </View>

            <View style={ScreenStyle.oneSponsor}>
              <Image
                source={require('../../../assets/pastSponsors/KHS_Logo.png')}
                style={{height: 48, width: '100%', marginTop: 20}}></Image>
              <Text style={[ScreenStyle.sponsorTitle, {marginTop: 'auto'}]}>
                Major Event Sponsor
              </Text>
            </View>
          </View>
        </View>

        <View style={ScreenStyle.oneRowOfSponsors}>
          <View style={ScreenStyle.oneSponsor}>
            <Image
              source={require('../../../assets/pastSponsors/UnionBank_Logo.png')}
              style={{
                height: 20,
                width: '100%',
                marginTop: 'auto',
                marginBottom: 'auto',
              }}></Image>
            <Text style={ScreenStyle.sponsorTitle}>Event Sponsor</Text>
          </View>

          <View style={ScreenStyle.oneSponsor}>
            <Image
              source={require('../../../assets/pastSponsors/TinderName_Logo.png')}
              style={{
                height: 20,
                width: '100%',
                marginTop: 'auto',
                marginBottom: 'auto',
              }}></Image>
            <Text style={ScreenStyle.sponsorTitle}>Partner</Text>
          </View>
        </View>

        <View style={ScreenStyle.oneRowOfSponsors}>
          <View style={ScreenStyle.oneSponsor}>
            <Image
              source={require('../../../assets/pastSponsors/Monster_Logo.jpg')}
              style={ScreenStyle.sponsorImageDimensions}></Image>
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: 'auto',
              }}>
              <Text style={ScreenStyle.sponsorTitle}>Official Energy</Text>
              <Text
                style={{
                  color: 'white',
                  marginTop: 0,
                  fontSize: 15,
                  fontWeight: 'bold',
                }}>
                Drink Partner
              </Text>
            </View>
          </View>

          <View style={ScreenStyle.oneSponsor}>
            <Image
              source={require('../../../assets/pastSponsors/ZebronicsLogo.jpg')}
              style={ScreenStyle.sponsorImageDimensions}></Image>
            <Text style={ScreenStyle.sponsorTitle}>Audio Partner</Text>
          </View>
        </View>

        <View style={ScreenStyle.oneRowOfSponsors}>
          <View style={ScreenStyle.oneSponsor}>
            <Image
              source={require('../../../assets/pastSponsors/JK_Logo.jpg')}
              style={{
                height: 80,
                width: '100%',
                marginTop: 'auto',
                marginBottom: 'auto',
              }}></Image>
            <Text style={ScreenStyle.sponsorTitle}>CSR Partner</Text>
          </View>

          <View style={ScreenStyle.oneSponsor}>
            <Image
              source={require('../../../assets/pastSponsors/amul.jpg')}
              style={ScreenStyle.sponsorImageDimensions}></Image>
            <Text style={ScreenStyle.sponsorTitle}>Dairy Partner</Text>
          </View>
        </View>

        <View style={ScreenStyle.oneRowOfSponsors}>
          <View style={ScreenStyle.oneSponsor}>
            <Image
              source={require('../../../assets/pastSponsors/JawedHabibLogo.png')}
              style={{
                height: 40,
                width: '100%',
                marginTop: 'auto',
                marginBottom: 'auto',
              }}></Image>
            <Text style={ScreenStyle.sponsorTitle}>Grooming Partner</Text>
          </View>

          <View style={ScreenStyle.oneSponsor}>
            <Image
              source={require('../../../assets/pastSponsors/play-station.jpeg')}
              style={ScreenStyle.sponsorImageDimensions}></Image>
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: 'auto',
              }}>
              <Text style={ScreenStyle.sponsorTitle}>Console Partner</Text>
              <Text
                style={{
                  color: 'white',
                  marginTop: 0,
                  fontSize: 15,
                  fontWeight: 'bold',
                }}>
                for Skirmish
              </Text>
            </View>
          </View>
        </View>

        <View style={ScreenStyle.oneRowOfSponsors}>
          <View style={ScreenStyle.oneSponsor}>
            <Image
              source={require('../../../assets/pastSponsors/CanaraBankLogo.png')}
              style={{
                height: 80,
                width: '100%',
                marginTop: 'auto',
                marginBottom: 'auto',
              }}></Image>
            <Text style={ScreenStyle.sponsorTitle}>Event Sponsor</Text>
          </View>

          <View style={ScreenStyle.oneSponsor}>
            <Image
              source={require('../../../assets/pastSponsors/IciciBankLogo.png')}
              style={{
                height: 12,
                width: '100%',
                marginTop: 'auto',
                marginBottom: 'auto',
              }}></Image>
            <Text style={ScreenStyle.sponsorTitle}>Partner</Text>
          </View>
        </View>

        <View style={ScreenStyle.oneRowOfSponsors}>
          <View style={ScreenStyle.oneSponsor}>
            <Image
              source={require('../../../assets/pastSponsors/TownScript_Logo.png')}
              style={{
                height: 30,
                width: '100%',
                marginTop: 'auto',
                marginBottom: 'auto',
              }}></Image>
            <Text style={ScreenStyle.sponsorTitle}>Ticketing Partner</Text>
          </View>

          <View style={ScreenStyle.oneSponsor}>
            <Image
              source={require('../../../assets/pastSponsors/tea-post.jpg')}
              style={ScreenStyle.sponsorImageDimensions}></Image>
            <Text style={ScreenStyle.sponsorTitle}>Chai Partner</Text>
          </View>
        </View>

        <View style={ScreenStyle.oneRowOfSponsors}>
          <View style={ScreenStyle.oneSponsor}>
            <Image
              source={require('../../../assets/pastSponsors/SouledStore_Logo.jpg')}
              style={ScreenStyle.sponsorImageDimensions}></Image>
            <Text style={ScreenStyle.sponsorTitle}>Prime Gifting Partner</Text>
          </View>

          <View style={ScreenStyle.oneSponsor}>
            <Image
              source={require('../../../assets/pastSponsors/breakout-logo.jpg')}
              style={{
                height: 55,
                width: '100%',
                marginTop: 'auto',
                marginBottom: 'auto',
              }}></Image>
            <Text style={ScreenStyle.sponsorTitle}>Event Partner</Text>
          </View>
        </View>

        <View style={ScreenStyle.oneRowOfSponsors}>
          <View style={ScreenStyle.oneSponsor}>
            <Image
              source={require('../../../assets/pastSponsors/SouledStore_Logo.jpg')}
              style={ScreenStyle.sponsorImageDimensions}></Image>
            <Text style={ScreenStyle.sponsorTitle}>Ice Tea Partner</Text>
          </View>

          <View style={ScreenStyle.oneSponsor}>
            <Image
              source={require('../../../assets/pastSponsors/BrewHouseLogo.png')}
              style={ScreenStyle.sponsorImageDimensions}></Image>
            <Text style={ScreenStyle.sponsorTitle}>Gaming Partner</Text>
          </View>
        </View>

        <View style={ScreenStyle.oneRowOfSponsors}>
          <View style={ScreenStyle.oneSponsor}>
            <Image
              source={require('../../../assets/pastSponsors/BangaloreOpenAirLogo.jpeg')}
              style={ScreenStyle.sponsorImageDimensions}></Image>
            <Text style={ScreenStyle.sponsorTitle}>Event Partner</Text>
          </View>

          <View style={ScreenStyle.oneSponsor}>
            <Image
              source={require('../../../assets/pastSponsors/StatusFashionLogo.png')}
              style={{
                height: 55,
                width: '100%',
                marginTop: 'auto',
                marginBottom: 'auto',
              }}></Image>
            <Text style={ScreenStyle.sponsorTitle}>Fashion Partner</Text>
          </View>
        </View>

        <View style={ScreenStyle.oneRowOfSponsors}>
          <View style={ScreenStyle.oneSponsor}>
            <Image
              source={require('../../../assets/pastSponsors/ATKT_Logo_2.png')}
              style={ScreenStyle.sponsorImageDimensions}></Image>
            <Text style={ScreenStyle.sponsorTitle}>Partner</Text>
          </View>

          <View style={ScreenStyle.oneSponsor}>
            <Image
              source={require('../../../assets/pastSponsors/AquaFeelLogo.png')}
              style={{
                height: 45,
                width: '100%',
                marginTop: 'auto',
                marginBottom: 'auto',
              }}></Image>
            <Text style={ScreenStyle.sponsorTitle}>Hydration Partner</Text>
          </View>
        </View>

        <View style={ScreenStyle.oneRowOfSponsors}>
          <View style={ScreenStyle.oneSponsor}>
            <Image
              source={require('../../../assets/pastSponsors/grand-mercure.jpeg')}
              style={ScreenStyle.sponsorImageDimensions}></Image>
            <Text style={ScreenStyle.sponsorTitle}>CSR Partner</Text>
          </View>

          <View style={ScreenStyle.oneSponsor}>
            <Image
              source={require('../../../assets/pastSponsors/OrientalAromatics_Logo.jpg')}
              style={{
                height: 45,
                width: '100%',
                marginTop: 'auto',
                marginBottom: 'auto',
              }}></Image>
            <Text style={ScreenStyle.sponsorTitle}>Hospitality Partner</Text>
          </View>
        </View>

        <View style={ScreenStyle.oneRowOfSponsors}>
          <View style={ScreenStyle.oneSponsor}>
            <Image
              source={require('../../../assets/pastSponsors/RagaRockLogo.png')}
              style={{
                height: 25,
                width: '100%',
                marginTop: 'auto',
                marginBottom: 'auto',
              }}></Image>
            <Text style={ScreenStyle.sponsorTitle}>Digital Media Partner</Text>
          </View>

          <View style={ScreenStyle.oneSponsor}>
            <Image
              source={require('../../../assets/pastSponsors/RazaFoundationLogo.png')}
              style={{
                height: 45,
                width: '100%',
                marginTop: 'auto',
                marginBottom: 'auto',
              }}></Image>
            <Text style={ScreenStyle.sponsorTitle}>Cultural Partner</Text>
          </View>
        </View>

        <View style={ScreenStyle.oneRowOfSponsors}>
          <View style={ScreenStyle.oneSponsor}>
            <Image
              source={require('../../../assets/pastSponsors/AAAG.jpg')}
              style={ScreenStyle.sponsorImageDimensions}></Image>
            <Text style={ScreenStyle.sponsorTitle}>Event Sponsor</Text>
          </View>

          <View style={ScreenStyle.oneSponsor}>
            <Image
              source={require('../../../assets/pastSponsors/GVFL.jpg')}
              style={{
                height: 53,
                width: '100%',
                marginTop: 'auto',
                marginBottom: 'auto',
              }}></Image>
            <Text style={ScreenStyle.sponsorTitle}>Event Sponsor</Text>
          </View>
        </View>

        <View
          style={[
            ScreenStyle.oneRowOfSponsors,
            {justifyContent: 'flex-start', marginLeft: 30},
          ]}>
          <View style={ScreenStyle.oneSponsor}>
            <Image
              source={require('../../../assets/pastSponsors/CapitalDentalLogo.png')}
              style={{
                height: 45,
                width: '100%',
                marginTop: 'auto',
                marginBottom: 'auto',
              }}></Image>
            <Text style={[ScreenStyle.sponsorTitle, {marginBottom: 'auto'}]}>
              Smile Sponsor
            </Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(SponsorsPage);
