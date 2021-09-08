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
      console.log('Inside reducer');
      console.log(action.data);
      // return {
      //   ...state,
      //   rolePrefDefined: true,
      //   userRole: {
      //     ...action.data,
      //   },
      // };
      return state;
    default:
      return state;
  }
}
