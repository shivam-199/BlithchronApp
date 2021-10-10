import initialState from './initialState';
import {reducer as checkUserExistence} from './checkUserExistence';
import {reducer as createNewCA} from './createNewCA';
import {reducer as fetchTaskList} from './fetchTaskList';
import {reducer as fetchLeaderboard} from './fetchLeaderboard';
import {reducer as viewTask} from './viewTask';
import {reducer as selectPhotos} from './selectPhotos';
import {reducer as submitTask} from './submitTask';
import {reducer as removeSelectedPhoto} from './removeSelectedPhoto';
import {reducer as fetchUserTaskList} from './fetchUserTaskList';

const reducers = [
  checkUserExistence,
  createNewCA,
  fetchTaskList,
  fetchLeaderboard,
  viewTask,
  selectPhotos,
  submitTask,
  removeSelectedPhoto,
  fetchUserTaskList,
];

export default function PagesReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    default:
      newState = state;
      break;
  }
  return reducers.reduce((s, r) => r(s, action), newState);
}
