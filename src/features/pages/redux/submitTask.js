import {
  SUBMIT_TASK_BEGIN,
  SUBMIT_TASK_SUCCESS,
  SUBMIT_TASK_FAILURE,
  SUBMIT_TASK_DISMISS_ERROR,
} from './constant';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

export function submitTask() {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: SUBMIT_TASK_BEGIN,
      });

      const {auth, pages} = getState();
      const {user} = auth;
      const {email} = user;
      const {userTasks} = pages;
      const {currentTask} = userTasks;
      // console.log(currentTask);

      // Storage reference for each image
      currentTask.uploads.forEach(media => {
        console.log(media);
        const name = media.id.replace('rn_image_picker_lib_temp_', '');
        const reference = storage().ref(
          `CAMedia/${email}/${currentTask.id}/${name}`,
        );
        console.log(reference);
        //   const uploadedMedia = await reference
        //     .putFile(media.src)
        //     .then(data => console.log(data))
        //     .catch(error => console.log(error));
      });
      // Submit task media and task details on firestore
      // const caDoc = await firestore()
      //   .collection('Participants')
      //   .doc(userId)
      //   .get()
      //   .then(data => {
      //     exists = data._exists;
      //     if (exists) {
      //       return true;
      //     } else {
      //       throw false;
      //     }
      //   })
      //   .catch(error => {
      //     throw error;
      //   });

      dispatch({
        type: SUBMIT_TASK_SUCCESS,
        data: {},
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
      return {
        ...state,
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
