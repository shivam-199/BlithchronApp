import {SET_TEXT_INPUT} from './constant';

export function setTextInput(data) {
  return {
    type: SET_TEXT_INPUT,
    data,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case SET_TEXT_INPUT:
      const newState = Object.assign({}, state);
      newState.userTasks.currentTask = action.data;
      // const newTask = newState.userTasks.currentTask;
      // newUploads = newTask.uploads
      //   .filter(asset => asset.id != action.data)
      //   .map(asset => {
      //     return asset;
      //   });
      // newTask.uploads = newUploads;

      // // Replacing the current task and replacing the list in the user task list
      // newState.userTasks.currentTask = newTask;
      // newState.userTasks.taskList = newState.userTasks.taskList.map(task => {
      //   if (task.id === action.data) {
      //     return newTask;
      //   } else {
      //     return task;
      //   }
      // });
      console.log(newState);
      return {
        ...state,
        //   state: {
        //     ...newState,
        //   },
      };
    default:
      return state;
  }
}
