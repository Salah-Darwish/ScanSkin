///discover disease
import { StyleSheet, Text, View ,Image, TouchableOpacity,TextInput,ScrollView} from 'react-native'
import React ,{useState}from 'react'
import MyStyles from './styles'
import { colors } from "../../../utls/colors";
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { scale, verticalScale } from 'react-native-size-matters'
export default function DiscoverDiseases() {
  return (
     <View style={{flex:scale(1),paddingHorizontal:scale(10),backgroundColor:colors.backgr}}>
      <View style={{marginTop:verticalScale(20)}}>
           <TouchableOpacity style={styles.arrow}>
           <FontAwesome name='angle-left' size={scale(20)} color='#684428'/>
           </TouchableOpacity>
           </View>
           <Image source={require('../../../assets/Heartbroken.png')} resizeMode='cover' style={{width:'80%',height:scale(230),alignSelf:'center',marginTop:scale(30)}}/>
      <View style={styles.text}>
      <Text style={{fontSize:scale(17),color:'#8D5524E2',letterSpacing:1,fontWeight:'bold'}}>We identified a skin cancer spot, we encourage you to schedule an appointment with dermatologist.</Text>
      </View>
      <View style={{marginTop:scale(50)}}>
      <TouchableOpacity style={styles.button}>
        <Text style={{fontSize:18,color:'#FFFFFF'}}>Book Appointment</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={{fontSize:18,color:'#FFFFFF'}}>Back to home</Text>
      </TouchableOpacity>
      </View>
      </View>
  )}
  const styles = StyleSheet.create({
    arrow: {
          width:scale(30),
          height:verticalScale(30),
          borderRadius:scale(15),
          backgroundColor:colors.backgr,
          alignItems:'center',
          justifyContent:'center',
          shadowColor:colors.notAct,
                  shadowOpacity: scale(0.9),
                  elevation: scale(6),
                  borderRadius: scale(15),
                  shadowRadius: scale(8),
                  shadowOffset: { width: scale(56), height: scale(13) },
        },
        text: {width:scale(330),
        alignItems:'center',
        justifyContent:'center',
        marginTop:verticalScale(50),
      paddingHorizontal:scale(8)},
      button:{
        width:scale(250),
        height:verticalScale(55),
        borderRadius:scale(10),
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        backgroundColor:colors.splach,
        marginTop:verticalScale(20)

      }
  })