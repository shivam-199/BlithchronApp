import {bindActionCreators} from 'redux';
import * as pagesActions from '../redux/action';
import * as authActions from '../../auth/redux/action';
import {connect} from 'react-redux';
import Colors from '../../../utilities/Colors';

import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  Alert,
} from 'react-native';
import ScreenStyle from './styles/StylesCampusAmbassadorHomePage';

import {LinearTextGradient} from 'react-native-text-gradient';
import {Button} from 'react-native-elements';
import * as Progress from 'react-native-progress';
import {useFocusEffect} from '@react-navigation/native';

import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PageRoutes from '../../../constants/PageRoutes';

export function TaskCard({name, description, ptsDesc, id, onPressTaskView}) {
  handleTask = id => {
    onPressTaskView(id);
  };
  return (
    <TouchableOpacity
      style={ScreenStyle.cardStyle}
      onPress={() => this.handleTask(id)}>
      <View style={ScreenStyle.topRow}>
        <Text style={ScreenStyle.taskName}>{name}</Text>
      </View>
      <View style={ScreenStyle.middleRow}>
        <Text style={ScreenStyle.taskDesc} numberOfLines={2}>
          {description}
        </Text>
        <IonIcon name="play" size={20} color={Colors.white} />
      </View>
      <Text style={ScreenStyle.ptsDesc} numberOfLines={2}>
        {ptsDesc}
      </Text>
    </TouchableOpacity>
  );
}

function LeaderboardCard({name, institution, rank, points, email}) {
  return (
    <View style={ScreenStyle.leaderboardCard}>
      {/* <IonIcon
        name="ios-person-circle-outline"
        size={60}
        color={Colors.white}
      /> */}
      <View style={ScreenStyle.nameAndCollege}>
        <Text style={ScreenStyle.leaderboardName}>{email || '-'}</Text>
        <Text style={ScreenStyle.leaderboardInst}>{institution || '-'}</Text>
      </View>
      <View style={ScreenStyle.pointsAndRank}>
        <Text style={ScreenStyle.leaderboardRank}>{rank}</Text>
        <Text style={ScreenStyle.leaderboardPoints}>{points} Pts</Text>
      </View>
    </View>
  );
}

class CampusAmbassadorHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      leaderInfo: false,
    };
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.refreshDone();
    });
    if (!this.props.auth.isLoggedIn) {
      this.props.navigation.navigate(PageRoutes.Drawer.CAMainPage);
    }
    const userId = this.props.auth.user.id;
    this.props.pagesActions
      .checkUserExistence({userId})
      .then(data => {
        const userExistsInFirestore = data;
        if (!userExistsInFirestore) {
          // Create new user data
          this.props.pagesActions
            .createNewCA()
            .then(data => {
              this.refreshDone();
            })
            .catch(error => {
              console.log(error);
            });
        } else {
          this.refreshDone();
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleTaskView = id => {
    this.props.navigation.navigate(PageRoutes.Drawer.CATaskPage, {id});
  };

  handleFinishedTasks = () => {
    this.props.navigation.navigate(PageRoutes.Drawer.CACompletedTaskPage);
  };

  handleReturnedTasks = () => {
    this.props.navigation.navigate(PageRoutes.Drawer.CAReturnedTaskPage);
  };

  handlePinnedTasks = () => {
    this.props.navigation.navigate(PageRoutes.Drawer.CAPinnedTaskPage);
  };

  refreshDone = () => {
    this.setState({refreshing: true});
    const userId = this.props.auth.user.id;
    this.props.authActions
      .fetchUserInfo({userId})
      .then(data => {})
      .catch(error => {});
    this.props.pagesActions
      .fetchUserTaskList()
      .then(data => {
        this.props.pagesActions
          .fetchLeaderboard()
          .then(data => {
            this.props.pagesActions
              .fetchTaskList()
              .then(data => {})
              .catch(error => {});
          })
          .catch(error => {});
      })
      .catch(error => {});
    this.setState({refreshing: false});
  };

  handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      {text: 'Confirm', onPress: () => this.props.authActions.logout()},
      {text: 'Cancel', onPress: () => {}},
    ]);
  };

  componentWillUnmount() {
    this._unsubscribe();
  }

  render() {
    const {pages, auth} = this.props;
    const {taskList = [], leaderboard = []} = pages;
    const {refreshing} = this.state;
    const userEmail = auth.user.email;

    return (
      <ScrollView
        style={ScreenStyle.root}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={this.refreshDone}
          />
        }>
        {/* Campus Ambassador  text*/}

        <View style={ScreenStyle.CATitleView}>
          <LinearTextGradient
            colors={[
              Colors.gradientTextLeft,
              Colors.gradientTextMiddle,
              Colors.gradientTextRight,
            ]}
            locations={[0, 0.5, 1]}>
            <Text style={ScreenStyle.CATitleText}>Campus Ambassador</Text>
          </LinearTextGradient>
          <MaterialIcons
            name="logout"
            color="white"
            style={ScreenStyle.logoutIcon}
            size={25}
            onPress={this.handleLogout}
          />
        </View>

        {/* Points earned view */}
        <View style={ScreenStyle.pointsMainView}>
          <View style={ScreenStyle.pointsBorderBox}>
            <Text style={ScreenStyle.welcomeOuter}>
              Welcome{' '}
              <Text style={ScreenStyle.welcomeEmail}>{userEmail} !</Text>
            </Text>
            <View style={ScreenStyle.pointsEarned}>
              <Text style={ScreenStyle.pointText}>Your total points are: </Text>
              <Text style={ScreenStyle.pointText}>
                {pages.isFetchingPoints ? (
                  <Progress.Circle size={25} indeterminate={true} />
                ) : (
                  parseInt(auth.user.totalPoints || 0) +
                  parseInt(auth.user.pointsBeforeApp || 0)
                )}
              </Text>
            </View>
          </View>
        </View>

        {/* TASKS  */}
        <View style={ScreenStyle.MainTasksView}>
          <View style={ScreenStyle.tasksTitleRow}>
            <Text style={ScreenStyle.tasksTitleStyle}>Tasks</Text>
            {pages.isFetchingTaskList && (
              <Progress.Circle size={25} indeterminate={true} />
            )}
            <View style={ScreenStyle.rowFlex}>
              <Button
                title="Finished"
                titleStyle={ScreenStyle.buttonTitleStyle}
                type="outline"
                buttonStyle={ScreenStyle.finishedTasksButton}
                onPress={this.handleFinishedTasks}
              />
              <Button
                title="Returned"
                titleStyle={ScreenStyle.buttonTitleStyle}
                type="outline"
                buttonStyle={ScreenStyle.returnedTasksButton}
                onPress={this.handleReturnedTasks}
              />
              <Button
                title="Pinned"
                titleStyle={ScreenStyle.buttonTitleStyle}
                type="outline"
                buttonStyle={ScreenStyle.pinnedTasksButton}
                onPress={this.handlePinnedTasks}
              />
            </View>
          </View>

          {taskList.length >= 1 ? (
            taskList.map(props => (
              <TaskCard
                {...props}
                key={props.id}
                onPressTaskView={id => this.handleTaskView(id)}
              />
            ))
          ) : (
            <Text style={ScreenStyle.emptyList}>No Tasks Yet!</Text>
          )}
        </View>

        {/* LEADERBOARD STARTS  */}

        <View style={ScreenStyle.MainTasksView}>
          <View style={ScreenStyle.tasksTitleRow}>
            <Text style={ScreenStyle.tasksTitleStyle}>Leaderboard</Text>
            {pages.isFetchingLeaderboard && (
              <Progress.Circle size={25} indeterminate={true} />
            )}
          </View>

          {leaderboard.length >= 1 ? (
            leaderboard
              .sort((a, b) => {
                return parseInt(a.rank) - parseInt(b.rank);
              })
              .filter(user => user.rank <= 3)
              .map(props => <LeaderboardCard {...props} key={props.id} />)
          ) : (
            <Text style={ScreenStyle.emptyList}>
              Looks empty here. Stay tuned!
            </Text>
          )}
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    pages: state.pages,
    auth: state.auth,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    pagesActions: bindActionCreators({...pagesActions}, dispatch),
    authActions: bindActionCreators({...authActions}, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CampusAmbassadorHomePage);
