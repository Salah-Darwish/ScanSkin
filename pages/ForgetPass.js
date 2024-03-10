import {StyleSheet, Text, View, TextInput,TouchableOpacity,Image} from 'react-native'
import React ,{useEffect,useState,useContext} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {scale} from 'react-native-size-matters'
  const ForgetPass = ({navigation}) => {
 const [email,setEmail]=useState('')
 const [emaiError,setEmailError]=useState(false)

  const check= ()=>{
  if(isValidEmail(email)){
   setEmailError(false)
   console.log('True')
//    navigation.navigate('Verfiy_Screen');
  }else{
  setEmailError(true)
//   console.log('false')
  }
  }
    const isValidEmail = email => {
        const re =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      };
return(
    <View style={{flex:scale(1),justifyContent:'space-between',backgroundColor:'#FEFDF5',padding:scale(15),alignItems:'center'}}>
        <View style={{width:'100%',height:scale(50),flexDirection:'row',alignItems:'center',marginHorizontal:scale(15)}}>
       <TouchableOpacity style={{width:scale(30),height:scale(30),borderRadius:scale(15),backgroundColor:'#FEFDF5',alignItems:'center',justifyContent:'center', shadowColor: '#C7916D',
                            shadowOpacity: scale(0.9),
                            elevation: scale(6),
                            borderRadius: scale(30),
                            shadowRadius: scale(5),
                            shadowOffset: { width: scale(56), height:scale(13) },}}
                            
                            onPress={() => {
                              navigation.navigate('Login_Screen');
                            }}
                            >
       <Icon name='angle-left' size={20} color='#684428'/>
       </TouchableOpacity>
       <Text style={{fontSize:scale(23),fontWeight:'400',color:'#7A441A',marginHorizontal:scale(55)}}>Forget Password</Text>
      </View>
      <Image source={require('../src/assets/ForgotPassword.png')}  resizeMode='contain' style={{ width:scale(250),height:scale(350),}} />
     <View style={{width:'100%',height:scale(50),alignItems:'center',justifyContent:'center'}}>
     <Text style={{fontSize:scale(18),color:'#8D5524E2'}}>Enter your email or phone number to send the verification code </Text>
     </View>
     <TextInput style={{width:'95%',height:scale(55),borderWidth:scale(1),borderColor:'#E0C1A3',marginTop:scale(15),borderRadius:scale(10),paddingHorizontal:scale(15)}}
    placeholder='E-mail'
    placeholderTextColor={'#8D5524E2'}
    value={email}
    onChangeText={value => {
      setEmail(value);}}
    />
    <View style={{width:'100%',height:scale(50)}}>
    {emaiError==true  ? (
              <Text
                style={{
                  color: '#F00',
                  marginLeft: scale(20),
                  fontSize: scale(13),
                }}>
                Please enter valid Email
              </Text>
            ) : null}
            </View>

<TouchableOpacity style={{width:scale(200),height:scale(55),borderRadius:scale(10),marginBottom:scale(50),backgroundColor:'#C7916D',alignItems:'center',justifyContent:'center',alignSelf:'center'}}
       onPress={() => {
        check();
       }}
      >
          <Text style={{fontSize:scale(25),color:'#FFFFFF'}}>Send</Text>
        </TouchableOpacity>
      
    </View>
)

  }
  export default ForgetPass;

const styles = StyleSheet.create({});