import { ScaledSheet } from "react-native-size-matters";
import { colors } from "../../utls/colors";

const MyStyles = ScaledSheet.create({
Container:{
flex:1,
paddingHorizontal:10
},
    ButtonStyle:{
width:120, 
height:45, 
backgroundColor:colors.Actdot, 
borderRadius:10, 
alignItems:'center', 
justifyContent:'center'
    },
    TextStyle:{
        color:colors.white
    }
});

export default MyStyles;
