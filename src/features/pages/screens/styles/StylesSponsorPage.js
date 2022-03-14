import {StyleSheet} from 'react-native';
import Colors from '../../../../utilities/Colors';
// import DimensionScale from '../../../../utilities/DimensionScale';

let style = {
  root: {
    flex: 1,
    backgroundColor: Colors.primaryDark,
    paddingHorizontal: 10,
  },
  titleView: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
    // paddingBottom:40,
  },

  pageTitle: {
    marginTop: 16,
    marginLeft: 20,
    paddingVertical: 8,
    textAlign: 'center',
    fontSize: 42,
    fontWeight: 'bold',
  },
  textGradientStyle: {
    fontWeight: 'bold',
    marginLeft: 20,
  },
  sponsorImageDimensions: {
    height: 90,
    width: 90,
    marginTop: 'auto',
  },
  sponsorTitle: {
    color: 'white',
    // marginTop:20,
    marginTop: 'auto',
    fontSize: 15,
    fontWeight: 'bold',
  },
  oneRowOfSponsors: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 40,
    height: 140,
  },
  oneSponsor: {
    flexDirection: 'column',
    alignItems: 'center',
  },
};

export default StyleSheet.create(style);
