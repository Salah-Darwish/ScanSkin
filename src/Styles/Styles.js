import { ScaledSheet } from "react-native-size-matters";
import { colors } from "../utls/colors";
import { verticalScale,scale } from "react-native-size-matters";
const StylesGloba=ScaledSheet.create({
Touchicon:{
    width:scale(27),
    height:verticalScale(20),
    color:colors.error, 
position:'absolute', 
zIndex:scale(5), 
alignItems:'center',
justifyContent:'center', 
left:scale(285), 
top:verticalScale(33)
}, 
TouchiconLeft:{
    width:scale(35),
    height:verticalScale(30),
    color:colors.error, 
position:'absolute', 
zIndex:scale(5), 
alignItems:'center',
justifyContent:'center', 
left:scale(10), 
top:verticalScale(10),
//backgroundColor:"red"
}, 

}); 
export default StylesGloba; 