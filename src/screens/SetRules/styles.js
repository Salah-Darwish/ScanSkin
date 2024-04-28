import { ScaledSheet, scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../utls/colors";
const styles=ScaledSheet.create({
ImageContainer:{
    flex:1 
},
containerText:{
    flex:0.2, 
    alignItems:'center', 
    justifyContent:"center"
},
styleText:{
    color:colors.white, 
fontSize:verticalScale(20), 
fontWeight:"600"

},
ContainerButton:{
    flex:0.8,
marginTop:verticalScale(120),
},
Button:{
    flexDirection:'row', 
    alignItems:'center', 
    justifyContent:'space-evenly',
    width:scale(420), 
    height:verticalScale(160), 
marginVertical:verticalScale(11),
//    backgroundColor:"#f00",
backgroundColor:colors.white,
    borderRadius:scale(30),
    elevation:scale(4)
  
},
styleImage:{
    
    width:scale(110),
    height:verticalScale(150), 
    borderRadius:scale(20),
marginRight:scale(60)
},
TextButton:{
    color:colors.Actdot,  
    fontSize:"16@s", 
    fontWeight:'bold'
}
});
export default styles; 