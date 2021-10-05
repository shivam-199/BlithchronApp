import {
  CA_LOGIN_BEGIN,
  CA_LOGIN_FAILURE,
  CA_LOGIN_DISMISS_ERROR,
  CA_LOGIN_SUCCESS,
} from './constant';
import auth from '@react-native-firebase/auth';

export function caLogin({email, password}) {
  return async dispatch => {
    try {
      dispatch({
        type: CA_LOGIN_BEGIN,
      });

      // Authentication start
      const data = await auth().signInWithEmailAndPassword(email, password);

      dispatch({
        type: CA_LOGIN_SUCCESS,
        data,
      });

      return data;
    } catch (error) {
      dispatch({
        type: CA_LOGIN_FAILURE,
        data: error,
      });
      throw error;
    }
  };
}

export function dismissCaLoginError() {
  dispatch({
    type: CA_LOGIN_DISMISS_ERROR,
  });
}

export function reducer(state, action) {
  switch (action.type) {
    case CA_LOGIN_BEGIN:
      return {
        ...state,
        isFetching: true,
      };
    case CA_LOGIN_SUCCESS:
      const {user} = state;

      const newUser = action.data.user;

      user.name = newUser.displayName;
      user.email = newUser.email;
      user.emailVerified = newUser.emailVerified;
      user.metadata = newUser.metadata;
      user.phoneNumber = newUser.phoneNumber;
      user.photoURL = newUser.photoURL;
      user.id = newUser.uid;
      return {
        ...state,
        user: {
          ...user,
        },
        isFetching: false,
        isLoggedIn: true,
      };
    case CA_LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        isLoggedIn: false,
      };
    case CA_LOGIN_DISMISS_ERROR:
      return {
        ...state,
        isFetching: false,
        isLoggedIn: false,
      };
    default:
      return state;
  }
}
