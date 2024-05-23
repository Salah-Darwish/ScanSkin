import { StyleSheet, Text, View,ImageBackground,TouchableOpacity } from 'react-native'
import styles from './styles'
import StylesGloba from '../../../Styles/Styles'
import { scale,verticalScale } from 'react-native-size-matters'
import React, { useState } from 'react'
import Input from '../../../component/Input'
import Customtext from '../../../component/text'
import { colors } from '../../../utls/colors'
import { useSelector } from 'react-redux'   
import CustomButton from '../../../component/CustomButton'
import ImageCustom from '../../../component/ImageCustom'
import { Formik } from 'formik'
import { login_initial_values } from '../../../Formik/initialValues'
import { LoginSchema } from '../../../Formik/schema'
import { useDispatch } from 'react-redux'
import { useUpadateEffect } from '../../../utls/useUpdateEffect'
import { useNavigation } from '@react-navigation/native'
import { shOWError } from '../../../utls/helperFunction'
import { LoginIn } from '../../../redux/actions'
export default function Form() {
const dispatch= useDispatch()
const navigation=useNavigation()
 const isLoading=useSelector(state=>state.auth.isLogin); 
 const success=useSelector(state=>state.auth.LoginSuccess)
 const failure=useSelector(state=>state.auth.LoginFailure)
 const [IconEye,setIconEye]=useState(true)
useUpadateEffect(()=>{
  navigation.navigate('HomeScreen');
},[success])
useUpadateEffect(()=>{
shOWError('Login failure')
},[failure])

  const toggleEye = () => {
    setIconEye((prevState) => !prevState); 
  };
  return (
    <Formik
      initialValues={login_initial_values}
      validateOnMount={true}
      validationSchema={LoginSchema}
  onSubmit={async (values) => {
        // Dispatch sign-up action
         dispatch(
          LoginIn(
            values.email,
            values.password,
          )
        );
      }}>
      {({handleChange,handleBlur,handleSubmit,values,touched,errors}) => (
    <View>
         <ImageBackground source={require('../../../assets/background.jpg')} style={styles.imageContainer}>
        <View style={styles.container}>
          <Customtext text={"Welcome Back!"} styleText={styles.text} />
          <Customtext text={'Login to your account'} styleText={styles.subtext} />
        </View>
        <View style={styles.container}>
          <Input placeholder={"E-mail"} color={colors.text} styleInput={styles.input} keyboard={"email-address"} value={values.email}
          onChangeText={handleChange('email')}
      handleblur={handleBlur('email')}
    
          />
          
     {(errors.email&&touched.email) &&
      <Customtext text={errors.email} styleTextCustom={styles.error}/>}

          <Input placeholder={"Password"} color={colors.text} styleInput={[styles.input, { marginTop: verticalScale(20) }]} secure={IconEye} keyboard={"default"} 
          value={values.password} 
          onChangeText={handleChange('password')}
      handleblur={handleBlur('password')}
        isIcon
      name={IconEye?'eye':'eye-slash'}
      styleTouchIcon={StylesGloba.Touchicon}
      OnPress={toggleEye}
          />
               {(errors.password&&touched.password) &&
      <Customtext text={errors.password} styleTextCustom={styles.error}/>}
        </View>
        <View style={styles.Subcontainer}>
          <TouchableOpacity style={styles.touchstyle}></TouchableOpacity>
          <Customtext text={'Remmember me'} styleText={[styles.subtext, { color: colors.text, fontSize: scale(13), marginTop: 0 }]} />
          <CustomButton
            text={'Forget your Password?'}
            styletext={[styles.subtext, { color: colors.textsin, marginTop: 0, fontWeight: "bold" }]}
            OnPress={() => {
              navigation.navigate("ForgetPassword")
            }}
          />
        </View>
        <View style={styles.containetBut}>
          <Customtext text={"_____________________ OR_____________________"} styleText={[styles.subtext, { color: colors.text, fontSize: scale(15) }]} />
        </View>
        <View style={styles.ImageContainer}>
          <TouchableOpacity style={styles.touchimgstyle}>
            <ImageCustom src={require('../../../assets/google.png')} styleImage={styles.ImageStyle} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchimgstyle}>
            <ImageCustom src={require('../../../assets/facebook.png')} styleImage={styles.ImageStyle} />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <CustomButton text={'Continue'} styletext={[styles.subtext, { marginTop: 0 }]} styleButton={styles.styleButton} 
        OnPress={handleSubmit}
        isLoading={isLoading}
          />
        </View >
        <View style={[styles.ImageContainer, { marginTop: verticalScale(15), justifyContent: "center" }]}>
          <Customtext text={"Don't have an account?"} styleText={[styles.subtext, { color: colors.text, marginTop: verticalScale(0) }]} />
          <CustomButton
            text={"Sign up"}
            styletext={[styles.subtext, { color: colors.textsin, marginTop: 0, fontWeight: "bold" }]}
        OnPress={() => {
              navigation.navigate("SignUp")     
            }}
          />
        </View>
      </ImageBackground>
    </View>
      )}
      </Formik>
  )
}
