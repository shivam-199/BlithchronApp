import {StyleSheet} from 'react-native';
import Colors from '../../../../utilities/Colors';
// import DimensionScale from '../../../../utilities/DimensionScale';

let style = {
  root: {
    flex: 1,
    backgroundColor: Colors.primaryDark,
  },
  TitleView: {
    paddingTop: 20,
    paddingLeft: 20,
  },
  bold45: {
    fontSize: 45,
    fontWeight: '700',
  },
  bold17: {
    fontSize: 17,
    fontWeight: '700',
  },
  buttonsAlignment: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 50,
    marginVertical: 10,
  },
  buttonTitleStyle: {
    fontSize: 13,
    color: 'white',
  },
  loginButtonStyle: {
    borderWidth: 3,
    borderRadius: 40,
    minWidth: 70,
  },
  registerButtonStyle: {
    borderWidth: 3,
    borderRadius: 40,
    minWidth: 80,
  },
  tncButtonStyle: {
    borderWidth: 3,
    borderRadius: 40,
    minWidth: 150,
  },

  dashButtonStyle: {
    borderWidth: 3,
    borderRadius: 40,
    minWidth: 150,
    margin: 20,
  },
  TextCardView: {
    flexDirection: 'column',
  },
  singleInfoCard: {
    backgroundColor: Colors.primarySolid,
    width: '90%',
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 15,
    elevation: 3,
    flexDirection: 'column',
    padding: 15,
  },
  infoCardTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 15,
  },
  white15: {
    color: 'white',
    fontSize: 14,
  },
  questionName: {
    display: 'flex',
    flexDirection: 'row',
    color: Colors.white,
    marginBottom: 10,
  },
  questionMail: {
    display: 'flex',
    flexDirection: 'row',
  },
  contactText: {
    color: Colors.white,
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '700',
  },
};

export default StyleSheet.create(style);
