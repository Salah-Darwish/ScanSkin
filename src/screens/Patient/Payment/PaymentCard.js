
import { StyleSheet, Text, View ,Image, TouchableOpacity,TextInput,ScrollView} from 'react-native'
import React ,{useState}from 'react'
import MyStyles from './styles'
import { colors } from "../../../utls/colors";
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { scale } from 'react-native-size-matters'
export default function PaymentCard() {
  return(
    <View style={{flex:1,paddingHorizontal:scale(10),backgroundColor:colors.backgr}}>
         <View style={styles.header}>
        <TouchableOpacity style={styles.arrow}>
           <FontAwesome name='angle-left' size={scale(20)} color='#684428'/>
          </TouchableOpacity>
          <View style={{width:'90%',alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize:scale(21),color:'#7A441A',fontWeight:'500',}}>Payment</Text>
        </View>
 </View>

 <View style={styles.doctorBox}>
   <View style={styles.headbox}>
   <Image source={require('../../../assets/portrait-hansome-young-male-doctor-man.jpg')} style={{width:scale(70),height:scale(80)}}/>
   <View style={{paddingHorizontal:scale(15)}}>
    <View style={styles.headtext}>
    <Text style={{fontSize:scale(16),color:colors.Actdot,fontWeight:'500'}}>Dr.Ahmed Ali</Text>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
     <Text style={{fontSize:scale(14),color:'#F5C832'}}>6.5</Text>
     <Image source={require('../../../assets/goldstar.png')} resizeMode='contain' style={{width:scale(20),height:scale(15)}}/>
    </View>
    <Text style={{fontSize:scale(14),color:colors.textsin}}>300 L.E</Text>
    </View>
   </View>
   </View>
   <View style={{marginRight:'30%',marginTop:'-10%'}}>
   <Text style={{fontSize:15,color:colors.text}}>Offline</Text>
   </View>
  <View style={{width:'90%',alignItems:'center'}}>
   <View style={styles.docAppoint}>
      <View style={{width:scale(80),height:scale(22),backgroundColor:'#F8ECDE',paddingHorizontal:scale(4),flexDirection:'row',alignItems:'center',borderRadius:scale(3)}}>
        <Image source={require('../../../assets/clock.png')} resizeMode='contain' style={{width:scale(15),height:scale(15),}}/>
        <Text style={{fontSize:scale(14),color:colors.text}}>  4:00 Pm</Text>
        </View>
       <View style={{width:scale(72),height:scale(22),backgroundColor:'#F8ECDE',paddingHorizontal:scale(4),flexDirection:'row',alignItems:'center',borderRadius:scale(3)}}>
        <Image source={require('../../../assets/calendar(1).png')} resizeMode='contain' style={{width:scale(15),height:scale(15),}}/>
        <Text style={{fontSize:scale(14),color:colors.text}}>   2 Feb</Text>
       </View>
     </View>
      
         <View style={styles.docAppoint}>
      <View style={{width:scale(70),height:scale(22),backgroundColor:'#F8ECDE',marginLeft:scale(13),paddingHorizontal:scale(4),flexDirection:'row',alignItems:'center',borderRadius:scale(3)}}>
      <Image source={require('../../../assets/placeholder.png')}  resizeMode='contain' style={{width:scale(15),height:scale(15),}}/>
       <Text style={{fontSize:scale(14),color:colors.text}}>Tanta</Text>
      </View>
      <View style={{width:scale(125),height:scale(22),backgroundColor:'#F8ECDE',paddingHorizontal:scale(3),flexDirection:'row',alignItems:'center',borderRadius:scale(3)}}>
      <Image source={require('../../../assets/call.png')} resizeMode='contain' style={{width:scale(15),height:scale(15),}}/>
       <Text style={{fontSize:scale(14),color:colors.text}}>  01115468254</Text>
       </View>
     </View>
      </View>
      </View>
     <View style={{width:'97%',paddingHorizontal:scale(8),marginTop:scale(50)}}>
      <Text style={{fontSize:scale(18),color:'#8D5524E2',fontWeight:'500'}}>Choose card</Text>
      </View>

      <View style={styles.cardView}>
        <Image source={require('../../../assets/visa.png')} resizeMode='contain' style={{width:scale(80),height:scale(40)}}/>
        <View style={styles.card}>
          <View style={{width:scale(50),flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
        <View style={{width:scale(10),height:scale(10),borderRadius:scale(5),backgroundColor:'#AE7D59'}}></View>
        <View style={{width:scale(10),height:scale(10),borderRadius:scale(5),backgroundColor:'#AE7D59'}}></View>
        <View style={{width:scale(10),height:scale(10),borderRadius:scale(5),backgroundColor:'#AE7D59'}}></View>
        <View style={{width:scale(10),height:scale(10),borderRadius:scale(5),backgroundColor:'#AE7D59'}}></View>
        </View>
        <View style={{width:scale(50),flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
        <View style={{width:scale(10),height:scale(10),borderRadius:scale(5),backgroundColor:'#AE7D59'}}></View>
        <View style={{width:scale(10),height:scale(10),borderRadius:scale(5),backgroundColor:'#AE7D59'}}></View>
        <View style={{width:scale(10),height:scale(10),borderRadius:scale(5),backgroundColor:'#AE7D59'}}></View>
        <View style={{width:scale(10),height:scale(10),borderRadius:scale(5),backgroundColor:'#AE7D59'}}></View>
        </View>
        <View style={{width:scale(50),flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
        <View style={{width:scale(10),height:scale(10),borderRadius:scale(5),backgroundColor:'#AE7D59'}}></View>
        <View style={{width:scale(10),height:scale(10),borderRadius:scale(5),backgroundColor:'#AE7D59'}}></View>
        <View style={{width:scale(10),height:scale(10),borderRadius:scale(5),backgroundColor:'#AE7D59'}}></View>
        <View style={{width:scale(10),height:scale(10),borderRadius:scale(5),backgroundColor:'#AE7D59'}}></View>
        </View>
        <Text style={{fontSize:scale(14),color:'#AE7D59'}}>4 5 6 8</Text>
        </View>
        <View style={styles.card}>
          <Text style={{fontSize:scale(14),color:'#AE7D59'}}>Hassan Ali</Text>
          <Text style={{fontSize:scale(14),color:'#AE7D59'}}>08/26</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
         <Text style={{fontSize:18,color:'#FFFFFF'}}>Confirm</Text>
       </TouchableOpacity>
    </View>
  )}
  const styles = StyleSheet.create({
            header:{
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingVertical:scale(12)
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
      doctorBox: {
    width:'97%',
    height:scale(170),
    alignItems:'center',
    paddingHorizontal:scale(3),
    alignSelf:'center',
    backgroundColor:colors.backgr,
    marginTop:scale(25),
    borderRadius:scale(12),
    shadowColor: colors.notAct,
        shadowOpacity: scale(0.9),
        elevation:scale(6),
        borderRadius: scale(10),
        shadowRadius: scale(8),
        shadowOffset: { width: scale(56), height: scale(13) },
  

  },
  headbox: {
    width:'97%',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:scale(8),
  },
  headtext: {
    width:'88%',
    height:scale(20),
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:scale(10)

  },
    docAppoint: {
    width:'90%',
    flexDirection:'row',
    marginTop:scale(15),
    alignItems:'center',
   marginLeft:scale(50),
    justifyContent:'space-around',
  },
reservation: {
  width:'97%',
  flexDirection:'row',
  alignItems:'center',
  marginTop:scale(30),
  paddingHorizontal:scale(12),
  marginTop:'25%'
},
      cardView: {
        width:'97%',
        height:scale(140),
        borderRadius:scale(10),
        backgroundColor:'#F8ECDE',
        alignSelf:'center',
        paddingVertical:scale(12),
        marginTop:scale(20)
      },
      card: {
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:scale(18),
        marginTop:scale(15)
      },
      button:{
        width:'88%',
        height:scale(45),
        borderRadius:scale(10),
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        backgroundColor:colors.splach,
        marginTop:'25%'

      },
     
  })