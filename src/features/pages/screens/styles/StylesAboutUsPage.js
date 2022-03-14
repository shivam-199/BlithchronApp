import {StyleSheet} from 'react-native';
import Colors from '../../../../utilities/Colors';
// import DimensionScale from '../../../../utilities/DimensionScale';

let style = {
  root: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  backgroundStyle: {
    backgroundColor: Colors.primarySolid,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  iconStyle: {
    color: Colors.white,
    marginRight: 10,
  },
  titleMargin: {
    marginTop: 10,
    marginBottom: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: '4%',
    color: Colors.white,
  },

  textStyleDepartment: {
    fontSize: 22,
    fontWeight: '700',
    margin: 10,
    marginLeft: '10%',
    textAlign: 'left',
    color: Colors.white,
  },
  image: {
    height: 100,
    width: 100,
    width: '25%',
  },
  info: {
    width: '75%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  roletextStyle: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 10,
    color: Colors.white,
  },
  emailId: {
    fontWeight: '700',
    fontSize: 14,
    color: Colors.white,
  },
  boxes: {
    borderRadius: 15,
    backgroundColor: Colors.shadowDark,
    width: '80%',
    height: 'auto',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    borderColor: Colors.black,
    borderBottomWidth: 3,
    borderRightWidth: 3,
    shadowColor: Colors.black,
    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation: 10,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  infoSection: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  EmailIdSection: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
  },
  emailIdIconPosition: {
    flex: 1,
    flexDirection: 'row',
  },
  contactNumberIconPosition: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
  },

  titleTextStyle: {
    fontWeight: '700',
    fontSize: 40,
  },
};

export default StyleSheet.create(style);
