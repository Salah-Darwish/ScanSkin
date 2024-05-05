import {  ImageBackground, View } from 'react-native'
import Customtext from '../../component/text'
import Input from '../../component/Input'
import styles from './Styles'
import { colors } from '../../utls/colors'
import { scale, verticalScale } from 'react-native-size-matters'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import CustomButton from '../../component/CustomButton'
import useInput from '../../utls/useInput'
import { useDispatch, useSelector } from 'react-redux'
import { signUp } from '../../redux/actions'
import { useUpadateEffect } from '../../utls/useUpdateEffect'
import { shOWError } from '../../utls/helperFunction'
export default function ResetPassword({navigation}) {
 const [password,changePassword]=useInput({initialInput:'',rules:[{Key:'isPassword'}]}); 
 const [confirmPassword,changeConfirmPassword]=useInput({initialInput:'',rules:[{Key:'isPassword'}]}); 

  return (
    <ImageBackground source={require('../../assets/background.jpg')} style={styles.imageContainer}>
      <View style={styles.container}>
        <Customtext text={"Reset Password"} styleText={styles.text} />
      </View>
      <KeyboardAwareScrollView
       extraHeight={verticalScale(35)}
        enableOnAndroid>
          <View style={styles.container}>
          <Customtext text={"Your new password must be different\nfrom the password you used\npreviously"}
           styleText={[styles.text,{ fontSize:scale(17),color:colors.text,marginTop:verticalScale(170) }]}/>
            <Input placeholder={"Password"} color={colors.text} styleInput={[styles.input, { marginTop: verticalScale(80) }]}  keyboard={"default"}
            value={changePassword}
            />
                  <Input placeholder={"Confirm Password"} color={colors.text} styleInput={[styles.input, { marginTop: verticalScale(30) }]}  keyboard={"default"}
            value={changeConfirmPassword}
            />
          </View>
        <View style={[styles.container,{marginTop:verticalScale(20)}]}>
          <CustomButton text={'Save'} styletext={[styles.subtext, { marginTop: 0 }]} styleButton={[styles.styleButton,{marginTop:verticalScale(80)}]}
         
          />
        </View>
     
     </KeyboardAwareScrollView>
         
    </ImageBackground>
  )
}
