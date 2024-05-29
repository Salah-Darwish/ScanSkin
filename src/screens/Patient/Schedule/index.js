
import { StyleSheet, Text, View ,Image, TouchableOpacity,TextInput,ScrollView} from 'react-native'
import React ,{useState}from 'react'
import LinearGradient from 'react-native-linear-gradient'
import MyStyles from './styles'
import { colors } from "../../../utls/colors";
import {scale} from 'react-native-size-matters';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
export default function Schedule() {
  const [Arrdays,setArrdays]=useState([{id:1,day:'MON'},{id:2,day:'TUS'},{id:3,day:'WED'},{id:4,day:'THU'},,{id:5,day:'FRI'},{id:6,day:'STA'},{id:7,day:'SUN'},
  {id:8,day:'MON'},{id:9,day:'TUS'},{id:10,day:'WED'},{id:11,day:'THU'},,{id:12,day:'FRI'},{id:13,day:'STA'},{id:14,day:'SUN'},
  {id:15,day:'MON'},{id:16,day:'TUS'},{id:17,day:'WED'},{id:18,day:'THU'},,{id:19,day:'FRI'},{id:20,day:'STA'},{id:21,day:'SUN'},
  {id:21,day:'MON'},{id:23,day:'TUS'},{id:24,day:'WED'},{id:25,day:'THU'},,{id:26,day:'FRI'},{id:27,day:'STA'},{id:28,day:'SUN'},
  {id:29,day:'MON'},{id:30,day:'TUS'},{id:31,day:'WED'}])

  const [Arrhours,setArrhours]=useState([{id:1,hour:'9:00 Am'},{id:2,hour:'9:30 Am'},{id:3,hour:'10:00 Am'},{id:4,hour:'10:30 Am'},,{id:5,hour:'11:00 Am'},{id:6,hour:'11:30 Am'},{id:7,hour:'12:00 pm'},
  {id:8,hour:'12:30 pm'},{id:9,hour:'1:00 pm'},{id:10,hour:'1:30 pm'},{id:11,hour:'2:00 pm'},,{id:12,hour:'2:30 pm'},{id:13,hour:'3:00 pm'},{id:14,hour:'3:30 pm'},
  {id:15,hour:'4:00 pm'},{id:16,hour:'4:30 pm'},{id:17,hour:'5:00 pm'},{id:18,hour:'5:30 pm'},,{id:19,hour:'6:00 pm'},])
  return (
    <ScrollView style={{flex:1,paddingHorizontal:scale(10),backgroundColor:colors.backgr}}>
             <View style={styles.header}>
         <TouchableOpacity style={styles.arrow}>
            <FontAwesome name='angle-left' size={scale(20)} color='#684428'/>
           </TouchableOpacity>
           <View style={{width:'90%',alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize:scale(21),color:'#7A441A',fontWeight:'500',}}>Set appointment</Text>
        </View>
 </View>
    <Text style={{fontSize:scale(18),color:'#944514',fontWeight:'500',paddingHorizontal:scale(20)}}>Schedule</Text>
    <View style={styles.schedule}>
      <TouchableOpacity style={styles.caretButton} >
        <FontAwesome name='caret-left' size={scale(20)} color={colors.splach} />
      </TouchableOpacity>
      <Text style={{fontSize:scale(16),color:'#7A441A'}}>Jan</Text>
      <TouchableOpacity style={styles.caretButton} >
        <FontAwesome name='caret-right' size={scale(20)} color={colors.splach} />
      </TouchableOpacity>
    </View>
    <ScrollView horizontal={true}>
    <View style={styles.viewHorizont}>
      {Arrdays.map((day,index)=>(
    <TouchableOpacity style={styles.apointDays}>
      <Text style={{fontSize:scale(16),color:colors.Actdot}}>{day.id}</Text>
      <Text style={{fontSize:scale(16),color:colors.Actdot,fontWeight:'400'}}>{day.day}</Text>
    </TouchableOpacity>
    ))}
    </View>
    </ScrollView>
    <View style={{alignItems:'center',justifyContent:'center',}}>
    <Text style={{fontSize:scale(13),color:'#E9D2C1',}}>─────────────────────────────────</Text>
    </View>
    <Text style={{fontSize:scale(18),color:'#944514',fontWeight:'500',paddingHorizontal:scale(18)}}>Avaliable Time</Text>

  <View style={styles.hour}>
    {Arrhours.map((hour,index)=>(
    <TouchableOpacity style={styles.apointhours}>
      <Text style={{fontSize:scale(16),color:colors.Actdot}}>{hour.hour}</Text>
    </TouchableOpacity>
    ))}
    </View>
   
    <View style={{alignItems:'center',justifyContent:'center'}}>
    <Text style={{fontSize:scale(13),color:'#E9D2C1',}}>─────────────────────────────────</Text>
    </View>

    <Text style={{fontSize:scale(18),color:'#944514',fontWeight:'500',paddingHorizontal:scale(18)}}>Appointment Type</Text>
     <View style={styles.apointType}>
     <TouchableOpacity style={styles.apointhours}>
      <Text style={{fontSize:scale(16),color:colors.Actdot}}>Online</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.apointhours}>
      <Text style={{fontSize:scale(16),color:colors.Actdot}}>Offline</Text>
    </TouchableOpacity>
      </View>
       <View style={{alignItems:'center',justifyContent:'center'}}>
    <Text style={{fontSize:scale(13),color:'#E9D2C1',}}>─────────────────────────────────</Text>
    </View>
    <Text style={{fontSize:scale(18),color:'#944514',fontWeight:'500',paddingHorizontal:scale(18)}}>Payment Method</Text> 
    <View style={styles.paymentView}>
      <View style={styles.paymentmethod}>
        <TouchableOpacity style={styles.payment}></TouchableOpacity>
        <Text style={{fontSize:scale(15),color:'#944514'}}>Cash</Text>
      </View>
      <View style={styles.paymentmethod}>
        <TouchableOpacity style={styles.payment}></TouchableOpacity>
        <Text style={{fontSize:scale(15),color:'#944514'}}>visa</Text>
      </View>
    </View>
       
         <TouchableOpacity style={styles.button}>
         <Text style={{fontSize:18,color:'#FFFFFF'}}>Book appointment</Text>
       </TouchableOpacity>
    <View style={{marginTop:scale(80)}}></View>
    </ScrollView>
  )}
  const styles=StyleSheet.create({
                header:{
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingVertical:scale(20),
    paddingHorizontal:scale(8),
    marginBottom:scale(10)
  },
  arrow: {
    width:scale(30),
    height:scale(30),
    borderRadius:scale(15),
    backgroundColor:colors.backgr,
    alignItems:'center',
    justifyContent:'center',
    shadowColor: colors.notAct,
     shadowOpacity: scale(0.9),
    elevation: scale(6),
    borderRadius: scale(15),
     shadowRadius: scale(8),
     shadowOffset: { width: scale(56), height: scale(13) },
       
  },
  schedule: {
    width:'28%',
    alignSelf:'center',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:scale(10)
  },
  caretButton:{
    width:'20%',
    alignItems:'center',
    justifyContent:'center'
  },
  viewHorizont: {
    width:'100%',
    height:scale(120),
    paddingHorizontal:scale(15),
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  apointDays: {
    width:scale(70),
    height:scale(80),
    backgroundColor:'#E9D2C1',
    borderRadius:scale(10),
    marginRight:scale(10),
    alignItems:'center',
    justifyContent:'center',
    shadowColor: '#E2CBBB',
     shadowOpacity: scale(0.9),
    elevation: scale(6),
    borderRadius: scale(15),
     shadowRadius: scale(8),
     shadowOffset: { width: scale(56), height: scale(13) },

  },
  apointhours:{
    width:scale(90),
    height:scale(40),
    backgroundColor:colors.backgr,
    borderRadius:scale(10),
    marginRight:scale(11),
    marginBottom:scale(11),
    alignItems:'center',
    justifyContent:'center',
    shadowColor: colors.notAct,
     shadowOpacity: scale(0.9),
    elevation: scale(6),
    borderRadius: scale(10),
     shadowRadius: scale(5),
     shadowOffset: { width: scale(56), height: scale(13) },
  },
  hour :{
    width:'100%',
    paddingHorizontal:scale(12),
    flexWrap:'wrap',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:scale(15)
  },
  apointType: {
    width:'80%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:scale(15),
    marginTop:scale(15),
  },
  paymentView:{
    width:'70%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:scale(15),
    marginTop:scale(15)
  },
  paymentmethod: {
    width:'30%',
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:scale(5),
   
  },
  payment:{
    width:scale(20),
    height:scale(20),
    borderRadius:scale(5),
    borderWidth:scale(1),
    borderColor:'#944514',
    marginRight:scale(6)
  },
          button:{
        width:'90%',
        height:scale(50),
        borderRadius:scale(10),
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        backgroundColor:colors.splach,
        marginTop:scale(40)

      },
 
  })
