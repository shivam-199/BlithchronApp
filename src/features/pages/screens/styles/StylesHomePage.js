import {StyleSheet} from 'react-native';
import Colors from '../../../../utilities/Colors';
// import DimensionScale from '../../../../utilities/DimensionScale';

let style = {
  root: {
    flex: 1,
    backgroundColor: Colors.primaryDark,
  },
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
    borderRadius:20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 1,
    elevation: 5,
    
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
    
    
    
    
    
  
};

export default StyleSheet.create(style);
