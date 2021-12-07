import {
  FETCH_USER_TASK_DATA_BEGIN,
  FETCH_USER_TASK_DATA_SUCCESS,
  FETCH_USER_TASK_DATA_FAILURE,
  FETCH_USER_TASK_DATA_DISMISS_ERROR,
} from './constant';
import firestore from '@react-native-firebase/firestore';

export function fetchUserTaskList() {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: FETCH_USER_TASK_DATA_BEGIN,
      });

      const {auth} = getState();
      const {user} = auth;

      // Checking if the user data exists
      const taskList = await firestore()
        .collection('Participants')
        .doc(user.id)
        .get()
        .then(data => {
          dispatch({
            type: FETCH_USER_TASK_DATA_SUCCESS,
            data: data._data,
          });
        })
        .catch(error => {
          throw error;
        });

      return {};
    } catch (error) {
      dispatch({
        type: FETCH_USER_TASK_DATA_FAILURE,
        data: error,
      });
      throw error;
    }
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case FETCH_USER_TASK_DATA_BEGIN:
      return {
        ...state,
        isFetchingTaskList: true,
      };
    case FETCH_USER_TASK_DATA_SUCCESS:
      const newState = Object.assign({}, state);
      newState.userTasks.taskList = action.data.tasks;
      return {
        ...newState,
        isFetchingTaskList: false,
      };
    case FETCH_USER_TASK_DATA_FAILURE:
      return {
        ...state,
        isFetchingTaskList: false,
      };
    case FETCH_USER_TASK_DATA_DISMISS_ERROR:
      return {
        ...state,
        isFetchingTaskList: false,
      };
    default:
      return state;
  }
}
