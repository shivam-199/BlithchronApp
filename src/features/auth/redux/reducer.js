import initialState from './initialState';
import {reducer as selectRolePreference} from './selectRolePreference';
import {reducer as caLogin} from './caLogin';
import {reducer as logout} from './logout';
import {reducer as fetchUserInfo} from './fetchUserInfo';
import {reducer as resetPassword} from './resetPassword';

const reducers = [
  selectRolePreference,
  caLogin,
  logout,
  fetchUserInfo,
  resetPassword,
];

export default function AuthReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    default:
      newState = state;
      break;
  }
  return reducers.reduce((s, r) => r(s, action), newState);
}
