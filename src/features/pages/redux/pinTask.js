import {
  PIN_TASK_BEGIN,
  PIN_TASK_SUCCESS,
  PIN_TASK_FAILURE,
  PIN_TASK_DISMISS_ERROR,
} from './constant';
import firestore from '@react-native-firebase/firestore';

export function pinTask(taskId) {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: PIN_TASK_BEGIN,
      });

      const {auth, pages} = getState();
      const {user} = auth;
      const userId = user.id;
      const {taskList} = pages;
      let tasks = pages.userTasks.taskList;
      if (pages.taskList.findIndex(task => task.id === taskId) === -1) {
        // Pick the task from the main taskList
        const newTask = taskList.filter(task => {
          if (task.id === taskId) {
            const newTask = task;
            newTask.isPinned = !task.isPinned;
            return newTask;
          }
        });
        tasks.push(newTask);
      } else {
        // Pick the task from the userTasks taskList and update the pin status
        tasks = tasks.map(task => {
          if (task.id === taskId) {
            const newTask = task;
            newTask.isPinned = !task.isPinned;
            return newTask;
          } else {
            return task;
          }
        });
      }

      const userData = await firestore()
        .collection('Participants')
        .doc(userId)
        .update({
          tasks,
        })
        .then(data => {
          dispatch({
            type: PIN_TASK_SUCCESS,
            data: {tasks, taskId},
          });
        })
        .catch(error => {
          throw error;
        });

      return {};
    } catch (error) {
      dispatch({
        type: PIN_TASK_FAILURE,
        data: error,
      });
      throw error;
    }
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case PIN_TASK_BEGIN:
      return {
        ...state,
        isCreatingUser: true,
      };
    case PIN_TASK_SUCCESS:
      const newState = Object.assign({}, state);
      newState.userTasks.taskList = action.data.tasks;
      newState.userTasks.currentTask = newState.userTasks.taskList.filter(
        task => task.id === action.data.taskId,
      )[0];
      return {
        ...newState,
        isCreatingUser: false,
      };
    case PIN_TASK_FAILURE:
      return {
        ...state,
        isCreatingUser: false,
      };
    case PIN_TASK_DISMISS_ERROR:
      return {
        ...state,
        isCreatingUser: false,
      };
    default:
      return state;
  }
}
