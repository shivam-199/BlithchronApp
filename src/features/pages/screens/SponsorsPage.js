import {bindActionCreators} from 'redux';
import * as pagesActions from '../redux/action';
import {connect} from 'react-redux';

import React, {Component} from 'react';
import {Image, Text, View,StyleSheet, ScrollView} from 'react-native';
import ScreenStyle from './styles/StylesSponsorPage';

import StickyHeaderFooterScrollView from 'react-native-sticky-header-footer-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import { LinearTextGradient } from "react-native-text-gradient";

class SponsorsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ScrollView style={ScreenStyle.root}>
        {/* CURRENT SPONSORS  */}
        <View style={styles.titleView}>
          <LinearTextGradient colors={['#41ABFE','#9460F1','#F5375C']} locations={[0,0.5,1]}>
              <Text style={styles.pageTitle}>
                Sponsors
              </Text>
            </LinearTextGradient>
          </View>

          <View style={{flexDirection:"column"}}>

            <View style={styles.oneRowOfSponsors}>

              <View style={styles.oneSponsor}>
                <Image source={require("../../../assets/currentSponsors/gujaratTourism.png")} style={styles.sponsorImageDimensions}></Image>
                <Text style={styles.sponsorTitle}>Title Sponsor</Text>
              </View>

              <View style={styles.oneSponsor}>
                <Image source={require("../../../assets/currentSponsors/sbi.png")} style={styles.sponsorImageDimensions}></Image>
                <Text style={styles.sponsorTitle}>Platinum Sponsor</Text>
              </View>

            </View>

            <View style={styles.oneRowOfSponsors}>

              <View style={styles.oneSponsor}>
                <Image source={require("../../../assets/currentSponsors/ITC_Logo.jpg")} style={styles.sponsorImageDimensions}></Image>
                <Text style={styles.sponsorTitle}>Major Event Partner</Text>
              </View>

              <View style={styles.oneSponsor}>
                <Image source={require("../../../assets/currentSponsors/hidden_brains.png")} style={{height:100, width:"120%", marginTop:20}}></Image>
                <Text style={[styles.sponsorTitle,{marginTop:"auto"}]}>Event Partner</Text>
              </View>

            </View>

            <View style={styles.oneRowOfSponsors}>

            <View style={styles.oneSponsor}>
                <Image source={require("../../../assets/currentSponsors/GIL_Logo.png")} style={{height:80,width:"80%", }}></Image>
                <Text style={styles.sponsorTitle}>Information Sponsor</Text>
              </View>

              <View style={styles.oneSponsor}>
                <Image source={require("../../../assets/currentSponsors/Garvi_Logo.jpg")} style={{height:25, width:"80%", marginTop:20}}></Image>
                <View style={{flexDirection:"column", alignItems:"center", marginTop:"auto"}}>
                  <Text style={styles.sponsorTitle}>Handicraft and</Text>
                  <Text style={{ color:"white",marginTop:0,fontSize:15, fontWeight:"bold"}}>Handloom Sponsor</Text>
                  </View>
              </View>
            </View>

            <View style={styles.oneRowOfSponsors}>

              <View style={styles.oneSponsor}>
                <Image source={require("../../../assets/currentSponsors/Sparsh_Publications.png")} style={styles.sponsorImageDimensions}></Image>
                <Text style={styles.sponsorTitle}>Literature Sponsor</Text>
              </View>

              <View style={styles.oneSponsor}>
                <Image source={require("../../../assets/currentSponsors/yocket.png")} style={{height:55, width:"80%", marginTop:20}}></Image>
                <Text style={[styles.sponsorTitle,{marginTop:"auto"}]}>Study Abroad Sponsor</Text>
              </View>

            </View>

          </View>

          <View style={styles.oneRowOfSponsors}>

              <View style={styles.oneSponsor}>
                <Image source={require("../../../assets/currentSponsors/CIMS.png")} style={{height:55, width:"160%", marginTop:20}}></Image>
                <Text style={styles.sponsorTitle}>Medical Sponsor</Text>
              </View>

              <View style={styles.oneSponsor}>
                <Image source={require("../../../assets/currentSponsors/einfochips.png")} style={{height:45, width:"150%", marginTop:"auto", marginBottom:"auto"}}></Image>
                <Text style={styles.sponsorTitle}>IT Sponsor</Text>
              </View>

            </View>

            <View style={styles.oneRowOfSponsors}>

            <View style={styles.oneSponsor}>
                <Image source={require("../../../assets/currentSponsors/Vivo_Logo.png")} style={styles.sponsorImageDimensions}></Image>
                <Text style={styles.sponsorTitle}>Pronites Title Sponsor</Text>
              </View>

              <View style={styles.oneSponsor}>
                <Image source={require("../../../assets/currentSponsors/Wiley.jpg")} style={{height:50, width:"125%", marginTop:"auto", marginBottom:"auto"}}></Image>
                <Text style={styles.sponsorTitle}>Literature Partner</Text>
              </View>
            </View>

            <View style={styles.oneRowOfSponsors}>

              <View style={styles.oneSponsor}>
                <Image source={require("../../../assets/currentSponsors/noticebard.png")} style={{height:57, width:"130%", marginTop:"auto", marginBottom:"auto"}}></Image>
                <Text style={styles.sponsorTitle}>Broadcast Partner</Text>
              </View>

              <View style={styles.oneSponsor}>
                <Image source={require("../../../assets/currentSponsors/Score.png")} style={{height:60, width:"130%", marginTop:"auto", marginBottom:"auto"}}></Image>
                <Text style={styles.sponsorTitle}>Media Partner</Text>
              </View>

            </View>

            <View style={[styles.oneRowOfSponsors,{justifyContent:"flex-start", marginLeft:30, }]}>

            <View style={styles.oneSponsor}>
                <Image source={require("../../../assets/currentSponsors/JawedHabibLogo.png")} style={{height:40, width:"100%", marginTop:"auto", marginBottom:"auto"}}></Image>
                <Text style={styles.sponsorTitle}>Grooming Partner</Text>
              </View>

            </View>

        {/* OLD SPONSORS  */}
        {/* BLITHCHRON  text*/}
        <View style={styles.titleView}>
          <LinearTextGradient colors={['#41ABFE','#9460F1','#F5375C']} locations={[0,0.5,1]}>
              <Text style={styles.pageTitle}>
                Past Sponsors
              </Text>
            </LinearTextGradient>
          </View>

          <View style={{flexDirection:"column"}}>

            <View style={styles.oneRowOfSponsors}>

              <View style={styles.oneSponsor}>
                <Image source={require("../../../assets/pastSponsors/gujaratTourism.png")} style={styles.sponsorImageDimensions}></Image>
                <Text style={styles.sponsorTitle}>Title Sponsor</Text>
              </View>

              <View style={styles.oneSponsor}>
                <Image source={require("../../../assets/pastSponsors/ITC_Logo.jpg")} style={styles.sponsorImageDimensions}></Image>
                <Text style={styles.sponsorTitle}>CSR Sponsor</Text>
              </View>

            </View>

            <View style={styles.oneRowOfSponsors}>

              <View style={styles.oneSponsor}>
                <Image source={require("../../../assets/pastSponsors/GIL_Logo.png")} style={{height:80,width:"80%", }}></Image>
                <Text style={styles.sponsorTitle}>Information Partner</Text>
              </View>

              <View style={styles.oneSponsor}>
                <Image source={require("../../../assets/pastSponsors/yocket.png")} style={{height:55, width:"80%", marginTop:20}}></Image>
                <Text style={[styles.sponsorTitle,{marginTop:"auto"}]}>Study Abroad Partner</Text>
              </View>

            </View>

            <View style={styles.oneRowOfSponsors}>

              <View style={styles.oneSponsor}>
                <Image source={require("../../../assets/pastSponsors/Garvi_Logo.jpg")} style={{height:25, width:"80%", marginTop:20}}></Image>
                <View style={{flexDirection:"column", alignItems:"center", marginTop:"auto"}}>
                  <Text style={styles.sponsorTitle}>Handicraft and</Text>
                  <Text style={{ color:"white",marginTop:0,fontSize:15, fontWeight:"bold"}}>Handloom Sponsor</Text>
                  </View>
              </View>

              <View style={styles.oneSponsor}>
                <Image source={require("../../../assets/pastSponsors/Vivo_Logo.png")} style={styles.sponsorImageDimensions}></Image>
                <Text style={styles.sponsorTitle}>Pronites Title Sponsor</Text>
              </View>
            </View>

            <View style={styles.oneRowOfSponsors}>

              <View style={styles.oneSponsor}>
                <Image source={require("../../../assets/pastSponsors/paytm.jpeg")} style={styles.sponsorImageDimensions}></Image>
                <Text style={styles.sponsorTitle}>Event Sponsor</Text>
              </View>

              <View style={styles.oneSponsor}>
                <Image source={require("../../../assets/pastSponsors/KHS_Logo.png")} style={{height:48, width:"100%", marginTop:20, }}></Image>
                <Text style={[styles.sponsorTitle,{marginTop:"auto"}]}>Major Event Sponsor</Text>
              </View>

            </View>

          </View>

          <View style={styles.oneRowOfSponsors}>

              <View style={styles.oneSponsor}>
                <Image source={require("../../../assets/pastSponsors/UnionBank_Logo.png")} style={{height:20, width:"100%", marginTop:"auto", marginBottom:"auto"}}></Image>
                <Text style={styles.sponsorTitle}>Event Sponsor</Text>
              </View>

              <View style={styles.oneSponsor}>
                <Image source={require("../../../assets/pastSponsors/TinderName_Logo.png")} style={{height:20, width:"100%", marginTop:"auto", marginBottom:"auto"}}></Image>
                <Text style={styles.sponsorTitle}>Partner</Text>
              </View>

            </View>

            <View style={styles.oneRowOfSponsors}>

              <View style={styles.oneSponsor}>
                <Image source={require("../../../assets/pastSponsors/Monster_Logo.jpg")} style={styles.sponsorImageDimensions}></Image>
                <View style={{flexDirection:"column", alignItems:"center", marginTop:"auto"}}>
                  <Text style={styles.sponsorTitle}>Official Energy</Text>
                  <Text style={{ color:"white",marginTop:0,fontSize:15, fontWeight:"bold"}}>Drink Partner</Text>
                  </View>
              </View>

              <View style={styles.oneSponsor}>
                <Image source={require("../../../assets/pastSponsors/ZebronicsLogo.jpg")} style={styles.sponsorImageDimensions}></Image>
                <Text style={styles.sponsorTitle}>Audio Partner</Text>
              </View>
            </View>

            <View style={styles.oneRowOfSponsors}>

              <View style={styles.oneSponsor}>
                <Image source={require("../../../assets/pastSponsors/JK_Logo.jpg")} style={{height:80, width:"100%", marginTop:"auto", marginBottom:"auto"}}></Image>
                <Text style={styles.sponsorTitle}>CSR Partner</Text>
              </View>

              <View style={styles.oneSponsor}>
                <Image source={require("../../../assets/pastSponsors/amul.jpg")} style={styles.sponsorImageDimensions}></Image>
                <Text style={styles.sponsorTitle}>Dairy Partner</Text>
              </View>

            </View>

            <View style={styles.oneRowOfSponsors}>

              <View style={styles.oneSponsor}>
                <Image source={require("../../../assets/pastSponsors/JawedHabibLogo.png")} style={{height:40, width:"100%", marginTop:"auto", marginBottom:"auto"}}></Image>
                <Text style={styles.sponsorTitle}>Grooming Partner</Text>
              </View>

              <View style={styles.oneSponsor}>
                <Image source={require("../../../assets/pastSponsors/play-station.jpeg")} style={styles.sponsorImageDimensions}></Image>
                <View style={{flexDirection:"column", alignItems:"center", marginTop:"auto"}}>
                  <Text style={styles.sponsorTitle}>Console Partner</Text>
                  <Text style={{ color:"white",marginTop:0,fontSize:15, fontWeight:"bold"}}>for Skirmish</Text>
                  </View>
              </View>      
            </View>

            <View style={styles.oneRowOfSponsors}>

              <View style={styles.oneSponsor}>
                <Image source={require("../../../assets/pastSponsors/CanaraBankLogo.png")} style={{height:80, width:"100%", marginTop:"auto", marginBottom:"auto"}}></Image>
                <Text style={styles.sponsorTitle}>Event Sponsor</Text>
              </View>

              <View style={styles.oneSponsor}>
                <Image source={require("../../../assets/pastSponsors/IciciBankLogo.png")} style={{height:12, width:"100%", marginTop:"auto", marginBottom:"auto"}}></Image>
                <Text style={styles.sponsorTitle}>Partner</Text>
              </View>

            </View>

            <View style={styles.oneRowOfSponsors}>

              <View style={styles.oneSponsor}>
                <Image source={require("../../../assets/pastSponsors/TownScript_Logo.png")} style={{height:30, width:"100%", marginTop:"auto", marginBottom:"auto"}}></Image>
                <Text style={styles.sponsorTitle}>Ticketing Partner</Text>
              </View>

              <View style={styles.oneSponsor}>
                <Image source={require("../../../assets/pastSponsors/tea-post.jpg")} style={styles.sponsorImageDimensions}></Image>
                <Text style={styles.sponsorTitle}>Chai Partner</Text>
              </View>

            </View>

            <View style={styles.oneRowOfSponsors}>

              <View style={styles.oneSponsor}>
                <Image source={require("../../../assets/pastSponsors/SouledStore_Logo.jpg")} style={styles.sponsorImageDimensions}></Image>
                <Text style={styles.sponsorTitle}>Prime Gifting Partner</Text>
              </View>

              <View style={styles.oneSponsor}>
                <Image source={require("../../../assets/pastSponsors/breakout-logo.jpg")} style={{height:55, width:"100%", marginTop:"auto", marginBottom:"auto"}}></Image>
                <Text style={styles.sponsorTitle}>Event Partner</Text>
              </View>

            </View>

            <View style={styles.oneRowOfSponsors}>

              <View style={styles.oneSponsor}>
                <Image source={require("../../../assets/pastSponsors/SouledStore_Logo.jpg")} style={styles.sponsorImageDimensions}></Image>
                <Text style={styles.sponsorTitle}>Ice Tea Partner</Text>
              </View>

              <View style={styles.oneSponsor}>
                <Image source={require("../../../assets/pastSponsors/BrewHouseLogo.png")} style={styles.sponsorImageDimensions}></Image>
                <Text style={styles.sponsorTitle}>Gaming Partner</Text>
              </View>

            </View>

            <View style={styles.oneRowOfSponsors}>

              <View style={styles.oneSponsor}>
                <Image source={require("../../../assets/pastSponsors/BangaloreOpenAirLogo.jpeg")} style={styles.sponsorImageDimensions}></Image>
                <Text style={styles.sponsorTitle}>Event Partner</Text>
              </View>

              <View style={styles.oneSponsor}>
                <Image source={require("../../../assets/pastSponsors/StatusFashionLogo.png")} style={{height:55, width:"100%", marginTop:"auto", marginBottom:"auto"}}></Image>
                <Text style={styles.sponsorTitle}>Fashion Partner</Text>
              </View>

            </View>

            <View style={styles.oneRowOfSponsors}>

              <View style={styles.oneSponsor}>
                <Image source={require("../../../assets/pastSponsors/ATKT_Logo_2.png")} style={styles.sponsorImageDimensions}></Image>
                <Text style={styles.sponsorTitle}>Partner</Text>
              </View>

              <View style={styles.oneSponsor}>
                <Image source={require("../../../assets/pastSponsors/AquaFeelLogo.png")} style={{height:45, width:"100%", marginTop:"auto", marginBottom:"auto"}}></Image>
                <Text style={styles.sponsorTitle}>Hydration Partner</Text>
              </View>

            </View>

            <View style={styles.oneRowOfSponsors}>

              <View style={styles.oneSponsor}>
                <Image source={require("../../../assets/pastSponsors/grand-mercure.jpeg")} style={styles.sponsorImageDimensions}></Image>
                <Text style={styles.sponsorTitle}>CSR Partner</Text>
              </View>

              <View style={styles.oneSponsor}>
                <Image source={require("../../../assets/pastSponsors/OrientalAromatics_Logo.jpg")} style={{height:45, width:"100%", marginTop:"auto", marginBottom:"auto"}}></Image>
                <Text style={styles.sponsorTitle}>Hospitality Partner</Text>
              </View>

            </View>

            <View style={styles.oneRowOfSponsors}>

              <View style={styles.oneSponsor}>
                <Image source={require("../../../assets/pastSponsors/RagaRockLogo.png")} style={{height:25, width:"100%", marginTop:"auto", marginBottom:"auto"}}></Image>
                <Text style={styles.sponsorTitle}>Digital Media Partner</Text>
              </View>

              <View style={styles.oneSponsor}>
                <Image source={require("../../../assets/pastSponsors/RazaFoundationLogo.png")} style={{height:45, width:"100%", marginTop:"auto", marginBottom:"auto"}}></Image>
                <Text style={styles.sponsorTitle}>Cultural Partner</Text>
              </View>

            </View>

            <View style={styles.oneRowOfSponsors}>

              <View style={styles.oneSponsor}>
                <Image source={require("../../../assets/pastSponsors/AAAG.jpg")} style={styles.sponsorImageDimensions}></Image>
                <Text style={styles.sponsorTitle}>Event Sponsor</Text>
              </View>

              <View style={styles.oneSponsor}>
                <Image source={require("../../../assets/pastSponsors/GVFL.jpg")} style={{height:53, width:"100%", marginTop:"auto", marginBottom:"auto"}}></Image>
                <Text style={styles.sponsorTitle}>Event Sponsor</Text>
              </View>

            </View>

            <View style={[styles.oneRowOfSponsors,{justifyContent:"flex-start", marginLeft:30, }]}>

              <View style={styles.oneSponsor}>
                <Image source={require("../../../assets/pastSponsors/CapitalDentalLogo.png")} style={{height:45, width:"100%", marginTop:"auto", marginBottom:"auto"}}></Image>
                <Text style={[styles.sponsorTitle,{marginBottom:"auto"}]}>Smile Sponsor</Text>
              </View>

            </View>          
      </ScrollView>
      
    );
  }
}

const styles = StyleSheet.create({
  titleView: {
    marginLeft:"auto",
    marginRight:"auto",
    marginTop:20,
    // paddingBottom:40,
  },

  pageTitle: {
    marginTop: 16,
    marginLeft:20,
    paddingVertical: 8,
    textAlign: "center",
    fontSize: 42,
    fontWeight: "bold",
  },
  textGradientStyle: {
    fontWeight: "bold", 
    marginLeft:20,
  },
  sponsorImageDimensions : {
    height:90, 
    width:90,
    marginTop:"auto"
  },
  sponsorTitle : {
    color:"white", 
    // marginTop:20,
    marginTop:"auto", 
    fontSize:15,
    fontWeight:"bold",
    
  },
  oneRowOfSponsors : {
    flexDirection:"row",
    justifyContent:"space-around", 
    marginTop:40,
    height:140
  },
  oneSponsor :{
    flexDirection:"column", 
    alignItems:"center"
  },
});


const mapStateToProps = ({events = {}} = state) => ({events});

function mapDispatchToProps(dispatch) {
  return {
    pagesActions: bindActionCreators({...pagesActions}, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SponsorsPage);
