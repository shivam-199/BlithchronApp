import {VIEW_TASK} from './constant';
import {task} from './initialState';

export function viewTask(data) {
  return {
    type: VIEW_TASK,
    data,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case VIEW_TASK:
      taskExistsInMyList = state.userTasks.taskList.filter(
        task => task.id === action.data,
      )[0]
        ? true
        : false;
      
      const newState = Object.assign({}, state);
      if (!taskExistsInMyList) {
        // If task doesn't exists in the current user task list
        const tempTask = newState.taskList.filter(
          task => task.id === action.data,
        )[0];
        const newTask = task;
        newTask.description = tempTask.description;
        newTask.id = tempTask.id;
        newTask.name = tempTask.name;
        newTask.ptsDesc = tempTask.ptsDesc;
        newTask.status = "";
        newTask.uploads = [];
        newTask.isPinned = false;
        newState.userTasks.taskList.push(newTask);
        newState.userTasks.currentTask = newTask;
      } else if (taskExistsInMyList) {
        // If task exists in the current user task list
        const newTask = newState.userTasks.taskList.filter(
          task => task.id === action.data,
        )[0];
        newState.userTasks.currentTask = newTask;
      }
      return {
        ...newState,
      };
    default:
      return state;
  }
}
