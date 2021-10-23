import {bindActionCreators} from 'redux';
import * as pagesActions from '../redux/action';
import {connect} from 'react-redux';
import Colors from '../../../utilities/Colors';

import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import ScreenStyle from './styles/StylesCampusAmbassadorPinnedTasksPage';

import {LinearTextGradient} from 'react-native-text-gradient';

import {TaskCard} from './CampusAmbassadarHomePage';

class EventsPage extends Component {
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
    const pinnedTaskList = this.props.pages.userTasks.taskList.filter(task => {
      if (task.isPinned) {
        return task;
      }
    });
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
            <Text style={ScreenStyle.TitleText}>Pinned Tasks</Text>
          </LinearTextGradient>
        </View>

        <View style={ScreenStyle.MainView}>
          {pinnedTaskList.length === 0 && (
            <Text style={ScreenStyle.noTasksPinned}>No Tasks Pinned Yet!</Text>
          )}
          {pinnedTaskList.map(props => {
            <TaskCard
              {...props}
              key={props.id}
              onPressTaskView={id => this.handleTaskView(id)}
              onPressPin={id => this.handlePin(id)}
            />;
          })}
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

export default connect(mapStateToProps, mapDispatchToProps)(EventsPage);
