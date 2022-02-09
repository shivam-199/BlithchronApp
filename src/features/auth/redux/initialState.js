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
  totalPoints: 0,
  pointsBeforeApp: 0,
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
export {initialState};
