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
};
export default initialState;
