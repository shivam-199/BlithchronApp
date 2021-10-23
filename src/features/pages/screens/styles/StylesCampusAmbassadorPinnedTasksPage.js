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
  TitleText: {
    fontSize: 30,
  },
  MainView: {
    width: '100%',
    marginTop: 0,
    marginLeft: 20,
    width: '88%',
    flexDirection: 'column',
  },
  noTasksPinned: {
    fontSize: 15,
    color: Colors.white,
    marginVertical: 10,
  },
};

export default StyleSheet.create(style);
