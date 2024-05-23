//patient notification
import { StyleSheet, Text, View ,Image, TouchableOpacity,TextInput,ScrollView} from 'react-native'
import React ,{useState}from 'react'
import MyStyles from './styles'
import { colors } from "../../../utls/colors";
import { scale, verticalScale } from 'react-native-size-matters';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
export default function NotifactionPatient({navigation}) {
  const [arr,setArr]=useState([{id:1,text:'You set a reminder for appointment with Dr.mohamed today.'},
  {id:1,text:'You set a reminder for appointment with Dr.mohamed today.'},
  {id:1,text:'You set a reminder for appointment with Dr.mohamed today.'},
  ])
  return (
<View style={{flex:1,paddingHorizontal:scale(10),backgroundColor:colors.backgr}}>
<View style={styles.header}>
       <TouchableOpacity style={styles.arrow}  onPress={navigation.navigate('HomeScreen')}>
          <FontAwesome name='angle-left' size={scale(20)} color='#684428'/>
         </TouchableOpacity>
         <View style={{width:scale(300),alignItems:'center',justifyContent:'center'}}>
       <Text style={{fontSize:scale(21),color:'#7A441A',fontWeight:'500',}}>Notifications</Text>
       </View>
</View>

<View style={styles.today}>
       <Text style={{fontSize:scale(18),fontWeight:'500',color:'#7A441A'}}>Today</Text>
      <TouchableOpacity> 
        <Text style={{fontSize:scale(16),color:colors.textsin}}>Clear all</Text>
       </TouchableOpacity>
      </View>
      <View style={styles.notifyBox}>
        <View style={styles.notifytime}>
          <FontAwesome name='bell' size={scale(18)} color={colors.backgr} />
          <Text style={{fontSize:scale(15),color:colors.backgr}}>10 min ago</Text>
        </View>
        <Text style={{fontSize:scale(15),color:colors.backgr,textAlign:'center',paddingHorizontal:scale(5)}}>You set a reminder for appointment with Dr.mohamed today.</Text>
      </View>
      <View style={styles.notifyBox1}>
        <View style={styles.notifytime}>
          <FontAwesome name='bell' size={scale(18)} color={colors.Actdot} />
          <Text style={{fontSize:scale(15),color:colors.Actdot}}>23 min ago</Text>
        </View>
        <Text style={{fontSize:scale(15),color:colors.Actdot,textAlign:'center',paddingHorizontal:scale(5)}}> Dr.mohamed provided you presciption ,check it.</Text>
      </View>
      <View style={{marginTop:verticalScale(25),paddingHorizontal:scale(10)}}>
      <Text style={{fontSize:scale(18),color:'#7A441A',fontWeight:'500',}}>Yesterday</Text>
      </View>
      <ScrollView>
      <View >
      
        {arr.map((doctor, index) => (
           <View style={styles.notifyBox1}>
           <View style={styles.notifytime}>
             <FontAwesome name='bell' size={scale(18)} color={colors.Actdot} />
           </View>
           <Text style={{fontSize:scale(15),color:colors.Actdot,textAlign:'center',paddingHorizontal:scale(5)}}>{doctor.text}</Text>
         </View>
        ))}
      </View>
      <View style={{marginTop:verticalScale(60)}}></View>
      </ScrollView>
</View>
  )}
  const styles = StyleSheet.create({
        header:{
    width:scale(320),
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingVertical:verticalScale(20)
  },
  arrow: {
    width:scale(30),
    height:verticalScale(30),
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
    today:{
    width:scale(320),
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:verticalScale(25),
    alignSelf:'center',
    paddingHorizontal:scale(10)
  },
  notifyBox: {
    width:scale(320),
    height:verticalScale(100),
    borderRadius:scale(10),
    backgroundColor:colors.splach,
    marginTop:verticalScale(30),
    paddingHorizontal:scale(10),
    alignSelf:'center',
    shadowColor: colors.notAct,
    shadowOpacity: scale(0.9),
    elevation: scale(6),
    borderRadius: scale(15),
    shadowRadius: scale(8),
    shadowOffset: { width: scale(56), height: scale(13) },

  },
  notifytime: {
    width:scale(300),
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    padding:scale(8)
  },
  notifyBox1: {
    width:scale(310),
    height:verticalScale(100),
    borderRadius:scale(10),
    backgroundColor:colors.backgr,
    marginTop:verticalScale(20),
    paddingHorizontal:scale(10),
    alignSelf:'center',
    shadowColor: colors.notAct,
            shadowOpacity: scale(0.9),
            elevation: scale(6),
            borderRadius: scale(15),
            shadowRadius: scale(8),
            shadowOffset: { width: scale(56), verticalScale: scale(13) },

  },
   })