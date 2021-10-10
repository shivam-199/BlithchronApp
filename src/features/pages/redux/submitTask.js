import {
  SUBMIT_TASK_BEGIN,
  SUBMIT_TASK_SUCCESS,
  SUBMIT_TASK_FAILURE,
  SUBMIT_TASK_DISMISS_ERROR,
} from './constant';
import firestore from '@react-native-firebase/firestore';
import TaskStatus from '../../../constants/TaskStatus';

export function submitTask({taskId}) {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: SUBMIT_TASK_BEGIN,
      });

      const {auth, pages} = getState();
      const {user} = auth;
      const userId = user.id;
      let tasks = pages.userTasks.taskList;
      tasks = tasks.map(task => {
        if (task.id === taskId) {
          const newTask = task;
          newTask.status = TaskStatus.SUBMITTED;
          return newTask;
        } else {
          return task;
        }
      });

      const userData = await firestore()
        .collection('Participants')
        .doc(userId)
        .update({
          tasks,
        })
        .then(data => {
          dispatch({
            type: SUBMIT_TASK_SUCCESS,
            data: {tasks, taskId},
          });
        })
        .catch(error => {
          throw error;
        });

      return {};
    } catch (error) {
      dispatch({
        type: SUBMIT_TASK_FAILURE,
        data: error,
      });
      throw error;
    }
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case SUBMIT_TASK_BEGIN:
      return {
        ...state,
        isFetching: true,
      };
    case SUBMIT_TASK_SUCCESS:
      const newState = Object.assign({}, state);
      newState.userTasks.taskList = action.data.tasks;

      return {
        ...newState,
        isFetching: false,
      };
    case SUBMIT_TASK_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    case SUBMIT_TASK_DISMISS_ERROR:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
}
