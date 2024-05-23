import { ScaledSheet, scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../utls/colors";
const styles=ScaledSheet.create({
container:{
flex:1, 
alignItems:'center', 
justifyContent:'center',
backgroundColor:colors.backgr
}, 
textstyle:{
    color:colors.text, 
    fontSize:"22@s", 
    marginTop:verticalScale(40), 
    fontWeight:'bold'
},
IconContainer:{
    alignItems:'center',
    justifyContent:'center', 
    width:scale(130), 
    height:verticalScale(120), 
    borderRadius:scale(80),
    backgroundColor:colors.text,
    marginTop:verticalScale(50)

},
root: { padding:scale(20)},
  title: {textAlign: 'center', fontSize: scale(30)},
  codeFieldRoot: {marginTop: verticalScale(100)},
  cell: {
    width: scale(40),
    height:verticalScale(40),
    lineHeight:verticalScale(38),
    fontSize:scale(30),
    borderWidth: scale(2),
    borderColor: colors.notAct,
    textAlign: 'center',
    borderRadius:scale(10), 
    marginRight:scale(10)
  },
  focusCell: {
    borderColor: colors.splach,
  },
  Button:{
       alignItems:'center', 
    justifyContent:'center', 
    color:colors.Actdot,
    marginTop:verticalScale(60),
    backgroundColor:colors.text,
    width:scale(270),
    height:verticalScale(40), 
    borderRadius:scale(5)
  },
  enableButton:{
       alignItems:'center', 
    justifyContent:'center', 
    color:colors.Actdot,
    marginTop:verticalScale(40),
    backgroundColor:"gray",
    width:scale(130),
    height:verticalScale(40), 
    borderRadius:scale(5),
    marginLeft:scale(30)
  },
  text:{
       color:colors.white,
        fontSize:"18@s",
        fontWeight:'bold'
   
  }
}); 
export default styles ; 