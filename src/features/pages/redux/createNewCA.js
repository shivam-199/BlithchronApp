import {
  CREATE_NEW_CA_BEGIN,
  CREATE_NEW_CA_SUCCESS,
  CREATE_NEW_CA_FAILURE,
  CREATE_NEW_CA_DISMISS_ERROR,
} from './constant';
import firestore from '@react-native-firebase/firestore';

export function createNewCA() {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: CREATE_NEW_CA_BEGIN,
      });

      const {auth, pages} = getState();
      const {user} = auth;

      const userRec = {
        id: user.id,
        email: user.email,
        institution: '',
        tasks: [],
      };

      // Creating new user
      const caUser = await firestore()
        .collection('Participants')
        .doc(userRec.id)
        .set(userRec)
        .then(data => {})
        .catch(error => {});

      dispatch({
        type: CREATE_NEW_CA_SUCCESS,
        data: {exists},
      });

      return exists;
    } catch (error) {
      dispatch({
        type: CREATE_NEW_CA_FAILURE,
        data: error,
      });
      throw error;
    }
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case CREATE_NEW_CA_BEGIN:
      return {
        ...state,
        isCreatingUser: true,
      };
    case CREATE_NEW_CA_SUCCESS:
      return {
        ...state,
        isCreatingUser: false,
      };
    case CREATE_NEW_CA_FAILURE:
      return {
        ...state,
        isCreatingUser: false,
      };
    case CREATE_NEW_CA_DISMISS_ERROR:
      return {
        ...state,
        isCreatingUser: false,
      };
    default:
      return state;
  }
}
