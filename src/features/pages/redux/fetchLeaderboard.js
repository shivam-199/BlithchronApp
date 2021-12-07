import {
  FETCH_LEADERBOARD_BEGIN,
  FETCH_LEADERBOARD_SUCCESS,
  FETCH_LEADERBOARD_FAILURE,
  FETCH_LEADERBOARD_DISMISS_ERROR,
} from './constant';
import firestore from '@react-native-firebase/firestore';

export function fetchLeaderboard() {
  return async dispatch => {
    try {
      dispatch({
        type: FETCH_LEADERBOARD_BEGIN,
      });

      // Checking if the user data exists
      const leaderboard = await firestore()
        .collection('Leaderboard')
        .get()
        .then(data => {
          dispatch({
            type: FETCH_LEADERBOARD_SUCCESS,
            data: data._docs,
          });
        })
        .catch(error => {
          throw error;
        });

      return {};
    } catch (error) {
      dispatch({
        type: FETCH_LEADERBOARD_FAILURE,
        data: error,
      });
      throw error;
    }
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case FETCH_LEADERBOARD_BEGIN:
      return {
        ...state,
        isFetchingLeaderboard: true,
      };
    case FETCH_LEADERBOARD_SUCCESS:
      const leaderboard = action.data.map(person => {
        const newPerson = {};
        newPerson.id = person._data.id;
        newPerson.name = person._data.name;
        newPerson.rank = person._data.rank;
        newPerson.institution = person._data.institution;
        return newPerson;
      });

      return {
        ...state,
        leaderboard: leaderboard,
        isFetchingLeaderboard: false,
      };
    case FETCH_LEADERBOARD_FAILURE:
      return {
        ...state,
        isFetchingLeaderboard: false,
      };
    case FETCH_LEADERBOARD_DISMISS_ERROR:
      return {
        ...state,
        isFetchingLeaderboard: false,
      };
    default:
      return state;
  }
}
