import {StyleSheet} from 'react-native';
import Colors from '../../../../utilities/Colors';
// import DimensionScale from '../../../../utilities/DimensionScale';

let style = {
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
  contactUsMargin: {
    marginTop: 20,
    marginBottom: 10,
  },
  textStyle: {
    fontSize: 18,
    fontWeight: '700',
    margin: 10,

    color: Colors.white,
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
  emailIdBlithchron: {
    fontWeight: '700',
    fontSize: 22,
    color: Colors.white,
    marginBottom: 20,
  },
  website: {
    fontWeight: '700',
    fontSize: 22,
    color: Colors.white,
  },
  websiteIconPosition: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 15,
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
  socialMediaWebsiteIcon: {
    flex: 1,
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
  blithEmailIdSection: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 15,
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

  titleTextStyle: {fontWeight: '700', fontSize: 40},

  socialMediaIconsMargin: {
    marginRight: 15,
  },
};

export default StyleSheet.create(style);
