import { StyleSheet, Text, View ,Image, TouchableOpacity,TextInput,ScrollView} from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import MyStyles from './styles'
import { colors } from "../../../utls/colors";
import {scale} from 'react-native-size-matters';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
export default function HomeScreenDoctors() {
  const [arr,setArr]=useState([{id:1,img:require('../../../assets/young-bearded-man-with-striped-shirt.jpg'),name:'Omar Ali',hour:'5:00 pm',day:'2 Feb'},
  {id:2,img:require('../../../assets/isolated-shot-pleasant-looking-cheerful-beautiful-brunette-posing-against-pink-wall.jpg'),name:'Fatma Ali',hour:'5:00 pm',day:'2 Feb'},
  {id:3,img:require('../../../assets/positive-brunet-man-with-crossed-arms.jpg'),name:'Amr Ali',hour:'6:00 pm',day:'2 Feb'},
  {id:4,img:require('../../../assets/handsome-bearded-guy-posing-against-white-wall.jpg'),name:'Hassan Ali',hour:'5:00 pm',day:'2 Feb'},
]);
  return (
    <View style={{flex:1,paddingVertical:scale(20),backgroundColor:colors.backgr}}>
     <View style={styles.header}>
      <View style={styles.profile}>
        <Image source={require('../../../assets/portrait-hansome-young-male-doctor-man.jpg')} style={{width:scale(55),height:scale(55),borderRadius:scale(27.5),marginRight:scale(10)}}/>
        <View>
          <Text style={{fontSize:scale(18),color:colors.Actdot}}>Hello!</Text>
          <Text style={{fontSize:scale(18),color:colors.Actdot}}>Ahmed</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Image source={require('../../../assets/bell.png')} style={{width:scale(25),height:scale(25)}}/>
      </TouchableOpacity>
     </View>
   
     <View style={styles.Nextappointment}>
      <View style={{width:scale(20),height:scale(120),borderWidth:scale(1),borderTopLeftRadius:scale(10),borderBottomLeftRadius:scale(10), borderColor:colors.white}}>
      <LinearGradient
          colors={['#D8A276','#F8ECDE' ]}
          style={styles.linearGradient}
        >
        </LinearGradient>
      </View>
      <View style={{width:'55%',height:scale(100),justifyContent:'space-around',paddingVertical:scale(8)}}>
        <Text style={{fontSize:scale(16),color:colors.text,fontWeight:'500'}}>Next appointment with</Text>
        <Text style={{fontSize:scale(13),color:colors.text}}>Omar Ali At 5:30 pm</Text>
        <TouchableOpacity style={styles.buttonRemind}>
          <Text style={{fontSize:scale(15),color:colors.white}}>Remind later</Text>
        </TouchableOpacity>
      </View>
      <Image source={require('../../../assets/apointDoc.png')} style={{width:scale(80),height:scale(90),marginRight:scale(5)}}/>
     </View>
     <View style={{marginTop:scale(40),paddingHorizontal:scale(28)}}>
     <Text style={{fontSize:scale(18),fontWeight:'500',color:'#7A441A'}}>Today Appointments</Text>
     </View>
      <ScrollView>
        <View> 
          {arr.map((apointment,index)=>(
     <View style={styles.Nextappointment}>
     <View style={{width:scale(20),height:scale(120),borderWidth:scale(1),borderTopLeftRadius:scale(10),borderBottomLeftRadius:scale(10), borderColor:colors.white}}>
      <LinearGradient
          colors={['#D8A276','#F8ECDE' ]}
          style={styles.linearGradient}
        >
        </LinearGradient>
      </View>
      <Image source={apointment.img} style={{width:scale(70),height:scale(70),borderRadius:scale(35),alignSelf:'flex-start',marginTop:scale(15)}}/>
     <View style={{alignItems:'center',width:'25%',marginRight:scale(10),}}>
      <Text style={{fontSize:scale(16),fontWeight:'500',color:colors.text}}>{apointment.name}</Text>
          <View style={styles.textapoint}>
         <Image source={require('../../../assets/clock.png')} resizeMode='contain' style={{width:scale(15),height:scale(15),}}/>
         <Text style={{fontSize:scale(15),color:colors.text}}>  {apointment.hour}</Text>
         </View>
       <View style={styles.textapoint}>
         <Image source={require('../../../assets/calendar.png')} resizeMode='contain' style={{width:scale(15),height:scale(15),}}/>
         <Text style={{fontSize:scale(15),color:colors.text}}>  {apointment.day}</Text>
        </View>
     </View>
     <View style={{alignItems:'center',width:'25%',marginRight:scale(15)}}>
      <View style={styles.chat}>
        <Image source={require('../../../assets/chat(1).png')} resizeMode='cover' style={{width:scale(20),height:scale(20)}}/>
      </View>
      <TouchableOpacity style={styles.buttonRemind2}>
          <Text style={{fontSize:scale(12),color:colors.white}}>Remind later</Text>
        </TouchableOpacity>
     </View>
     </View>
))}
</View>
    
<View style={{marginTop:scale(60)}}></View>
     </ScrollView>
     </View>
    
      )}
 const styles=StyleSheet.create({
    header:{
    width:'98%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:scale(18),
  },
  profile:{
    width:'35%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
 
  linearGradient: {
    alignItems: 'center',
    borderRadius: scale(5),
    height: scale(120),
    width: scale(25),
    borderWidth:scale(1),
    borderTopLeftRadius:scale(10),
    borderBottomLeftRadius:scale(10),
    borderColor:colors.white
  },
  Nextappointment:{
    width:'90%',
    height:scale(120),
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    alignSelf:'center',
    borderRadius:scale(10),
    marginTop:scale(25),
  backgroundColor:'#FEFDF5',
    shadowColor: colors.notAct,
    shadowOpacity: scale(0.9),
    elevation: scale(6),
    borderRadius: scale(10),
    shadowRadius: scale(5),
    shadowOffset: { width: scale(56), height: scale(13) },
  },
  buttonRemind: {
    width:scale(155),
    height:scale(28),
    backgroundColor:colors.splach,
    borderRadius:scale(10),
    alignItems:'center',
    justifyContent:'center',
   
  },
  textapoint: {
    width:scale(80),
    height:scale(22),
    paddingHorizontal:scale(4),
    flexDirection:'row',
    alignItems:'center',
    borderRadius:scale(3),
    marginTop:scale(8)
  },
  chat: {
    width:scale(40),
    height:scale(40),
    borderRadius:scale(8),
    alignItems:'center',
    justifyContent:'center',
    borderWidth:scale(1),
    borderColor:' #684428',
  
  },
  buttonRemind2: {
    width:scale(90),
    height:scale(30),
    backgroundColor:colors.splach,
    borderRadius:scale(5),
    alignItems:'center',
    justifyContent:'center',
   marginTop:scale(15)
   
  },
 })
