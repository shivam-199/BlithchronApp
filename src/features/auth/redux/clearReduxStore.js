import {CLEAR_REDUX_STATE} from './constant';

export function clearReduxStore() {
  return {
    type: CLEAR_REDUX_STATE,
  };
}
