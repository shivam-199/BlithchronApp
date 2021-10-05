import {
  FETCH_TASK_LIST_BEGIN,
  FETCH_TASK_LIST_SUCCESS,
  FETCH_TASK_LIST_FAILURE,
  FETCH_TASK_LIST_DISMISS_ERROR,
} from './constant';
import firestore from '@react-native-firebase/firestore';

export function fetchTaskList() {
  return async dispatch => {
    try {
      dispatch({
        type: FETCH_TASK_LIST_BEGIN,
      });

      // Checking if the user data exists
      const taskList = await firestore()
        .collection('Tasks')
        .get()
        .then(data => {
          dispatch({
            type: FETCH_TASK_LIST_SUCCESS,
            data: data._docs,
          });
        })
        .catch(error => {
          throw error;
        });

      return {};
    } catch (error) {
      dispatch({
        type: FETCH_TASK_LIST_FAILURE,
        data: error,
      });
      throw error;
    }
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case FETCH_TASK_LIST_BEGIN:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_TASK_LIST_SUCCESS:
      const taskList = action.data.map(task => {
        const newTask = {};
        newTask.id = task._data.id;
        newTask.name = task._data.name;
        newTask.description = task._data.description;
        newTask.ptsDesc = task._data.ptsDesc;
        return newTask;
      });
      return {
        ...state,
        taskList: taskList,
        isFetching: false,
      };
    case FETCH_TASK_LIST_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    case FETCH_TASK_LIST_DISMISS_ERROR:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
}
