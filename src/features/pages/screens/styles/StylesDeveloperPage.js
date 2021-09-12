import {StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';
import Colors from '../../../../utilities/Colors';
// import DimensionScale from '../../../../utilities/DimensionScale';

let styles = {
  root: {
    backgroundColor: Colors.primarySolid,
    flex: 1,
  },
  backgroundStyle: {
    backgroundColor: Colors.primarySolid,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignContent: 'center',
  },
  iconStyle: {
    color: Colors.white,
    marginRight: 10,
  },
  titleMargin: {
    marginTop: 10,
    marginBottom: 10,
  },
  textStyle: {
    fontSize: 18,
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
    width: '72%',
    height: 'auto',
    padding: 20,
    marginBottom: 20,
    borderColor: Colors.black,
    borderBottomWidth: 3,
    borderRightWidth: 3,
    shadowColor: Colors.black,

    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation: 10,
    alignItems: 'center',
  },
  devNameSection: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  devEmailIdSection: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
  },
  emailIdIconPosition: {
    flex: 1,
    flexDirection: 'row',
  },
  titleTextStyle: {fontWeight: '700', fontSize: 40},
};

export default StyleSheet.create(styles);
