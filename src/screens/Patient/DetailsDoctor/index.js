//////////detail Doctor
import { StyleSheet, Text, View ,Image, TouchableOpacity,TextInput,ScrollView,ImageBackground} from 'react-native'
import React ,{useState}from 'react'
import MyStyles from './styles'
import { colors } from "../../../utls/colors";
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { scale } from 'react-native-size-matters'
export default function DetailsDoctors() {
    const [arr,setArr]=useState([{id:1,img:require('../../../assets/young-bearded-man-with-striped-shirt.jpg'),name:'Omar Ali',text:'Was wonderful surgeon and the staff was always helpful and kind.',rate:require('../../../assets/starrate.png')},
  {id:2,img:require('../../../assets/young-bearded-man-with-striped-shirt.jpg'),name:'Omar Ali',text:'Was wonderful surgeon and the staff was always helpful and kind.',rate:require('../../../assets/starrate.png')},
  {id:3,img:require('../../../assets/young-bearded-man-with-striped-shirt.jpg'),name:'Omar Ali',text:'Was wonderful surgeon and the staff was always helpful and kind.',rate:require('../../../assets/starrate.png')},
{id:4,img:require('../../../assets/young-bearded-man-with-striped-shirt.jpg'),name:'Omar Ali',text:'Was wonderful surgeon and the staff was always helpful and kind.',rate:require('../../../assets/starrate.png')},  
{id:5,img:require('../../../assets/young-bearded-man-with-striped-shirt.jpg'),name:'Omar Ali',text:'Was wonderful surgeon and the staff was always helpful and kind.',rate:require('../../../assets/starrate.png')},
])
  return(
    <ScrollView style={{flex:1,backgroundColor:colors.backgr}}>
      <View style={styles.header}>
      <ImageBackground source={require('../../../assets/portrait-hansome-young-male-doctor-man.jpg')} resizeMode='cover' style={{width:'100%',height:scale(300),alignSelf:'center'}}>
      <TouchableOpacity style={styles.arrow}>
           <FontAwesome name='angle-left' size={scale(20)} color='#684428'/>
          </TouchableOpacity>
      </ImageBackground>
      </View>
      <View style={styles.text}> 
      <Text style={{fontSize:scale(18),fontWeight:'500',color:'#7A441A'}}>Dr.Ahmed Ali</Text>
      <Text style={{fontSize:scale(14),color:colors.textsin}}>200 L.E</Text>
       </View>
       <View style={{paddingHorizontal:scale(20),marginTop:scale(5)}}>
       <Text style={{fontSize:scale(14),color:'#AE7D59'}}>Dematologist</Text>
       </View>
        
        <View style={styles.text}>
          <View style={styles.viewBox}>
            <View style={styles.box}>
               <Image source={require('../../../assets/examination(1).png')} resizeMode='contain' style={{width:scale(30),height:scale(50),alignSelf:'center'}}/>
            </View>
            <Text style={{fontSize:scale(13),color:'#AE7D59'}}>1000+</Text>
            <Text style={{fontSize:scale(13),color:'#AE7D59'}}>Patients</Text>
          </View>

          <View style={styles.viewBox}>
            <View style={styles.box}>
               <Image source={require('../../../assets/award(1).png')} resizeMode='contain' style={{width:scale(30),height:scale(50),alignSelf:'center'}}/>
            </View>
            <Text style={{fontSize:scale(13),color:'#AE7D59'}}>10 yrs</Text>
            <Text style={{fontSize:scale(13),color:'#AE7D59'}}>Experience</Text>
          </View>

          <View style={styles.viewBox}>
            <View style={styles.box}>
               <Image source={require('../../../assets/star(1).png')} resizeMode='contain' style={{width:scale(30),height:scale(50),alignSelf:'center'}}/>
            </View>
            <Text style={{fontSize:scale(13),color:'#AE7D59'}}>4.5</Text>
            <Text style={{fontSize:scale(13),color:'#AE7D59'}}>Rating</Text>
          </View>
        </View>
        <View style={{width:'97%',paddingHorizontal:scale(18),marginTop:scale(25)}}>
       <Text style={{fontSize:scale(18),color:'#8D5524E2',fontWeight:'500'}}>About</Text>
       <Text style={{fontSize:scale(14),color:colors.text,paddingHorizontal:scale(5),marginTop:scale(5)}}>Dematologist, He has achieved several awarda and recognition for is  contribution and service in his own field.</Text>
       </View>
       <View style={{width:'97%',paddingHorizontal:scale(18),marginTop:scale(25)}}>
       <Text style={{fontSize:scale(18),color:'#8D5524E2',fontWeight:'500'}}>Location</Text>
       <Text style={{fontSize:scale(14),color:colors.text,paddingHorizontal:scale(5),marginTop:scale(5)}}>Said ST. Tanta</Text>
       </View>
       <View style={{width:'100%',alignItems:'center',marginTop:scale(10)}}>
       <Image source={require('../../../assets/thumbnail.jpeg')} resizeMode='cover' style={{width:'85%',height:scale(150)}}/>
       </View>

       <View style={styles.reviews}>
      <Text style={{fontSize:scale(18),fontWeight:'500',color:'#8D5524E2'}}>Reviews</Text>
       <TouchableOpacity> 
         <Text style={{fontSize:scale(14),color:colors.textsin}}>Add review</Text>
      </TouchableOpacity>
     </View>

         <ScrollView horizontal={true}>
                  
     <View style={styles.scrolView}>
     {arr.map((review,index)=>( 
     <View style={styles.reviewBox}>
      <View style={styles.photo}>
       <Image source={review.img} resizeMode='cover' style={{width:scale(50),height:scale(50), borderRadius:scale(25) }}/>
       <Text style={{fontSize:scale(16),color:colors.splach}}>{review.name}</Text>
      </View>
      <Text style={{fontSize:scale(12),color:colors.splach,paddingHorizontal:scale(5),textAlign:'center',marginTop:scale(7)}}>{review.text}</Text>
      <Image source={review.rate} resizeMode='cover' style={{width:scale(90),height:scale(30)}} />
   
      </View>
    
   ))}
   </View>
  </ScrollView>

        <TouchableOpacity style={styles.button}>
          <Text style={{fontSize:18,color:'#FFFFFF'}}>Book appointment</Text>
        </TouchableOpacity>
    
     <View style={{marginTop:'30%'}}></View>
      </ScrollView>
)}
const styles = StyleSheet.create({
  header :{
    width:'100%',
  },
  arrow: {
        width:scale(30),
        height:scale(30),
        borderRadius:scale(15),
        backgroundColor:colors.backgr,
        alignItems:'center',
        justifyContent:'center',
        marginVertical:scale(20),
        marginHorizontal:scale(25),
        shadowColor: colors.notAct,
         shadowOpacity: scale(0.9),
        elevation: scale(6),
        borderRadius: scale(15),
         shadowRadius: scale(8),
         shadowOffset: { width: scale(56), height: scale(13) },
           
      },
      text:{
        width:'97%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:scale(18),
        marginTop:scale(10)
      },
      viewBox: {
        width:scale(85),
        height:scale(90),
        borderRadius:scale(10),
        alignItems:'center',
        backgroundColor:colors.backgr,
        marginTop:scale(15),
        shadowColor: colors.notAct,
        shadowOpacity: scale(0.9),
       elevation: scale(6),
       borderRadius: scale(8),
        shadowRadius: scale(8),
        shadowOffset: { width: scale(56), height: scale(13) },
      },
      box:{
        width:scale(45),
        height:scale(50),
        borderBottomLeftRadius:scale(10),
        borderBottomRightRadius:scale(10),
        backgroundColor:colors.splach,
        alignItems:'center',
        justifyContent:'center'
      },
        reviews:{
    width:'88%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:scale(20),
    alignSelf:'center',
    
  },
    scrolView:{
    width:'100%',
    height:scale(200),
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:scale(12),
    marginTop:scale(8),
  },
  reviewBox: {
    width:scale(150),
    height:scale(160),
    alignItems:'center',
    backgroundColor:colors.backgr,
    borderRadius:scale(10),
    paddingVertical:scale(10),
    paddingHorizontal:scale(12),
    marginRight:scale(20),
      shadowColor:colors.notAct,
      shadowOpacity: scale(0.9),
      elevation: scale(6),
      borderRadius: scale(10),
      shadowRadius: scale(5),
      shadowOffset: { width: scale(56), height: scale(13) },

  },
  photo:{
    width:'97%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  
  },
        button:{
        width:'88%',
        height:scale(50),
        borderRadius:scale(10),
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        backgroundColor:colors.splach,
        marginTop:scale(35)

      },
})