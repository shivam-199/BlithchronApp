import {StyleSheet} from 'react-native';
import Colors from '../../../../utilities/Colors';
// import DimensionScale from '../../../../utilities/DimensionScale';

let style = {
  root: {
    flex: 1,
    backgroundColor: Colors.primaryDark,
  },
  CATitleView: {
    paddingTop: 20,
    paddingLeft: 20,
  },
  CATitleText: {
    fontSize: 45,
    fontWeight: 'bold',
  },
  pointsMainView: {
    backgroundColor: Colors.primaryDark,
    elevation: 10,
    width: '95%',
    alignSelf: 'center',
    marginVertical: 20,
    borderRadius: 10,
    flexDirection: 'column',
    maxHeight: 120,
  },
  pointsBorderBox: {
    height: '80%',
    width: '95%',
    alignSelf: 'center',
    marginBottom: 'auto',
    marginTop: 'auto',
    borderRadius: 20,
    borderColor: Colors.borderPurple,
    borderWidth: 3,
    flexDirection: 'row',
  },
  pointsEarned: {
    borderRightColor: Colors.borderPurple,
    borderRightWidth: 3,
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  pointText: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: '700',
  },
  pinnedPoints: {
    borderRightColor: Colors.borderPurple,
    borderRightWidth: 3,
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  availablePoints: {
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  MainTasksView: {
    width: '95%',
    alignSelf: 'center',
    flexDirection: 'column',
    marginVertical: 10,
  },
  tasksTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  appDownloadPart: {
    backgroundColor: Colors.primarySolid,
    alignSelf: 'center',
    marginTop: 15,
    borderRadius: 10,
    elevation: 3,
    flexDirection: 'column',
    padding: 15,
    width: '95%',
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pinIconStyle: {
    color: Colors.white,
    marginRight: 10,
  },
  taskName: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
  },
  middleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  taskDesc: {
    color: Colors.white,
    fontSize: 14,
    marginRight: 20,
  },
  ptsDesc: {
    marginTop: 15,
    color: Colors.white,
    fontSize: 14,
  },
  white15: {color: 'white', fontSize: 15},
  tasksTitleStyle: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 30,
  },
  buttonTitleStyle: {
    fontSize: 10,
    color: 'white',
  },
  finishedTasksButton: {
    borderWidth: 3,
    borderRadius: 40,
    minHeight: 40,
    minWidth: 100,
    borderColor: 'green',
    marginRight: 10,
  },
  pinnedTasksButton: {
    borderWidth: 3,
    borderRadius: 40,
    minHeight: 40,
    minWidth: 90,
  },
  rowFlex: {
    flexDirection: 'row',
  },
  leaderboardCard: {
    backgroundColor: Colors.primarySolid,
    height: 100,
    width: '100%',
    marginVertical: 10,
    borderRadius: 15,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  nameAndCollege: {
    flex: 3,
    justifyContent: 'center',
    flexDirection: 'column',
    marginLeft: 15,
  },
  leaderboardName: {
    color: Colors.white,
    fontWeight: '700',
    fontSize: 22,
  },
  leaderboardInst: {
    color: Colors.white,
    fontWeight: '600',
    fontSize: 16,
  },
  leaderboardRank: {
    color: Colors.white,
    fontWeight: '700',
    fontSize: 18,
  },
  leaderboardPoints: {
    color: Colors.white,
    fontWeight: '600',
    fontSize: 16,
  },
  pointsAndRank: {
    flex: 2,
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    alignItems: 'center',
  },
  seeMoreButton: {
    width: '30%',
    alignSelf: 'center',
    marginTop: 10,
    height: 40,
  },
};

export default StyleSheet.create(style);
