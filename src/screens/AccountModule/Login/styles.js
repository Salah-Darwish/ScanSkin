import { ScaledSheet,scale,verticalScale} from "react-native-size-matters";
import { colors } from "../../../utls/colors";
const styles=ScaledSheet.create({
    imageContainer:{
flex:1, 
    }, 
    scrollViewContent:{
flexGrow:1
    },
container:{
alignItems:'center',
justifyContent:'center'
},
    text:{
        fontSize:"25@s", 
      fontWeight:'bold', 
        color:colors.white,
         marginTop:verticalScale(25)
    },
    subtext:{
        color:colors.white,
        fontSize:"15@s",
        marginTop:verticalScale(10)
    },
    input:{
        width:scale(320), 
        height:verticalScale(45), 
    borderWidth:scale(1), 
    borderColor:colors.text,
    borderRadius:scale(10),
    marginTop:verticalScale(150), 
    paddingLeft:scale(6),
    color:colors.text
    },
    Subcontainer:{
        alignItems:'center',
        justifyContent:'space-between', 
        marginTop:verticalScale(30),
        flexDirection:'row',
        paddingHorizontal:scale(13)
    },
touchstyle:{
    width:scale(35),
    height:verticalScale(30),
    borderWidth:1 ,
    borderColor:colors.text,
    borderRadius:scale(5),
    alignItems:"center",
    justifyContent:'center'

},
containetBut:{
    alignItems:"center",
    marginTop:verticalScale(20)
},
ImageContainer:{
    flexDirection:'row', 
    justifyContent:"space-evenly", 
    alignItems:"center",
    marginTop:verticalScale(50),

    
}, 
touchimgstyle:{
width:scale(55),
height:verticalScale(50),
alignItems:'center',
justifyContent:'center',
backgroundColor:colors.bacImg,
borderRadius:scale(10), 

}, 
ImageStyle:{
 resizeMode:'contain',
 width:scale(40),
 height:verticalScale(35)
},
styleButton:{
    alignItems:'center', 
    justifyContent:'center', 
    color:colors.Actdot,
    marginTop:verticalScale(20),
    backgroundColor:colors.text,
    width:scale(270),
    height:verticalScale(40), 
    borderRadius:scale(5)
},
error:{
    fontSize:'14@s', 
    color:colors.error, 
    fontWeight:'bold',  
    marginTop:verticalScale(5), 
    marginLeft:scale(160)
},
})
export default styles;