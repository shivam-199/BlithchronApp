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

      if (!taskExistsInMyList) {
        const tempTask = state.taskList.filter(
          task => task.id === action.data,
        )[0];
        const newTask = task;
        newTask.description = tempTask.description;
        newTask.id = tempTask.id;
        newTask.name = tempTask.name;
        newTask.ptsDesc = tempTask.ptsDesc;
        state.userTasks.taskList.findIndex(task => task.id === action.data) ===
          -1 && state.userTasks.taskList.push(newTask);
        state.userTasks.currentTask = newTask;
      } else if (taskExistsInMyList) {
        const newTask = state.userTasks.taskList.filter(
          task => task.id === action.data,
        )[0];
        state.userTasks.currentTask = newTask;
      }
      return {
        ...state,
      };
    default:
      return state;
  }
}
