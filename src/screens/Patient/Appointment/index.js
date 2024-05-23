
import { StyleSheet, Text, View ,Image, TouchableOpacity,TextInput,ScrollView} from 'react-native'
import React ,{useState}from 'react'
import MyStyles from './styles'
import { colors } from "../../../utls/colors";
import { ScaledSheet, scale, verticalScale } from 'react-native-size-matters';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
export default function Appointment() {
  const [arr,setArr]=useState([{id:1,image:"require('../../assets/portrait-hansome-young-male-doctor-man.jpg')",name:'Dr.Ahmed Amr',type:'offline',clock:'4:30 pm',today:'2 feb',address:'Said ST.Tanta',phone:'0122214579'},
  {id:2,image:"require('../../../../assets/portrait-hansome-young-male-doctor-man.jpg')",name:'Dr.Ahmed Amr',type:'offline',clock:'4:30 pm',today:'2 feb',address:'Said ST.Tanta',phone:'0122214579'},
  {id:3,image:"require('../../../assets/portrait-hansome-young-male-doctor-man.jpg')",name:'Dr.Ahmed Amr',type:'offline',clock:'4:30 pm',today:'2 feb',address:'Said ST.Tanta',phone:'0122214579'},
  {id:4,image:"require('../../../assets/portrait-hansome-young-male-doctor-man.jpg')",name:'Dr.Ahmed Amr',type:'offline',clock:'4:30 pm',today:'2 feb',address:'Said ST.Tanta',phone:'0122214579'},
  {id:5,image:"require('../../../assets/portrait-hansome-young-male-doctor-man.jpg')",name:'Dr.Ahmed Amr',type:'offline',clock:'4:30 pm',today:'2 feb',address:'Said ST.Tanta',phone:'0122214579'}])
  return (
<View style={{flex:1,paddingHorizontal:scale(10),backgroundColor:colors.backgr}}>
<View style={styles.header}>
       <TouchableOpacity style={styles.arrow}>
          <FontAwesome name='angle-left' size={scale(20)} color='#684428'/>
         </TouchableOpacity>
         <View style={{width:'90%',alignItems:'center',justifyContent:'center'}}>
       <Text style={{fontSize:scale(21),color:'#7A441A',fontWeight:'500',}}>Appointment</Text>
       </View>
</View>
<ScrollView>
<View style={{ width: '100%', height:'50%', justifyContent: 'space-between', alignItems: 'center' }}>
 { arr.map((doctor, index) => (
<View style={styles.doctorBox}>
  <Image source={require('../../../assets/portrait-hansome-young-male-doctor-man.jpg')} style={{width:scale(90),height:scale(120)}}/>
   <View >
     <View style={styles.docAppoint}>
      <Text style={{fontSize:scale(15),color:colors.Actdot,fontWeight:'500'}}>{doctor.name}</Text>
       <Text style={{fontSize:scale(15),color:colors.text}}>{doctor.type}</Text>
    </View>
    <View style={styles.docAppoint}>
       <View style={{width:scale(72),height:scale(20),backgroundColor:'#F8ECDE',paddingHorizontal:4,flexDirection:'row',alignItems:'center',justifyContent:'space-between',borderRadius:scale(3)}}>
       <Image source={require('../../../assets/clock.png')} resizeMode='contain' style={{width:scale(15),height:scale(20),}}/>
       <Text style={{fontSize:scale(11),color:colors.text}}>{doctor.clock}</Text>
       </View>
       <View style={{width:scale(60),height:scale(20),backgroundColor:'#F8ECDE',flexDirection:'row',alignItems:'center',justifyContent:'center',borderRadius:scale(3)}}>
       <Image source={require('../../../assets/calendar(1).png')} resizeMode='contain' style={{width:scale(15),height:scale(20),}}/>
       <Text style={{fontSize:scale(11),color:colors.text}}>   {doctor.today}</Text>
       </View>
     </View>
     <View style={styles.docAppoint}>
       <View style={{width:scale(93),height:scale(20),backgroundColor:'#F8ECDE',paddingHorizontal:scale(4),flexDirection:'row',alignItems:'center',justifyContent:'space-between',borderRadius:scale(3)}}>
       <Image source={require('../../../assets/placeholder.png')} resizeMode='contain' style={{width:scale(15),height:scale(20),}}/>
       <Text style={{fontSize:scale(11),color:colors.text}}>{doctor.address}</Text>
       </View>
      <View style={{width:scale(98),height:scale(20),backgroundColor:'#F8ECDE',paddingHorizontal:scale(3),flexDirection:'row',alignItems:'center',justifyContent:'center',borderRadius:scale(3)}}>
       <Image source={require('../../../assets/call.png')} resizeMode='contain' style={{width:scale(15),height:scale(20),}}/>
       <Text style={{fontSize:scale(11),color:colors.text}}>  {doctor.phone}</Text>
       </View>
    </View>
   </View>
      </View>
   ))}
   </View>
   
   </ScrollView>
   <View style={{marginTop:80}}></View>
</View>
  ); 
}; 
 
const styles = ScaledSheet.create({ 
    header:{
    width:scale(320),
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingVertical:verticalScale(12)
  },
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
    doctorBox: {
    width:scale(300),
    height:verticalScale(130),
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:scale(3),
    alignSelf:'center',
    backgroundColor:colors.backgr,
    marginTop:scale(25),
    borderRadius:scale(12),
    shadowColor: colors.notAct,
        shadowOpacity: scale(0.9),
        elevation: scale(6),
        borderRadius: scale(15),
        shadowRadius: scale(8),
        shadowOffset: { width: scale(56), height: scale(13) },
  

  },
  docAppoint: {
    width:scale(200),
    flexDirection:'row',
    marginTop:scale(15),
    alignItems:'center',
    justifyContent:'space-around',

  },
})
