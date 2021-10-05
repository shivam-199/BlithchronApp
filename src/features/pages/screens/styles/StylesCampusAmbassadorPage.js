import {StyleSheet} from 'react-native';
import Colors from '../../../../utilities/Colors';
// import DimensionScale from '../../../../utilities/DimensionScale';

let style = {
  root: {flex: 1, backgroundColor: Colors.primaryDark},
  TitleView: {paddingTop: 20, paddingLeft: 20},
  bold45: {fontSize: 45, fontWeight: '700'},
  bold17: {fontSize: 17, fontWeight: '700'},
  buttonsAlignment: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  loginButtonStyle: {
    borderWidth: 3,
    borderRadius: 40,
    height: 40,
    width: 70,
    fontSize: 2,
  },
  registerButtonStyle: {
    borderWidth: 3,
    borderRadius: 40,
    height: 40,
    width: 80,
    fontSize: 2,
  },
  tncButtonStyle: {
    borderWidth: 3,
    borderRadius: 40,
    height: 40,
    width: 150,
    fontSize: 2,
  },
  TextCardView: {
    height: 620,
    width: '100%',
    marginTop: 0,
    marginLeft: 20,
    width: '88%',
    flexDirection: 'column',
  },
  singleInfoCard: {
    backgroundColor: Colors.primaryDark,
    height: 350,
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 30,
    elevation: 3,
    flexDirection: 'column',
    padding: 13,
  },
  infoCardTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
  },
  white15: {color: 'white', fontSize: 15},
  buttonTitleStyle: {fontSize: 13, color: 'white'},
};

export default StyleSheet.create(style);
