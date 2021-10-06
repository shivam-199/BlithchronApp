const taskUpload = {
  id: '',
  title: '',
  src: '',
};

const task = {
  id: '',
  name: '',
  description: '',
  ptsDesc: '',
  isPinned: false,
  status: '',
  currentUpload: Object.assign({}, taskUpload),
  uploads: [],
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
