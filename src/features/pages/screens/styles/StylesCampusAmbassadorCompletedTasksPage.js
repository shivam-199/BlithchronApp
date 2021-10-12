import {StyleSheet} from 'react-native';
import Colors from '../../../../utilities/Colors';
// import DimensionScale from '../../../../utilities/DimensionScale';

let style = {
  root: { flex: 1, backgroundColor: Colors.primaryDark,},
  TitleView : {paddingTop:20, paddingLeft:20},
  TitleText: {fontSize:45, }, 
  MainView : {height:620,  width:"100%", marginTop:0, marginLeft:20, width:"88%", flexDirection:"column"},
  white15 : {color:"white", fontSize:15,},
  CardView : {backgroundColor:Colors.primarySolid, height:220, width:"90%", alignSelf:"center", marginTop:40, borderRadius:30, elevation:3, flexDirection:"column", paddingBottom:30,paddingTop:10 }
,  white8: {color:"white", fontSize:8,},
LinearTextGradientStyle : {marginLeft:"5%", marginTop:10},
  startEndDateStyle: {flexDirection:"row", justifyContent:"space-between", },
  pinIconStyle: {alignSelf:"center",color:"white"},
  pointsBox: {flex:2,  justifyContent:"center", paddingHorizontal:"3%", },
  pointsBoxSquare: {borderWidth:2, borderColor:Colors.borderPurple, height:"50%", flexDirection:"column"},
  pointsBoxRow: {flex:1, flexDirection:"row"},
  pointsBoxTopLeft: {flex:1, borderRightWidth:2, borderRightColor:Colors.borderPurple, borderBottomColor:Colors.borderPurple, borderBottomWidth:2, flexDirection:"column", alignItems:"center", justifyContent:"space-evenly", },
  white6Center: {fontSize:6, textAlign:"center",color:"white"},
  pointsBoxTopRight: {flex:1, borderBottomWidth:2,  borderBottomColor:Colors.borderPurple, borderBottomWidth:2, flexDirection:"column", alignItems:"center", justifyContent:"space-evenly", },
  pointsBoxBottomLeft: {flex:1, borderRightWidth:2, borderRightColor:Colors.borderPurple, flexDirection:"column", alignItems:"center", justifyContent:"space-evenly", },
  playButtonColumn: {flex:1, justifyContent:"center",},
  selfAlignCenter: {alignSelf:"center", },
  pointsBoxBottomRight: {flex:1, flexDirection:"column", alignItems:"center", justifyContent:"space-evenly", },
  font16 :{fontSize:16,},
  boldFont:{fontWeight:"bold"},
  rowFlex:{flexDirection:"row"},
  cardContent : {flex:3, height:"100%",flexDirection:"column", paddingLeft:"9%",justifyContent:"space-evenly", borderRadius:30, paddingRight:"3%",marginBottom:-10 },
  
};



export default StyleSheet.create(style);