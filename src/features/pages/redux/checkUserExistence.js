import {
  CHECK_USER_EXISTENCE_BEGIN,
  CHECK_USER_EXISTENCE_DISMISS_ERROR,
  CHECK_USER_EXISTENCE_FAILURE,
  CHECK_USER_EXISTENCE_SUCCESS,
} from './constant';
import firestore from '@react-native-firebase/firestore';

export function checkUserExistence({userId}) {
  return async dispatch => {
    try {
      dispatch({
        type: CHECK_USER_EXISTENCE_BEGIN,
      });

      let exists = false;

      // Checking if the user data exists
      const caDoc = await firestore()
        .collection('Participants')
        .doc(userId)
        .get()
        .then(data => {
          exists = data._exists;
          if (exists) {
            return true;
          } else {
            throw false;
          }
        })
        .catch(error => {
          throw error;
        });

      dispatch({
        type: CHECK_USER_EXISTENCE_SUCCESS,
        data: {exists},
      });

      return exists;
    } catch (error) {
      dispatch({
        type: CHECK_USER_EXISTENCE_FAILURE,
        data: error,
      });
      throw error;
    }
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case CHECK_USER_EXISTENCE_BEGIN:
      return {
        ...state,
        isFetching: true,
      };
    case CHECK_USER_EXISTENCE_SUCCESS:
      return {
        ...state,
        userExistsInFirestore: true,
        isFetching: false,
      };
    case CHECK_USER_EXISTENCE_FAILURE:
      return {
        ...state,
        userExistsInFirestore: false,
        isFetching: false,
      };
    case CHECK_USER_EXISTENCE_DISMISS_ERROR:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
}
