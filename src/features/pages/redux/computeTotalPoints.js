import {
  COMPUTE_TOTAL_POINTS_BEGIN,
  COMPUTE_TOTAL_POINTS_SUCCESS,
  COMPUTE_TOTAL_POINTS_FAILURE,
  COMPUTE_TOTAL_POINTS_DISMISS_ERROR,
} from './constant';
import firestore from '@react-native-firebase/firestore';
import TaskStatus from '../../../constants/TaskStatus';

export function computeTotalPoints() {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: COMPUTE_TOTAL_POINTS_BEGIN,
      });

      const {auth, pages} = getState();
      var totPts = 0;
      const taskList = pages.userTasks.taskList;
      for (var i = 0; i < taskList.length; i++) {
        if (taskList[i].status === TaskStatus.COMPLETED) {
          totPts += Number(taskList[i].ptsReceived);
        }
      }

      const ptsRef = await firestore()
        .collection('Participants')
        .doc(auth.user.id)
        .update({totalPoints: totPts})
        .then(data => {
          dispatch({
            type: COMPUTE_TOTAL_POINTS_SUCCESS,
            data: {totPts},
          });
        })
        .catch(error => {
          throw error;
        });

      return {totPts};
    } catch (error) {
      dispatch({
        type: COMPUTE_TOTAL_POINTS_FAILURE,
        data: error,
      });
      throw error;
    }
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case COMPUTE_TOTAL_POINTS_BEGIN:
      return {
        ...state,
        isFetchingPoints: true,
      };
    case COMPUTE_TOTAL_POINTS_SUCCESS:
      return {
        ...state,
        isFetchingPoints: false,
      };
    case COMPUTE_TOTAL_POINTS_FAILURE:
      return {
        ...state,
        isFetchingPoints: false,
      };
    case COMPUTE_TOTAL_POINTS_DISMISS_ERROR:
      return {
        ...state,
        isFetchingPoints: false,
      };
    default:
      return state;
  }
}
