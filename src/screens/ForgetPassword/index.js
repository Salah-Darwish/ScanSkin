import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Styles from './styles'
import Customtext from '../../component/text'
import ImageCustom from '../../component/ImageCustom'
import { scale } from 'react-native-size-matters'
import Input from '../../component/Input'
import useInput from '../../utls/useInput'
import { colors } from '../../utls/colors'
import CustomButton from '../../component/CustomButton'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { verticalScale } from 'react-native-size-matters'
export default function ForgetPassword({navigation}) {
   const [email,changeEmail]=useInput({initialInput:'',rules:[{Key:'isEmail'}]});
const dohandler=()=>{
  navigation.navigate('ConfirmatioCodePassword')
}
  return (
    <View style={Styles.containerView}>
      <KeyboardAwareScrollView
       extraHeight={verticalScale(35)}
        enableOnAndroid
        >
          <View style={Styles.container}>
     <Customtext text={"Forget Password"} styleText={Styles.text}/>
     <ImageCustom src={require('../../assets/ForgotPassword.png')} styleImage={Styles.img}/>
     <Customtext styleText={[Styles.text,{fontSize:scale(20)}]} text={"\t\t\t\t\t\t\t\t\tEnter your email \n to send the verification code"}/>
      <Input placeholder={"E-mail"} color={colors.text} styleInput={[Styles.input, { marginTop: verticalScale(20) }]} keyboard={"email-address"} value={changeEmail} />
         <CustomButton text={'Send'} styletext={[Styles.subtext, { marginTop: 0 }]} styleButton={[Styles.styleButton,]}
        OnPress={dohandler}
          />
      </View>
  </KeyboardAwareScrollView>
   </View>
  )
}
