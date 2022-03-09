import {
  RESET_PASSWORD_BEGIN,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
  RESET_PASSWORD_DISMISS_ERROR,
} from './constant';
import auth from '@react-native-firebase/auth';

export function resetPassword({email}) {
  return async dispatch => {
    try {
      dispatch({
        type: RESET_PASSWORD_BEGIN,
      });

      // Reset Email Sent
      const data = await auth().sendPasswordResetEmail(email);

      dispatch({
        type: RESET_PASSWORD_SUCCESS,
        data,
      });

      return data;
    } catch (error) {
      dispatch({
        type: RESET_PASSWORD_FAILURE,
        data: error,
      });
      throw error;
    }
  };
}

export function dismissCaLoginError() {
  dispatch({
    type: RESET_PASSWORD_DISMISS_ERROR,
  });
}

export function reducer(state, action) {
  switch (action.type) {
    case RESET_PASSWORD_BEGIN:
      return {
        ...state,
        isFetching: true,
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isLoggedIn: true,
      };
    case RESET_PASSWORD_FAILURE:
      return {
        ...state,
        isFetching: false,
        isLoggedIn: false,
      };
    case RESET_PASSWORD_DISMISS_ERROR:
      return {
        ...state,
        isFetching: false,
        isLoggedIn: false,
      };
    default:
      return state;
  }
}
