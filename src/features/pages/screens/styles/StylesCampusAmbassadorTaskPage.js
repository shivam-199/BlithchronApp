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
    paddingHorizontal: '2.5%',
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
  touchableOpacityUpload: {
    alignSelf: 'flex-start',
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
    fontSize: 16,
    fontWeight: '700',
    alignSelf: 'flex-start',
  },
  returned: {
    marginBottom: 10,
    color: Colors.secondaryText,
    fontSize: 20,
    paddingHorizontal: 10,
  },
  adminComments: {
    marginBottom: 10,
    color: Colors.white,
    fontSize: 14,
    paddingHorizontal: 10,
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
  showPointsText: {
    color: Colors.white,
    fontSize: 15,
    margin: 10,
  },
  showPoints: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: '700',
  },
  uploadPlaceholder: {
    width: 100,
    height: 100,
    backgroundColor: Colors.primaryDark,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  imageViewStyles: {
    position: 'relative',
    width: 90,
    height: 100,
    margin: 10,
  },
  galleryCross: {
    position: 'absolute',
    left: 10,
    backgroundColor: Colors.black,
    borderRadius: 20,
    zIndex: 1,
  },
  selectText: {
    color: Colors.white,
    textAlign: 'center',
    fontSize: 12,
  },
  uploadedPic: {
    // width: 90,
    height: 100,
    // margin: 10,
  },
};

export default StyleSheet.create(style);
