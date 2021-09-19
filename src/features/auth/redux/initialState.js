const user = {
  id: '',
  name: '',
  email: '',
  gender: '',
  institution: '',
};

const initialState = {
  rolePrefDefined: false,
  userRole: '',
  isLoggedIn: false,
  userId: null,
  accessToken: '',
  user,
};
export default initialState;
