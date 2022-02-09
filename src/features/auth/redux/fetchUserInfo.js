import {
  FETCH_USER_INFO_BEGIN,
  FETCH_USER_INFO_SUCCESS,
  FETCH_USER_INFO_FAILURE,
  FETCH_USER_INFO_DISMISS_ERROR,
} from './constant';
import firestore from '@react-native-firebase/firestore';

export function fetchUserInfo({userId}) {
  return async dispatch => {
    try {
      dispatch({
        type: FETCH_USER_INFO_BEGIN,
      });

      // Checking if the user data exists
      const userInfo = await firestore()
        .collection('Participants')
        .doc(userId)
        .get()
        .then(data => {
          dispatch({
            type: FETCH_USER_INFO_SUCCESS,
            data: {user: data._data},
          });
        })
        .catch(error => {
          throw error;
        });

      return {};
    } catch (error) {
      dispatch({
        type: FETCH_USER_INFO_FAILURE,
        data: error,
      });
      throw error;
    }
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case FETCH_USER_INFO_BEGIN:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_USER_INFO_SUCCESS:
      const {user} = state;

      const newUser = action.data.user;

      user.email = newUser.email;
      user.id = newUser.id;
      user.institution = newUser.institution;
      user.totalPoints = newUser.totalPoints;
      user.pointsBeforeApp = newUser.pointsBeforeApp;

      return {
        ...state,
        user: {
          ...user,
        },
        isFetching: false,
      };
    case FETCH_USER_INFO_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    case FETCH_USER_INFO_DISMISS_ERROR:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
}
