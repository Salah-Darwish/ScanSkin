import { ScaledSheet, verticalScale ,scale} from "react-native-size-matters";
import { colors } from "../../../utls/colors";
const styles = ScaledSheet.create({
   container:
    {flex:1,paddingVertical:scale(20),backgroundColor:colors.backgr},
  header:{
    width:'98%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:scale(15),
  },
  TextHeader:{fontSize:scale(18),color:colors.Actdot},
  NavigationIconStyle:{width:scale(30),height:verticalScale(27)},
  profile:{
    width:scale(120),
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  ImageHeader:{width:scale(55),height:verticalScale(55),borderRadius:scale(27.5)},

  searchbox:{
    width:scale(320),
    height:scale(50),
    paddingHorizontal:scale(15),
    flexDirection:'row',
    alignItems:'center',
    borderRadius:scale(10),
    borderWidth:scale(1),
    borderColor:colors.text,
    alignSelf:'center',
    marginTop:verticalScale(35)
  },
  textInput:{
    width:scale(284), 
    height:verticalScale(48), 
    paddingHorizontal:scale(10),
      borderRadius:scale(10),
    //borderWidth:scale(1),
 borderColor:colors.text,
color:colors.text, 
//marginTop:verticalScale(5)
  },

  linearGradient: {
    alignItems: 'center',
    borderRadius: scale(5),
    height: verticalScale(120),
    width: scale(25),
    borderWidth:scale(1),
    borderTopLeftRadius:scale(10),
    borderBottomLeftRadius:scale(10),
    borderColor:colors.white
  },
  Nextappointment:{
    width:'88%',
    height:verticalScale(120),
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    alignSelf:'center',
    borderRadius:scale(10),
    marginTop:verticalScale(30),
  backgroundColor:'#FEFDF5',
    shadowColor: colors.notAct,
    shadowOpacity: scale(0.9),
    elevation: scale(6),
    borderRadius: scale(10),
    shadowRadius: scale(5),
    shadowOffset: { width: scale(56), height: scale(13) 
  },
}, 
  buttonRemind: {
    width:scale(155),
    height:verticalScale(28),
    backgroundColor:colors.splach,
    borderRadius:scale(10),
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center', 
    marginTop:verticalScale(14)
  },
  medRemind:{
    width:scale(290),
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:verticalScale(20),
    alignSelf:'center',
    paddingHorizontal:scale(3)
  },
  doctorBox: {
    width:scale(320),
    height:verticalScale(180),
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:scale(3),
    alignSelf:'center',
    backgroundColor:colors.backgr,
    marginTop:verticalScale(15),
    borderRadius:scale(12),
    shadowColor:colors.notAct,
        shadowOpacity: scale(0.9),
        elevation: scale(6),
        borderRadius: scale(10),
        shadowRadius: scale(8),
        shadowOffset: { width: scale(56), height: scale(13) },

  },
  docAppoint: {
    width:scale(220),
    flexDirection:'row',
    marginTop:verticalScale(15),
    alignItems:'center',
    justifyContent:'space-evenly'

  },
  scrolView:{
    width:scale(350),
    height:verticalScale(200),
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:scale(22),
    marginTop:verticalScale(20),
  },
  docNearby: {
    width:scale(160),
    height:verticalScale(170),
    alignItems:'center',
    backgroundColor:colors.backgr,
    borderRadius:scale(10),
    paddingVertical:verticalScale(10),
    paddingHorizontal:scale(12),
      shadowColor:colors.notAct,
      shadowOpacity: scale(0.9),
      elevation: scale(6),
      borderRadius: scale(10),
      shadowRadius: scale(5),
      shadowOffset: { width: scale(56), height: scale(13) },

  },

})
export default styles; 