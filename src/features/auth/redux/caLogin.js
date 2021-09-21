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

      auth()
        .signInWithEmailAndPassword(email, password)
        .then(data => {
          dispatch({
            type: CA_LOGIN_SUCCESS,
            data: {data},
          });
          return {data};
        })
        .catch(error => {
          if (error.code === 'auth/user-not-found') {
            console.log('No user found!');
            throw new Error('No user found!');
          }
          if (error.code === 'auth/wrong-password') {
            console.log('Wrong password');
            throw new Error('Wrong password');
          }
          dispatch({
            type: CA_LOGIN_FAILURE,
            data: {error},
          });
          return error;
        });
    } catch (error) {
      console.log('second');
      dispatch({
        type: CA_LOGIN_FAILURE,
        data: {error},
      });
      throw new Error(error);
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
      console.log(action.data);
      const {user} = state.auth;
      console.log(state);
      console.log(state.auth);
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
