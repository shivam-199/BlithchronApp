import initialState from './initialState';
import {reducer as selectRolePreference} from './selectRolePreference';
// import {reducer as clearReduxStore} from './clearReduxStore';

const reducers = [selectRolePreference];

export default function AuthReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    default:
      newState = state;
      break;
  }
  return reducers.reduce((s, r) => r(s, action), newState);
}
