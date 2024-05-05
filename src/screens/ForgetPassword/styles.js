import { ScaledSheet, scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../utls/colors";
const Styles=ScaledSheet.create({
    containerView:{
flex:1,
    backgroundColor:colors.backgr, 
    },
container:{ 

    alignItems:'center',
},
text:{
    color:colors.text, 
    fontWeight:'bold', 
    fontSize:scale(25),
    marginTop:verticalScale(25)
},
img:{
resizeMode:'contain', 
width:scale(500),
height:verticalScale(250),
marginTop:verticalScale(50)

},
  input:{
        width:scale(320), 
        height:verticalScale(45), 
    borderWidth:scale(1), 
    borderColor:colors.text,
    borderRadius:scale(10),
    marginTop:verticalScale(120), 
    paddingLeft:scale(6),
    color:colors.text
    },
      subtext:{
        color:colors.white,
        fontSize:"20@s",
        marginTop:verticalScale(10),
        fontWeight:'bold'
    },
    styleButton:{
    alignItems:'center', 
    justifyContent:'center', 
    color:colors.Actdot,
    marginTop:verticalScale(100),
    backgroundColor:colors.text,
    width:scale(320),
    height:verticalScale(40), 
    borderRadius:scale(5)
}
})
export default Styles;