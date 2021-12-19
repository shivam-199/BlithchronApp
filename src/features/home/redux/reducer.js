import initialState from './initialState';

const reducers = [];

export default function HomeReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    default:
      newState = state;
      break;
  }
  return reducers.reduce((s, r) => r(s, action), newState);
}
