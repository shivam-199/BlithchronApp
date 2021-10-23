const taskUpload = {
  id: '',
  name: '',
  src: '',
};

const task = {
  id: '',
  name: '',
  description: '',
  ptsDesc: '',
  isPinned: false,
  status: '',
  uploads: [],
  ptsReceived: 0,
};

const userTasks = {
  currentTask: Object.assign({}, task),
  taskList: [],
};

const initialState = {
  taskUpload,
  task,
  userTasks,
  userExistsInFirestore: false,
  taskList: [],
  leaderboard: [],
};
export default initialState;

export {task};
