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
    paddingLeft: 10,
  },
  TitleText: {
    fontSize: 30,
  },
  MainView: {
    flexDirection: 'column',
    width: '95%',
    marginHorizontal: '2.5%',
  },
  noTasksPinned: {
    fontSize: 18,
    color: Colors.white,
    marginVertical: 10,
    fontWeight: '700',
  },
};

export default StyleSheet.create(style);
