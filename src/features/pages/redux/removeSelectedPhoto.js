import {REMOVE_SELECTED_PHOTO} from './constant';

export function removeSelectedPhoto(data) {
  return {
    type: REMOVE_SELECTED_PHOTO,
    data,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case REMOVE_SELECTED_PHOTO:
      const newState = Object.assign({}, state);
      const newTask = newState.userTasks.currentTask;
      newUploads = newTask.uploads
        .filter(asset => asset.id != action.data)
        .map(asset => {
          return asset;
        });
      newTask.uploads = newUploads;

      // Replacing the current task and replacing the list in the user task list
      newState.userTasks.currentTask = newTask;
      newState.userTasks.taskList = newState.userTasks.taskList.map(task => {
        if (task.id === action.data) {
          return newTask;
        } else {
          return task;
        }
      });
      return {
        ...state,
        state: {
          ...newState,
        },
      };
    default:
      return state;
  }
}
