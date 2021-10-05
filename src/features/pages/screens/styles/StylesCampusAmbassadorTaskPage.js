import {StyleSheet} from 'react-native';
import {colors} from 'react-native-elements';
import Colors from '../../../../utilities/Colors';
// import DimensionScale from '../../../../utilities/DimensionScale';

let style = {
  root: {
    flex: 1,
    backgroundColor: Colors.primarySolid,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 50,
    paddingHorizontal: '5%',
    paddingVertical: 20,
  },
  taskView: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: '5%',
  },
  taskText: {
    fontSize: 30,
    marginBottom: 20,
  },
  taskDescView: {
    elevation: 5,
    borderRadius: 10,
    borderColor: Colors.primaryDark,
    borderWidth: 1,
    shadowColor: Colors.primaryDark,
    shadowRadius: 20,
    shadowOpacity: 1,
    backgroundColor: Colors.primaryDark,
    width: '100%',
    padding: 15,
    marginBottom: 20,
  },
  taskDesc: {
    color: Colors.white,
    fontSize: 16,
    marginBottom: 10,
  },
  ptsDesc: {
    color: Colors.white,
    fontSize: 14,
  },
  markApproval: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Colors.transparent,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: Colors.secondaryText,
    color: Colors.white,
    borderColor: Colors.secondaryText,
    fontSize: 16,
    fontWeight: '700',
    alignSelf: 'flex-start',
    marginHorizontal: '5%',
  },
  completedTask: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Colors.transparent,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: Colors.green,
    color: Colors.white,
    borderColor: Colors.green,
    fontSize: 18,
    fontWeight: '700',
    alignSelf: 'flex-start',
  },
  returned: {
    marginBottom: 10,
    color: Colors.secondaryText,
    fontSize: 20,
  },
  adminComments: {
    marginBottom: 10,
    color: Colors.white,
    fontSize: 14,
  },
  resubmit: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: Colors.transparent,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: Colors.secondaryText,
    color: Colors.white,
    borderColor: Colors.secondaryText,
    fontSize: 16,
    fontWeight: '700',
    alignSelf: 'flex-end',
  },
  galleryView: {
    margin: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  uploadPlaceholder: {
    width: 100,
    height: 100,
    backgroundColor: Colors.primaryDark,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default StyleSheet.create(style);
