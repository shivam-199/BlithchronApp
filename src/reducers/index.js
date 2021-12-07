import {combineReducers} from 'redux';
import {LOGOUT} from '../features/auth/redux/constant';
import {COMPUTE_TOTAL_POINTS_SUCCESS} from '../features/pages/redux/constant';
import AuthReducer from '../features/auth/redux/reducer';
import HomeReducer from '../features/home/redux/reducer';
import PagesReducer from '../features/pages/redux/reducer';
import 'react-native-gesture-handler';
// import storage from 'redux-persist/lib/storage';
import {initialState as pagesInitState} from '../features/pages/redux/initialState';
import {initialState as authInitState} from '../features/auth/redux/initialState';
const reducerMap = {
  auth: AuthReducer,
  home: HomeReducer,
  pages: PagesReducer,
};

const appReducer = combineReducers(reducerMap);
const rootReducer = (state, action) => {
  if (action.type == 'CLEAR_REDUX_STATE') {
    // storage.removeItem('persist:root');
    return appReducer(undefined, action);
  }
  if (action.type === LOGOUT) {
    const newState = Object.assign({}, state);
    newState.auth = authInitState;
    newState.pages = pagesInitState;
    return appReducer(newState, action);
  }
  if (action.type === COMPUTE_TOTAL_POINTS_SUCCESS) {
    const newState = Object.assign({}, state);
    newState.auth.user.totalPoints = action.data.totPts;
    return appReducer(newState, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
