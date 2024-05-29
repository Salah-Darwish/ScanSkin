import { StyleSheet, Text, View ,Image, TouchableOpacity,TextInput,ScrollView} from 'react-native'
import React ,{useState}from 'react'
import MyStyles from './styles'
import { colors } from "../../../utls/colors";
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { scale } from 'react-native-size-matters'
export default function DisplayAllDoctors() {
  const [arrDoctors,setArrDoctors]=useState([{id:1,img:"require('../../../assets/require('../../../assets/docgirl.jpg')",
  name:'Dr.Aya Farid',price:250,reviews:'300reviews',
  address:'Said ST.Tanta',Rate:require('../../../assets/starrate.png')},
  {id:2,img:require('../../../assets/portrait-hansome-young-male-doctor-man.jpg'),name:'Dr.Ahmed Amr',price:300,reviews:'300reviews',address:'Said ST.Tanta',imageRate:require('../../../assets/starrate.png')},
  {id:3,img:require('../../../assets/portrait-hansome-young-male-doctor-man.jpg'),name:'Dr.Ahmed Amr',price:300,reviews:'300reviews',address:'Said ST.Tanta',imageRate:require('../../../assets/starrate.png')},
  {id:4,img:require('../../../assets/portrait-hansome-young-male-doctor-man.jpg'),name:'Dr.Ahmed Amr',price:300,reviews:'300reviews',address:'Said ST.Tanta',imageRate:require('../../../assets/starrate.png')},
  {id:5,img:require('../../../assets/portrait-hansome-young-male-doctor-man.jpg'),name:'Dr.Ahmed Amr',price:300,reviews:'300reviews',address:'Said ST.Tanta',imageRate:require('../../../assets/starrate.png')},])
  return (
<View style={{flex:1,paddingHorizontal:scale(10),backgroundColor:colors.backgr}}>
<View style={styles.header}>
       <TouchableOpacity style={styles.arrow}>
          <FontAwesome name='angle-left' size={scale(20)} color='#684428'/>
         </TouchableOpacity>
         <View style={{width:'90%',alignItems:'center',justifyContent:'center'}}>
       <Text style={{fontSize:scale(21),color:'#7A441A',fontWeight:'500',}}>Doctors</Text>
       </View>
</View>
<View style={styles.searchbox}>
      <Image source={require('../../../assets/magnifying-glass(1).png')} style={{width:20,height:20}}/>
       <TextInput style={styles.textInput}
      placeholder='Search for doctors'
      placeholderTextColor={colors.text}
      />
     </View>
     <ScrollView>
     <View style={{width:'95%',marginTop:scale(30)}}>
     {arrDoctors.map((doctor, index) => (
     <TouchableOpacity style={styles.doctorBox}>
      <View style={styles.PartUP}>
        <View style={styles.doctorPhoto}>
      <Image source={doctor.img} style={{width:scale(60), height:scale(60),borderRadius:scale(30)}}/>
      <View style={{paddingHorizontal:scale(12),alignItems:'center'}}>
        <Text style={{fontSize:scale(16),fontWeight:'500',color:'#8D5524E2'}}>{doctor.name}</Text>
        <Text style={{fontSize:scale(13),fontWeight:'300',color:'#AE7D59'}}>dermatologist</Text>
      </View>
      </View>
      <Text style={{fontSize:scale(15),color:colors.textsin}}>{doctor.price}</Text>
      </View>
      <View style={styles.PartUP}>
        <View style={styles.reviews}>
          <Image source={doctor.Rate} style={{width:scale(50),height:scale(30)}}/>
          <Text style={{fontSize:scale(13),color:'#8C624CE2'}}>{ doctor.reviews}</Text>
        </View>
        <View style={styles.reviews}>
        <Image source={require('../../../assets/placeholder.png')} style={{width:scale(20),height:scale(20)}}/>
          <Text style={{fontSize:scale(13),color:'#8C624CE2'}}>{doctor.address}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
         <Text style={{fontSize:18,color:'#FFFFFF'}}>Book Appointment</Text>
      </TouchableOpacity>
     </TouchableOpacity>
     ))}
     </View>
     </ScrollView>
     <View style={{marginTop:scale(60)}}></View>
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
    searchbox:{
    width:'95%',
    height:scale(50),
    paddingHorizontal:scale(15),
    flexDirection:'row',
    alignItems:'center',
    borderRadius:scale(10),
    borderWidth:scale(1),
    borderColor:colors.text,
    alignSelf:'center',
    marginTop:scale(35)
  },
  textInput:{
    width:'60%',
    paddingHorizontal:scale(10)
  },
  doctorBox: {
    width:'95%',
    height:scale(170),
    marginTop:scale(20),
    alignSelf:'center',
    borderRadius:scale(10),
    paddingVertical:scale(5),
    backgroundColor:colors.backgr,
    paddingHorizontal:scale(10),
    shadowColor: colors.notAct,
     shadowOpacity: scale(0.9),
    elevation: scale(6),
    borderRadius: scale(10),
     shadowRadius: scale(8),
     shadowOffset: { width: scale(56), height: scale(13) },

  },
  PartUP: {
    width:'95%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingVertical:scale(3)

  },
  doctorPhoto :{
    width:scale(200),
    flexDirection:'row',
    alignItems:'center',
  },
  
  reviews: {
    width:'35%',
    flexDirection:'row',
    alignItems:'center'
  },
        button:{
        width:scale(240),
        height:scale(40),
        borderRadius:scale(10),
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        backgroundColor:colors.splach,
        marginTop:scale(5)

      }
  
 })