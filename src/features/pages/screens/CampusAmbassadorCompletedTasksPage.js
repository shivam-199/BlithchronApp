import {bindActionCreators} from 'redux';
import * as pagesActions from '../redux/action';
import {connect} from 'react-redux';
import Colors from '../../../utilities/Colors';

import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import ScreenStyle from './styles/StylesCampusAmbassadorCompletedTasksPage';
import PageRoutes from '../../../constants/PageRoutes';

import {LinearTextGradient} from 'react-native-text-gradient';

import {TaskCard} from './CampusAmbassadarHomePage';
import TaskStatus from '../../../constants/TaskStatus';

class CampusAmbassadorCompletedTasksPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleTaskView = id => {
    this.props.navigation.navigate(PageRoutes.Drawer.CATaskPage, {id});
  };

  handlePin = id => {
    console.log('Pin');
  };

  render() {
    const completedTaskList = this.props.pages.userTasks.taskList.filter(
      task => task.status === TaskStatus.COMPLETED,
    );
    return (
      <ScrollView style={ScreenStyle.root}>
        {/* Pinned Tasks  text*/}

        <View style={ScreenStyle.TitleView}>
          <LinearTextGradient
            colors={[
              Colors.gradientTextLeft,
              Colors.gradientTextMiddle,
              Colors.gradientTextRight,
            ]}
            locations={[0, 0.5, 1]}>
            <Text style={ScreenStyle.TitleText}>Completed Tasks</Text>
          </LinearTextGradient>
        </View>

        <View style={ScreenStyle.MainView}>
          {completedTaskList.length === 0 && (
            <Text style={ScreenStyle.noTasksDone}>No Tasks Completed Yet!</Text>
          )}
          {completedTaskList.map(props => (
            <TaskCard
              {...props}
              key={props.id}
              onPressTaskView={id => this.handleTaskView(id)}
              onPressPin={id => this.handlePin(id)}
            />
          ))}
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = ({pages = {}} = state) => ({pages});

function mapDispatchToProps(dispatch) {
  return {
    pagesActions: bindActionCreators({...pagesActions}, dispatch),
  };
}

const styles = StyleSheet.create({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CampusAmbassadorCompletedTasksPage);
