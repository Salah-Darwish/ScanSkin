import {StyleSheet, Text, View, TextInput,TouchableOpacity,Image,ImageBackground} from 'react-native'
import React ,{useEffect,useState,useContext} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {scale} from 'react-native-size-matters'
 
const ResetPass =() => {
     const [password,setPassword] = useState('')
     const [ConfirmPassword,setConfirmPassword] = useState('')
     const [show, setShow] = useState(true);
     const[errorMessage,setErrorMessage] = useState('')

     const handleConfirmPassword =() =>{
        if(password === ConfirmPassword){
            alert('password confirmed successfully!')
        }else{
            setErrorMessage('Passwords do not match. please try again. ')
        }
     }
    

return(
    <View style={{flex:1,alignItems:'center'}}>
      <ImageBackground  source={require("../src/assets/background.jpeg")}  resizeMode="cover" style={{flex:scale(1),alignItems:'center'}}>
         <View style={styles.header}>
      <View style={{width:'100%',height:scale(30),flexDirection:'row',alignItems:'center',marginHorizontal:scale(15)}}>
       <TouchableOpacity style={{width:scale(30),height:scale(30),borderRadius:scale(15),backgroundColor:'#FEFDF5',alignItems:'center',justifyContent:'center', shadowColor: '#C7916D',
                            shadowOpacity: scale(0.9),
                            elevation: scale(6),
                            borderRadius: scale(30),
                            shadowRadius: scale(5),
                            shadowOffset: { width: scale(56), height: scale(13) },}}>
       <Icon name='angle-left' size={20} color='#684428'/>
       </TouchableOpacity>
       <Text style={{fontSize:scale(25),fontWeight:'400',color:'#FFFFFF',marginHorizontal:scale(55)}}>Reset Password</Text>
      </View>
    </View>
      
   <View style={{width:'100%',height:scale(80),alignItems:'center',justifyContent:'center',paddingHorizontal:scale(20),marginTop:scale(50)}}>
     <Text style={{fontSize:19,color:'#8D5524E2'}}>Your new password must be different from the password you used previously </Text>
     </View>
   
     <View style={{width:'90%',height:scale(55),borderWidth:scale(1),borderColor:'#E0C1A3',borderRadius:scale(10),flexDirection:'row',justifyContent:'center',alignSelf:'center',marginTop:scale(60)}}>
     <TextInput style={{width:'88.5%',height:scale(55)}}
    placeholder='Password'
    placeholderTextColor={'#8D5524E2'}
    secureTextEntry={show}
    value={password}
    onChangeText={value => {
      setPassword(value);
      
    }}
    />
      <TouchableOpacity
            style={{ alignItems: 'center',
            justifyContent: 'center',
            width:scale(30)
         }}
            onPress={() => {
              setShow(!show);
            }}
            >
            <Icon
              name={show ? 'eye-slash' : 'eye'}
              size={18}
           color='#8D5524E2'
            />
          </TouchableOpacity>
</View>

           <View style={{width:'90%',height:scale(55),borderWidth:1,borderColor:'#E0C1A3',borderRadius:scale(10),flexDirection:'row',justifyContent:'center',alignSelf:'center',marginTop:scale(35)}}>
     <TextInput style={{width:'88.5%',height:scale(55)}}
    placeholder='Confirm Password'
    placeholderTextColor={'#8D5524E2'}
    secureTextEntry={show}
    value={ConfirmPassword}
    onChangeText={value => {
      setConfirmPassword(value);
   
    }}
    />
      <TouchableOpacity
            style={{ alignItems: 'center',
            justifyContent: 'center',
            width:scale(30)
         }}
            onPress={() => {
              setShow(!show);
            }}
            >
            <Icon
              name={show ? 'eye-slash' : 'eye'}
              size={18}
           color='#8D5524E2'
            />
          </TouchableOpacity>
</View>
    <View style={{width:'100%',height:scale(50),paddingHorizontal:scale(25)}}>
    {errorMessage? (<Text style={{color:'#F00',fontSize:scale(15)}}>{errorMessage}</Text>):null}
    </View>

<TouchableOpacity style={{width:scale(200),height:scale(55),borderRadius:scale(10),marginTop:scale(30),backgroundColor:'#C7916D',alignItems:'center',justifyContent:'center',alignSelf:'center'}}
       onPress={() => {
        handleConfirmPassword();
       }}
      >
          <Text style={{fontSize:scale(25),color:'#FFFFFF'}}>Submit</Text>
        </TouchableOpacity>
        </ImageBackground>
    </View>
)
}
export default ResetPass;

const styles = StyleSheet.create({
header:{width:'100%',height:scale(150),paddingVertical:scale(30),marginTop:scale(15)},

});
