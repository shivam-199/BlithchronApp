import {
  FETCH_NEW_EVENTS_BEGIN,
  FETCH_NEW_EVENTS_SUCCESS,
  FETCH_NEW_EVENTS_FAILURE,
  FETCH_NEW_EVENTS_DISMISS_ERROR,
} from './constant';
import firestore from '@react-native-firebase/firestore';

export function fetchNewEvents() {
  return async dispatch => {
    try {
      dispatch({
        type: FETCH_NEW_EVENTS_BEGIN,
      });

      // Fetching events data
      const eventsDoc = await firestore()
        .collection('Events')
        .get()
        .then(data => {
          dispatch({
            type: FETCH_NEW_EVENTS_SUCCESS,
            data: {eventsList: data._docs},
          });
        })
        .catch(error => {
          throw error;
        });

      return {};
    } catch (error) {
      dispatch({
        type: FETCH_NEW_EVENTS_FAILURE,
        data: error,
      });
      throw error;
    }
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case FETCH_NEW_EVENTS_BEGIN:
      return {
        ...state,
        isFetchingEvents: true,
      };
    case FETCH_NEW_EVENTS_SUCCESS:
      const eventsList = action.data.eventsList.map(event => {
        return event._data;
      });
      return {
        ...state,
        newEvents: eventsList,
        isFetchingEvents: false,
      };
    case FETCH_NEW_EVENTS_FAILURE:
      return {
        ...state,
        isFetchingEvents: false,
      };
    case FETCH_NEW_EVENTS_DISMISS_ERROR:
      return {
        ...state,
        isFetchingEvents: false,
      };
    default:
      return state;
  }
}
