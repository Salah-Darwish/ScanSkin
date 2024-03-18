import {  ImageBackground, View } from 'react-native'
import Customtext from '../../component/text'
import Input from '../../component/Input'
import styles from './styles'
import { colors } from '../../utls/colors'
import { verticalScale } from 'react-native-size-matters'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import CustomButton from '../../component/CustomButton'
import useInput from '../../utls/useInput'
import { useDispatch, useSelector } from 'react-redux'
import { signUp } from '../../redux/actions'
import { useUpadateEffect } from '../../utls/useUpdateEffect'
import { shOWError } from '../../utls/helperFunction'
export default function SignUp({navigation}) {
const [displayName,changeDisplayNmae]=useInput({initialInput:'',rules:[{Key:'Name'}]});  
 const [email,changeEmail]=useInput({initialInput:'',rules:[{Key:'isEmail'}]}); 
 const [phoneNumber,changePhoneNumber]=useInput({initialInput:'',rules:[{Key:'Phone'}]}); 
 const [password,changePassword]=useInput({initialInput:'',rules:[{Key:'isPassword'}]}); 
 const [confirmPassword,changeConfirmPassword]=useInput({initialInput:'',rules:[{Key:'isPassword'}]}); 
 const isLoading=useSelector(state=>state.auth.isSigningUp); 
 const success=useSelector(state=>state.auth.SignUpSuccess)
 const failure=useSelector(state=>state.auth.SignUpFailure)
const dispatch=useDispatch(); 
useUpadateEffect(()=>{
navigation.navigate('Login');
},[success])
useUpadateEffect(()=>{
shOWError('SignUp Failed')
},[failure])
const doneHandler=()=>{
  if(displayName.isValid && email.isValid&&phoneNumber.isValid&&password.isValid&&confirmPassword.isValid){
    console.log("display name "+ displayName.value+" email "+email.value);
dispatch(signUp(displayName.value,email.value,phoneNumber.value,password.value,confirmPassword.value));
  }
}; 
  return (
    <ImageBackground source={require('../../assets/background.jpg')} style={styles.imageContainer}>
      <View style={styles.container}>
        <Customtext text={"Sign up"} styleText={styles.text} />
        <Customtext text={'Create your new account'} styleText={styles.subtext} />
      </View>
      <KeyboardAwareScrollView
       extraHeight={verticalScale(35)}
        enableOnAndroid>
          <View style={styles.container}>
            <Input placeholder={"display Name"} color={colors.text} styleInput={styles.input} keyboard={"default"} value={changeDisplayNmae}/>
            <Input placeholder={"E-mail"} color={colors.text} styleInput={[styles.input, { marginTop: verticalScale(20) }]} keyboard={"email-address"} value={changeEmail} />
            <Input placeholder={"Phone"} color={colors.text} styleInput={[styles.input, { marginTop: verticalScale(20) }]} keyboard={"numeric"} 
            value={changePhoneNumber}
            />
            <Input placeholder={"Password"} color={colors.text} styleInput={[styles.input, { marginTop: verticalScale(20) }]}  keyboard={"default"}
            value={changePassword}
            />
                  <Input placeholder={"Confirm Password"} color={colors.text} styleInput={[styles.input, { marginTop: verticalScale(20) }]}  keyboard={"default"}
            value={changeConfirmPassword}
            />
          </View>
        <View style={[styles.container,{marginTop:verticalScale(20)}]}>
          <CustomButton text={'Continue'} styletext={[styles.subtext, { marginTop: 0 }]} styleButton={[styles.styleButton,]}
           OnPress={doneHandler}
          isLoading={isLoading}
          />
        </View>
           <View style={[styles.ImageContainer, { marginTop: verticalScale(35), justifyContent: "center" }]}>
          <Customtext text={"Already have an account?"} styleText={[styles.subtext, { color: colors.text, marginTop: verticalScale(0) }]} />
          <CustomButton
            text={"log in"}
            styletext={[styles.subtext, { color: colors.textsin, marginTop: 0, fontWeight: "bold" }]}
        OnPress={() => {
              navigation.navigate("Login")
            }}
          />
        </View>
     </KeyboardAwareScrollView>
         
    </ImageBackground>
  )
}
