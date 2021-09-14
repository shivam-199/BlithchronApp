import {AUTH_SELECT_ROLE_PREFERENCE} from './constant';

export function selectRolePreference(data) {
  return {
    type: AUTH_SELECT_ROLE_PREFERENCE,
    data,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case AUTH_SELECT_ROLE_PREFERENCE:
      return {
        ...state,
        rolePrefDefined: true,
        userRole: action.data,
      };
    default:
      return state;
  }
}
