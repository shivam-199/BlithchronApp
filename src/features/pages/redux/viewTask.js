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
      const newState = Object.assign({}, state);
      let newTask = task;
      let tempTask = newState.taskList.filter(
        task => task.id === action.data,
      )[0];
      newTask.description = tempTask.description;
      newTask.id = tempTask.id;
      newTask.name = tempTask.name;
      newTask.ptsDesc = tempTask.ptsDesc;
      return {
        ...state,
        userTasks: {
          currentTask: {
            ...newTask,
          },
        },
      };
    default:
      return state;
  }
}
