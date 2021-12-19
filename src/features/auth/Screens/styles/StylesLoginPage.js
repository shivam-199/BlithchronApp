import {StyleSheet} from 'react-native';
import Colors from '../../../../utilities/Colors';
// import DimensionScale from '../../../../utilities/DimensionScale';

let style = {
  root: {
    flex: 1,
    backgroundColor: Colors.primarySolid,
    padding: '10%',
  },
  textGradient: {
    fontSize: 40,
  },
  textCAGradient: {
    fontSize: 25,
  },
  inputView: {
    marginVertical: 10,
  },
  input: {
    backgroundColor: Colors.inputBackground,
    borderColor: Colors.inputBorder,
    borderWidth: 5,
    borderRadius: 50,
    marginVertical: 10,
    paddingHorizontal: 20,
    fontSize: 15,
    color: Colors.white,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  forgotPass: {
    color: Colors.secondaryText,
  },
  buttonView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButton: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: Colors.transparent,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: Colors.secondaryText,
    color: Colors.white,
    borderColor: Colors.secondaryText,
    fontSize: 20,
  },
};

export default StyleSheet.create(style);
