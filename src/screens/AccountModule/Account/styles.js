import { ScaledSheet, scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../utls/colors";

const MyStyles = ScaledSheet.create({
Container:{
flex:1,
paddingHorizontal:10
},
    ButtonStyle:{
width:scale(320), 
height:verticalScale(45), 
backgroundColor:colors.text, 
borderRadius:10, 
alignItems:'center', 
justifyContent:'center', 
marginBottom:verticalScale(70)
    },
    TextStyle:{
        color:colors.white, 
        fontSize:scale(25), 
        fontWeight:'bold'
    }
});

export default MyStyles;
