const user = {
  id: '',
  name: '',
  email: '',
  gender: '',
  institution: '',
  photoURL: '',
  emailVerified: false,
  phoneNumber: '',
  metadata: {},
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
