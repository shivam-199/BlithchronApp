import {SELECT_PHOTOS} from './constant';

export function selectPhotos(data) {
  return {
    type: SELECT_PHOTOS,
    data,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case SELECT_PHOTOS:
      const newState = Object.assign({}, state);
      newState.userTasks.currentTask.uploads = action.data.assets.map(asset => {
        const newAsset = {};
        newAsset.id = asset.fileName;
        newAsset.name = asset.fileName;
        newAsset.src = asset.uri;
        return newAsset;
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
