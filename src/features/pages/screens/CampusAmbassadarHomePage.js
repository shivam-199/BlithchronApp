import {bindActionCreators} from 'redux';
import * as pagesActions from '../redux/action';
import {connect} from 'react-redux';
import Colors from '../../../utilities/Colors';

import React, {Component} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import ScreenStyle from './styles/StylesCampusAmbassadorHomePage';

import {LinearTextGradient} from 'react-native-text-gradient';
import {Button} from 'react-native-elements';

import IonIcon from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import PageRoutes from '../../../constants/PageRoutes';

function TaskCard({
  name,
  description,
  ptsDesc,
  id,
  onPressTaskView,
  onPressPin,
}) {
  handleTask = id => {
    onPressTaskView(id);
  };
  handlePin = id => {
    onPressPin(id);
  };
  return (
    <TouchableOpacity
      style={ScreenStyle.appDownloadPart}
      onPress={() => this.handleTask(id)}>
      <View style={ScreenStyle.topRow}>
        <SimpleLineIcons
          name="pin"
          style={ScreenStyle.pinIconStyle}
          size={20}
          onPress={() => this.handlePin(id)}
        />
        <Text style={ScreenStyle.taskName}>{name}</Text>
      </View>
      <View style={ScreenStyle.middleRow}>
        <Text style={ScreenStyle.taskDesc} numberOfLines={2}>
          {description}
        </Text>
        <IonIcon name="play" size={20} color={Colors.white} />
      </View>
      <Text style={ScreenStyle.ptsDesc}>{ptsDesc}</Text>
    </TouchableOpacity>
  );
}

function LeaderboardCard({name, institution, rank, points}) {
  return (
    <View style={ScreenStyle.leaderboardCard}>
      <IonIcon
        name="ios-person-circle-outline"
        size={60}
        color={Colors.white}
      />
      <View style={ScreenStyle.nameAndCollege}>
        <Text style={ScreenStyle.leaderboardName}>{name}</Text>
        <Text style={ScreenStyle.leaderboardInst}>{institution}</Text>
      </View>
      <View style={ScreenStyle.pointsAndRank}>
        <Text style={ScreenStyle.leaderboardRank}>{rank}</Text>
        <Text style={ScreenStyle.leaderboardPoints}>{points || '-'} Pts</Text>
      </View>
    </View>
  );
}

class CampusAmbassadorHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
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
              console.log(data);
            })
            .catch(error => {});
        }
      })
      .catch(error => {});

    // Fetching task list
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
  }

  handleTaskView = id => {
    this.props.navigation.navigate(PageRoutes.Drawer.CATaskPage, {id});
  };

  handlePin = id => {
    console.log('Pin');
  };

  render() {
    const {pages} = this.props;
    const {taskList = [], leaderboard = []} = pages;

    return (
      <ScrollView style={ScreenStyle.root}>
        {/* Campus Ambassador  text*/}

        <View style={ScreenStyle.CATitleView}>
          <LinearTextGradient
            style={ScreenStyle.textGradientStyle}
            colors={[
              Colors.gradientTextLeft,
              Colors.gradientTextMiddle,
              Colors.gradientTextRight,
            ]}
            locations={[0, 0.5, 1]}>
            <Text style={ScreenStyle.CATitleText}>Campus Ambassador</Text>
          </LinearTextGradient>
        </View>

        {/* Points earned view */}
        <View style={ScreenStyle.pointsMainView}>
          <View style={ScreenStyle.pointsBorderBox}>
            <View style={ScreenStyle.pointsEarned}>
              <Text style={ScreenStyle.pointText}>Points Earned</Text>
              <Text style={ScreenStyle.pointText}>{'250'}</Text>
            </View>
            <View style={ScreenStyle.pinnedPoints}>
              <Text style={ScreenStyle.pointText}>Pinned Points</Text>
              <Text style={ScreenStyle.pointText}>{'1250'}</Text>
            </View>
          </View>
        </View>

        {/* TASKS  */}
        <View style={ScreenStyle.MainTasksView}>
          <View style={ScreenStyle.tasksTitleRow}>
            <Text style={ScreenStyle.tasksTitleStyle}>Tasks</Text>
            <View style={ScreenStyle.rowFlex}>
              <Button
                title="Finished Tasks"
                titleStyle={ScreenStyle.buttonTitleStyle}
                type="outline"
                buttonStyle={ScreenStyle.finishedTasksButton}
              />
              <Button
                title="Pinned Tasks"
                titleStyle={ScreenStyle.buttonTitleStyle}
                type="outline"
                buttonStyle={ScreenStyle.pinnedTasksButton}
              />
            </View>
          </View>

          {taskList.length >= 1 &&
            taskList.map(props => (
              <TaskCard
                {...props}
                key={props.id}
                onPressTaskView={id => this.handleTaskView(id)}
                onPressPin={id => this.handlePin(id)}
              />
            ))}

          <Button
            title="See more"
            titleStyle={{color: Colors.buttonBlue}}
            type="clear"
            buttonStyle={ScreenStyle.seeMoreButton}
          />
        </View>

        {/* LEADERBOARD STARTS  */}

        <View style={ScreenStyle.MainTasksView}>
          <View style={ScreenStyle.tasksTitleRow}>
            <Text style={ScreenStyle.tasksTitleStyle}>Leaderboard</Text>
          </View>

          {leaderboard.length >= 1 &&
            leaderboard
              .sort((a, b) => {
                return parseInt(a.rank) - parseInt(b.rank);
              })
              .map(props => <LeaderboardCard {...props} key={props.id} />)}
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
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CampusAmbassadorHomePage);
