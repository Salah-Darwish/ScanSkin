import { ImageBackground, StyleSheet, TouchableOpacity, View, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import Customtext from '../../component/text'
import Input from '../../component/Input'
import { colors } from '../../utls/colors'
import { scale, verticalScale } from 'react-native-size-matters'
import ImageCustom from '../../component/ImageCustom'
import CustomButton from '../../component/CustomButton'
import useInput from '../../utls/useInput'
import { LoginIn } from '../../redux/actions'
import {  useDispatch, useSelector } from 'react-redux'
import { useUpadateEffect } from '../../utls/useUpdateEffect'
import { shOWError } from '../../utls/helperFunction'
export default function Login({ navigation }) {
  const [input,changeInput]=useInput({initialInput:'',rules:[{Key:'isEmail'}]}); 
 const [inputPassw,changeInputPass]=useInput({initialInput:'',rules:[{Key:'isPassword'}]}); 
 const [isvalidemi,setisvalid]=useState(true)
 const [isvalidpass,setisvalidpass]=useState(true)
const dispatch =useDispatch(); 
const isLoading=useSelector(state=>state.auth.isLogin); 
const failure=useSelector(state=>state.auth.LoginFailure); 

useUpadateEffect(()=>{
  shOWError('LoginIn failure')
},[failure]); 
 const ContinueHandler=()=>{
  if(!input.isValid){
    setisvalid(false)
  }
  else{
    setisvalid(true)
  }
  if(!inputPassw.isValid){
    setisvalidpass(false)
  }
   else{
    setisvalidpass(true)
  }
  if(!input.isValid || !inputPassw.isValid){
    return false ; 
  }
  else{
dispatch(LoginIn(input.value,inputPassw.value,true))
  }
 }
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent} keyboardShouldPersistTaps="handled">
      <ImageBackground source={require('../../assets/background.jpg')} style={styles.imageContainer}>
        <View style={styles.container}>
          <Customtext text={"Welcome Back!"} styleText={styles.text} />
          <Customtext text={'Login to your account'} styleText={styles.subtext} />
        </View>
        <View style={styles.container}>
          <Input placeholder={"E-mail"} color={colors.text} styleInput={styles.input} keyboard={"email-address"} value={changeInput}
          />
          
          { !isvalidemi?<Customtext text={ "Please Enter valid E-mail"} styleText={
            [styles.subtext,{color:colors.error,fontSize:scale(10),position:'absolute',
            marginTop:verticalScale(3), marginLeft:scale(45),fontWeight:'bold'}
            
            ]} />:null}

          <Input placeholder={"Password"} color={colors.text} styleInput={[styles.input, { marginTop: verticalScale(20) }]} secure={true} keyboard={"default"} 
          value={changeInputPass} 
          />
            { !isvalidpass?<Customtext text={ "Please Enter valid Password"} styleText={
            [styles.subtext,{color:colors.error,fontSize:scale(10),position:'absolute',
            marginTop:verticalScale(3), marginLeft:scale(30),fontWeight:'bold'}
            
            ]} />:null}

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
            <ImageCustom src={require('../../assets/google.png')} styleImage={styles.ImageStyle} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchimgstyle}>
            <ImageCustom src={require('../../assets/facebook.png')} styleImage={styles.ImageStyle} />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <CustomButton text={'Continue'} styletext={[styles.subtext, { marginTop: 0 }]} styleButton={styles.styleButton} 
        OnPress={ContinueHandler}
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
    </ScrollView>
  )
}
