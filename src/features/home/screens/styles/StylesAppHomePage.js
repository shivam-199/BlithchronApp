import {StyleSheet} from 'react-native';
import Colors from '../../../../utilities/Colors';
// import DimensionScale from '../../../../utilities/DimensionScale';

let style = {
  root: {
    flex: 1,
    backgroundColor: Colors.primarySolid,
  },
  textGradient: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '700',
  },
  lockIcon: {
    alignSelf: 'center',
    position: 'absolute',
    right: 5,
  },
};

export default StyleSheet.create(style);
