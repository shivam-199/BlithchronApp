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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logoutIcon: {
    margin: 10,
  },
  CATitleText: {
    fontSize: 45,
    fontWeight: 'bold',
  },
  welcomeOuter: {
    color: Colors.white,
    fontSize: 18,
    marginBottom: 10,
  },
  welcomeEmail: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: '700',
  },
  pointsMainView: {
    backgroundColor: Colors.primaryDark,
    elevation: 10,
    width: '95%',
    alignSelf: 'center',
    marginVertical: 20,
    borderRadius: 10,
  },
  pointsBorderBox: {
    width: '95%',
    alignSelf: 'center',
    borderRadius: 20,
    borderColor: Colors.borderPurple,
    borderWidth: 3,
    flexDirection: 'column',
    padding: 10,
  },
  pointsEarned: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
  },
  pointText: {
    color: Colors.white,
    fontSize: 15,
    fontWeight: '700',
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
  cardStyle: {
    backgroundColor: Colors.primarySolid,
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 10,
    elevation: 3,
    flexDirection: 'column',
    paddingVertical: 10,
    paddingHorizontal: 15,
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
    marginBottom: 7.5,
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
    marginTop: 10,
    color: Colors.white,
    fontSize: 14,
  },
  tasksTitleStyle: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 25,
  },
  buttonTitleStyle: {
    fontSize: 10,
    color: 'white',
  },
  finishedTasksButton: {
    borderWidth: 3,
    borderRadius: 40,
    minHeight: 40,
    minWidth: 75,
    borderColor: 'green',
    marginRight: 5,
  },
  returnedTasksButton: {
    borderWidth: 3,
    borderRadius: 40,
    minHeight: 40,
    minWidth: 75,
    borderColor: 'red',
    marginRight: 5,
  },
  pinnedTasksButton: {
    borderWidth: 3,
    borderRadius: 40,
    minHeight: 40,
    minWidth: 75,
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
    flex: 5,
    justifyContent: 'center',
    flexDirection: 'column',
    marginLeft: 15,
  },
  leaderboardName: {
    color: Colors.white,
    fontSize: 18,
  },
  leaderboardInst: {
    color: Colors.white,
    fontWeight: '600',
    fontSize: 16,
  },
  leaderboardRank: {
    color: Colors.white,
    fontWeight: '700',
    fontSize: 22,
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
