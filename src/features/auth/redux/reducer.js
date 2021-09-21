import initialState from './initialState';
import {reducer as selectRolePreference} from './selectRolePreference';
import {reducer as caLogin} from './caLogin';

const reducers = [selectRolePreference, caLogin];

export default function AuthReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    default:
      newState = state;
      break;
  }
  return reducers.reduce((s, r) => r(s, action), newState);
}
