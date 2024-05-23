import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import Styles from '../styles'
import ImageCustom from '../../../../component/ImageCustom'
import  Customtext from '../../../../component/text'
import CustomButton from '../../../../component/CustomButton'
import Input from '../../../../component/Input'
import { Forgetpassword } from '../../../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../../../../utls/colors'
import { scale,verticalScale } from 'react-native-size-matters'
import { ForgetPaasword_initial_values } from '../../../../Formik/initialValues'
import { ForgetPasswordSchema } from '../../../../Formik/schema'
import { useUpadateEffect } from '../../../../utls/useUpdateEffect'
export default function Form() {
    const dispatch=useDispatch()
    const isLoading=useSelector(state=>state.auth.isForgetpassword)
    const success=useSelector(state=>state.auth.ForgetpasswordSuccess)
  const navigation=useNavigation()
  useUpadateEffect(()=>{
     navigation.navigate('ConfirmatioCodePassword');
  },[success])
  return (
 <Formik
      initialValues={ForgetPaasword_initial_values}
      validateOnMount={true}
      validationSchema={ForgetPasswordSchema}
  onSubmit={async (values) => {
         dispatch(
          Forgetpassword(
            values.email,
          )
        );
      
      }}>
      {({handleChange,handleBlur,handleSubmit,values,touched,errors}) => (
    <View style={Styles.container}>
     <Customtext text={"Forget Password"} styleText={Styles.text}/>
     <ImageCustom src={require('../../../../assets/ForgotPassword.png')} styleImage={Styles.img}/>
     <Customtext styleText={[Styles.text,{fontSize:scale(20)}]} text={"\t\t\t\t\t\t\t\t\tEnter your email \n to send the verification code"}/>
      <Input placeholder={"E-mail"} color={colors.text} styleInput={[Styles.input, { marginTop: verticalScale(20) }]} keyboard={"email-address"} 
      value={values.email}
          onChangeText={handleChange('email')}
      handleblur={handleBlur('email')}
      />
           {(errors.email&&touched.email) &&
      <Customtext text={errors.email} styleTextCustom={styles.error}/>}

         <CustomButton text={'Send'} styletext={[Styles.subtext, { marginTop: 0 }]} styleButton={[Styles.styleButton,]}
        OnPress={handleSubmit}
        isLoading={isLoading}
          />
      </View>
      )}
      </Formik>
  )
}

