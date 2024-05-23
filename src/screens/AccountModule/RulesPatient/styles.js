import { ScaledSheet,scale,verticalScale} from "react-native-size-matters";
import { colors } from "../../../utls/colors";
const styles=ScaledSheet.create({
    imageContainer:{
flex:1
    }, 

container:{
alignItems:'center',
 justifyContent:'center', 
 
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
        width:scale(150), 
        height:verticalScale(40), 
    borderWidth:scale(1), 
    borderColor:colors.text,
    borderRadius:scale(8),
    marginTop:verticalScale(30), 
    paddingLeft:scale(6),
    color:colors.text
    },
    inputStyle:{
        width:scale(320), 
        height:verticalScale(45), 
    borderWidth:scale(1), 
    borderColor:colors.text,
    borderRadius:scale(8),
    marginTop:verticalScale(120), 
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
 width:scale(30),
 height:verticalScale(30),
 marginLeft:scale(5),
},
ImgCon:{
width:scale(50),
height:verticalScale(50),
borderRadius:scale(25), 
backgroundColor:colors.backgr,
alignItems:'center',
justifyContent:'center',
marginTop:verticalScale(20)
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
styleTouIcon:{
position:'absolute',
alignItems:'center',
justifyContent:'center',
width:scale(20),
height:verticalScale(20),
borderRadius:scale(10),
backgroundColor:colors.white, 
top:verticalScale(30),
right:scale(35)
},
styleImgIc:{
width:scale(10),
height:verticalScale(10), 
resizeMode:'contain'
},
dropdown: {
      height:verticalScale(50), 
      width:scale(320), 
          borderColor:colors.text,
      borderWidth:scale(1) ,
      borderRadius: scale(8),
      paddingHorizontal: scale(8),
      marginTop:verticalScale(20)
    },
    placeholderStyle: {
      fontSize: scale(14),
      color:colors.text
    },
    selectedTextStyle: {
      fontSize: scale(16),
        color:colors.text, 
    },
  itemContainer:{
   
    backgroundColor:colors.backgr,
    alignItems:'center',
    justifyContent:'center',

  },
  itemTextStyle:{
    color:colors.text
  }
})
export default styles;