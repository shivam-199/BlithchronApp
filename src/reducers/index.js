import {combineReducers} from 'redux';
import HomeReducer from '../features/home/redux/reducer';
import PagesReducer from '../features/pages/redux/reducer';
import AuthReducer from '../features/auth/redux/reducer';
import 'react-native-gesture-handler';
// import storage from 'redux-persist/lib/storage';

const reducerMap = {
  HomeReducer,
  auth: AuthReducer,
  pages: PagesReducer,
};

const appReducer = combineReducers(reducerMap);
const rootReducer = (state, action) => {
  if (action.type == 'CLEAR_REDUX_STATE') {
    // storage.removeItem('persist:root');
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
