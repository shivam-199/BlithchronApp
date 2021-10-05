import initialState from './initialState';
import {reducer as checkUserExistence} from './checkUserExistence';
import {reducer as createNewCA} from './createNewCA';
import {reducer as fetchTaskList} from './fetchTaskList';

const reducers = [checkUserExistence, createNewCA, fetchTaskList];

export default function PagesReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    default:
      newState = state;
      break;
  }
  return reducers.reduce((s, r) => r(s, action), newState);
}
