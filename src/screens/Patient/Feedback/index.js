/////////////////////////////feedback
import { StyleSheet, Text, View ,Image, TouchableOpacity,TextInput,ScrollView} from 'react-native'
import React ,{useState}from 'react'
import MyStyles from './styles'
import { colors } from "../../../utls/colors";
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { scale } from 'react-native-size-matters'
export default function FeedBack() {
  return(
    <View style={{flex:1,paddingHorizontal:scale(10),backgroundColor:colors.backgr}}>
         <View style={styles.header}>
        <TouchableOpacity style={styles.arrow}>
           <FontAwesome name='angle-left' size={scale(20)} color='#684428'/>
          </TouchableOpacity>
          <View style={{width:'90%',alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize:scale(21),color:colors.Actdot,fontWeight:'500',}}>FeedBack</Text>
        </View>
 </View>
 <View style={styles.viewbox}>
  <Text style={{fontSize:scale(14),color:colors.notAct,textAlign:'center',paddingHorizontal:scale(55)}}>Help us improve by telling us how was your Experience with</Text>
 <Text style={{fontSize:scale(20),fontWeight:'500',color:colors.splach,marginTop:scale(20)}}>Dr.Ahmed Ali</Text>
 <Image source={require('../../../assets/portrait-hansome-young-male-doctor-man.jpg')} resizeMode='cover' style={{width:scale(80),height:scale(130),marginTop:scale(15)}}/>
 <View style={{width:'50%',flexDirection:'row',alignItems:'center',marginTop:scale(20),justifyContent:'center'}}>
<FontAwesome name='star' size={15} color={colors.Actdot} />
<FontAwesome name='star' size={15} color={colors.Actdot} />
<FontAwesome name='star' size={15} color={colors.Actdot} />
<FontAwesome name='star' size={15} color={colors.Actdot} />
<FontAwesome name='star' size={15} color={colors.Actdot} />
 </View>
 <View style={styles.ViewTextinput}>
    <TextInput style={styles.textbox}
    placeholder='leave comment...'
    placeholderTextColor={colors.splach}
    />
 </View>
 <View style={styles.viewBut}>
 <TouchableOpacity style={styles.but}>
          <Text style={{fontSize:scale(16),color:colors.splach}}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
         <Text style={{fontSize:scale(16),color:'#FFFFFF'}}>Give feedback</Text>
        </TouchableOpacity>
 </View>
 </View>
 </View>
  )}
  const styles=StyleSheet.create({
                header:{
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingVertical:scale(20),
    paddingHorizontal:scale(10)
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
  viewbox: {
    width:'97%',
    height:'70%',
    marginTop:'15%',
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:scale(20),
    backgroundColor:colors.backgr,
    shadowColor: colors.notAct,
    shadowOpacity: scale(0.9),
   elevation: scale(6),
   borderRadius: scale(15),
    shadowRadius: scale(8),
    shadowOffset: { width: scale(56), height: scale(13) },
  },
  ViewTextinput:{
    width:scale(230),
    height:scale(70),
    alignSelf:'center',
    backgroundColor:'#E2CBBB',
    borderRadius:scale(10),
    paddingHorizontal:scale(10),
    marginTop:scale(30)
  },
  textbox: {
    width:'100%',
    height:scale(50)
  },
  viewBut: {
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:scale(25)
  },
              button:{
        width:scale(135),
        height:scale(50),
        borderRadius:scale(10),
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        backgroundColor:colors.splach,

      },
      but:{
        width:scale(135),
        height:scale(50),
        borderRadius:scale(10),
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        borderWidth:scale(1),
        backgroundColor:colors.backgr,
        borderColor:colors.splach,

      }
  })