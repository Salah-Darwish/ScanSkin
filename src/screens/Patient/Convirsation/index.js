/////////////page 25
import { StyleSheet, Text, View ,Image, TouchableOpacity,TextInput,ScrollView,ImageBackground} from 'react-native'
import React ,{useState}from 'react'
import MyStyles from './styles'
import { colors } from "../../../utls/colors";
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { scale } from 'react-native-size-matters'
export default function Convirsation() {
  return(
    <View style={{flex:1,backgroundColor:colors.backgr,paddingHorizontal:scale(15)}}>
             <TouchableOpacity style={styles.arrow}>
            <FontAwesome name='angle-left' size={scale(20)} color='#684428'/>
           </TouchableOpacity>
          <Image source={require('../../../assets/Confirmed.png')} resizeMode='cover' style={{width:'95%',height:scale(170),alignSelf:'center',marginTop:scale(40)}}/>
          <Text style={{fontSize:scale(20),color:colors.text,marginTop:scale(15),fontWeight:'500',textAlign:'center'}}>Congratulation</Text>
          <Text style={{fontSize:scale(15),color:colors.splach,textAlign:'center',marginTop:scale(35),paddingHorizontal:scale(15)}}>Your ppointment with Dr.Mohamed has been successfully booked. you will get a notification.</Text>
                <View style={{marginTop:scale(30)}}>
       <TouchableOpacity style={styles.button}>
         <Text style={{fontSize:18,color:'#FFFFFF'}}>Start Conversation</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.but}>
         <Text style={{fontSize:scale(18),color:colors.splach}}>Cancel Appointment</Text>
       </TouchableOpacity>
     </View>
    </View>
  )
}
const styles=StyleSheet.create({
    arrow: {
        width:scale(30),
        height:scale(30),
        borderRadius:scale(15),
        backgroundColor:colors.backgr,
        alignItems:'center',
        justifyContent:'center',
        marginVertical:scale(30),
        marginHorizontal:scale(10),
        shadowColor: colors.notAct,
         shadowOpacity: scale(0.9),
        elevation: scale(6),
        borderRadius: scale(15),
         shadowRadius: scale(8),
         shadowOffset: { width: scale(56), height: scale(13) },
           
      },
            button:{
        width:scale(270),
        height:scale(50),
        borderRadius:scale(10),
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        backgroundColor:colors.splach,
        marginTop:scale(20)

      },
      but:{
        width:scale(270),
        height:scale(50),
        borderRadius:scale(10),
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        borderWidth:scale(1),
        backgroundColor:colors.backgr,
        borderColor:colors.splach,
        marginTop:scale(20)

      }
})