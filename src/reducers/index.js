import {combineReducers} from 'redux';
import PagesReducer from '../features/pages/redux/reducer';
import 'react-native-gesture-handler';

const reducerMap = {
  pages: PagesReducer,
};

const appReducer = combineReducers(reducerMap);
const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
