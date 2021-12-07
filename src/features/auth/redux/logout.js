import {LOGOUT} from './constant';

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
      };
    default:
      return state;
  }
}
