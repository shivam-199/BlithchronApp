import {StyleSheet} from 'react-native';
import Colors from '../../../../utilities/Colors';
// import DimensionScale from '../../../../utilities/DimensionScale';

let style = {
  root: {
    backgroundColor: Colors.white,
    
  },
  backgroundStyle: {
    backgroundColor: Colors.primarySolid,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  titleMargin: {
    marginTop: 30,
    marginBottom: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleTextStyle: {fontWeight: '700', fontSize: 40},

  pastevents:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100
  },
  eventpage: {
    resizeMode: 'contain',
    flex: 1,
    height: 250,
    width: 250,
    borderRadius: 20,
    position: 'relative'
    
  },
  textafterimg: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    padding: 10,
  },
  component1: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  forbutton: {
    height: 40,
    width: 120,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ff8c00',
    borderRadius: 7
  },
  buttonText: {
    color: '#fff',
    fontSize: 15
  },
  buttoncontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10

  }
  
};

export default StyleSheet.create(style);
