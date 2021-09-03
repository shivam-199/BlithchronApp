import {StyleSheet} from 'react-native';
import Colors from '../../../../utilities/Colors';
// import DimensionScale from '../../../../utilities/DimensionScale';

let style = {
  root: {
    flex: 1,
    backgroundColor: Colors.primarySolid,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  caRole: {
    flex: 1,
    width: '90%',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  caRoleBg: {
    position: 'relative',
    flex: 1,
  },
  caRoleContent: {
    backgroundColor: Colors.black,
    borderTopRightRadius: 45,
    paddingVertical: 20,
    paddingRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 3,
    zIndex: 3,
  },
  caRoleBackgroundOverlay: {
    position: 'absolute',
    height: '75%',
    width: '100%',
    bottom: 15,
    left: 15,
    backgroundColor: `${Colors.secondaryLight}99`,
    borderTopRightRadius: 45,
    elevation: -3,
    zIndex: -3,
  },
  noRole: {
    position: 'relative',
    flex: 1,
    width: '90%',
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  noRoleBg: {
    position: 'relative',
    flex: 1,
  },
  noRoleContent: {
    backgroundColor: Colors.black,
    flexDirection: 'row',
    borderTopLeftRadius: 45,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingLeft: 20,
  },
  noRoleBackgroundOverlay: {
    position: 'absolute',
    height: '75%',
    width: '100%',
    bottom: 15,
    right: 15,
    backgroundColor: `${Colors.secondaryLight}99`,
    borderTopLeftRadius: 45,
    elevation: -3,
    zIndex: -3,
  },
  caText: {
    color: Colors.CAText,
    fontSize: 25,
    fontWeight: '700',
  },
};

export default StyleSheet.create(style);
