import {
  SELECT_PHOTOS_BEGIN,
  SELECT_PHOTOS_SUCCESS,
  SELECT_PHOTOS_FAILURE,
  SELECT_PHOTOS_DISMISS_ERROR,
} from './constant';
import storage from '@react-native-firebase/storage';

export function selectPhotos({name, uri}) {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: SELECT_PHOTOS_BEGIN,
      });

      const {auth, pages} = getState();
      const {user} = auth;
      const {userTasks} = pages;
      const {email} = user;
      const taskId = userTasks.currentTask.id;

      // Storage reference for image
      const reference = storage().ref(`CAMedia/${email}/${taskId}/${name}`);

      const imageUpload = await reference
        .putFile(uri)
        .then(data => {})
        .catch(error => {
          throw error;
        });

      reference
        .getDownloadURL()
        .then(url => {
          dispatch({
            type: SELECT_PHOTOS_SUCCESS,
            data: {name, url, taskId},
          });
        })
        .catch(error => {
          throw error;
        });
      return {};
    } catch (error) {
      dispatch({
        type: SELECT_PHOTOS_FAILURE,
        data: error,
      });
      throw error;
    }
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case SELECT_PHOTOS_BEGIN:
      return {
        ...state,
        isUploadingMedia: true,
      };
    case SELECT_PHOTOS_SUCCESS:
      const newState = Object.assign({}, state);
      const {name, url, taskId} = action.data;

      const newTask = newState.userTasks.taskList.filter(
        task => task.id === taskId,
      )[0];

      newTask.uploads.findIndex(media => media.name === name) === -1 &&
        newTask.uploads.push({id: name, name: name, src: url});

      newState.userTasks.currentTask = newTask;
      newState.userTasks.taskList = newState.userTasks.taskList.map(task => {
        if (task.id === taskId) {
          return newTask;
        } else {
          return task;
        }
      });

      return {
        ...newState,
        isUploadingMedia: false,
      };
    case SELECT_PHOTOS_FAILURE:
      return {
        ...state,
        isUploadingMedia: false,
      };
    case SELECT_PHOTOS_DISMISS_ERROR:
      return {
        ...state,
        isUploadingMedia: false,
      };
    default:
      return state;
  }
}
