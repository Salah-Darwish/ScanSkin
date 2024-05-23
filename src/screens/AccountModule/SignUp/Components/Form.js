import { StyleSheet, Text, View } from 'react-native'
import React ,{useState}from 'react'
import { Formik } from 'formik'
import Input from '../../../../component/Input'
import CustomButton from '../../../../component/CustomButton'
import Customtext from '../../../../component/text'
import { regist_initial_values } from '../../../../Formik/initialValues'
import { RegistSchema } from '../../../../Formik/schema'
import { signUp } from '../../../../redux/actions'
import styles from '../styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch,useSelector } from 'react-redux'
import { useUpadateEffect } from '../../../../utls/useUpdateEffect'
import { useNavigation } from '@react-navigation/native'
import { shOWError } from '../../../../utls/helperFunction'
import { colors } from '../../../../utls/colors'
import {verticalScale } from 'react-native-size-matters'
import StylesGloba from '../../../../Styles/Styles'
export default function Form() {
    const dispatch =useDispatch()
      const isLoading=useSelector(state=>state.auth.isSigningUp); 
 const success=useSelector(state=>state.auth.SignUpSuccess)
 const failure=useSelector(state=>state.auth.SignUpFailure)
 const navigation=useNavigation()
  const [eye, setEye] = useState(true);
  const [eye2, setEye2] = useState(true);

  const toggleEye = () => {
    setEye((prevState) => !prevState); 
  };

  const toggleEye2 = () => {
    setEye2((prevState) => !prevState);
  };

  useUpadateEffect(()=>{
       navigation.replace('ConfirmationCode');
  },[success])
 useUpadateEffect(()=>{
shOWError('Sing up failure')
 },[failure])
  return (
  <Formik
      initialValues={regist_initial_values}
      validateOnMount={true}
      validationSchema={RegistSchema}
  onSubmit={async (values) => {
        // Dispatch sign-up action
         dispatch(
          signUp(
            values.displayName,
            values.email,
            values.phoneNumber,
            values.password,
            values.confirmPassword
          )
        );
      }}>
      {({handleChange,handleBlur,handleSubmit,values,touched,errors}) => (

         <><View style={styles.container}>
                  <Input placeholder={"display Name"} color={colors.text} styleInput={styles.input} keyboard={"default"} value={values.displayName} 
                  onChangeText={handleChange('displayName')}
                handleblur={handleBlur('displayName')}
                  />
                   {(errors.displayName&&touched.displayName) &&
      <Customtext text={errors.displayName} styleTextCustom={styles.error}/>}
                  <Input placeholder={"E-mail"} color={colors.text} styleInput={[styles.input, { marginTop: verticalScale(20) }]} keyboard={"email-address"} value={values.email}
                  onChangeText={handleChange('email')}
                handleblur={handleBlur('email')}
                   />
                    {(errors.email&&touched.email) &&
      <Customtext text={errors.email} styleTextCustom={styles.error}/>}
                  <Input placeholder={"Phone"} color={colors.text} styleInput={[styles.input, { marginTop: verticalScale(20) }]} keyboard={"numeric"}
                  onChangeText={handleChange('phoneNumber')}
                  value={values.phoneNumber}
                handleblur={handleBlur('phoneNumber')}
              />
               {(errors.phoneNumber&&touched.phoneNumber) &&
      <Customtext text={errors.phoneNumber} styleTextCustom={styles.phoneNumber}/>}



                  <Input placeholder={"Password"} color={colors.text} styleInput={[styles.input, { marginTop: verticalScale(20) }]} keyboard={"default"}
                  value={values.password}
                  onChangeText={handleChange('password')}
                handleblur={handleBlur('password')}
                isIcon
     name={eye?'eye':'eye-slash'}
    styleTouchIcon={StylesGloba.Touchicon}
    OnPress={toggleEye}
    secure={eye}
                  />
                   {(errors.password&&touched.password) &&
      <Customtext text={errors.password} styleTextCustom={styles.error}/>}
                  <Input placeholder={"Confirm Password"} color={colors.text} styleInput={[styles.input, { marginTop: verticalScale(20) }]} keyboard={"default"}
                      value={values.confirmPassword} 
                      onChangeText={handleChange('confirmPassword')}
                      handleblur={handleBlur('confirmPassword')}
            isIcon
     name={eye2?'eye':'eye-slash'}
    styleTouchIcon={StylesGloba.Touchicon}
    OnPress={toggleEye2}
    secure={eye2}
                      />
                       {(errors.confirmPassword&&touched.confirmPassword) &&
      <Customtext text={errors.confirmPassword} styleTextCustom={styles.error}/>}









              </View><View style={[styles.container, { marginTop: verticalScale(20) }]}>
                      <CustomButton text={'Continue'} styletext={[styles.subtext, { marginTop: 0 }]} styleButton={[styles.styleButton,]}
                          OnPress={handleSubmit}
                          isLoading={isLoading} />
                  </View><View style={[styles.ImageContainer, { marginTop: verticalScale(35), justifyContent: "center" }]}>
                      <Customtext text={"Already have an account?"} styleText={[styles.subtext, { color: colors.text, marginTop: verticalScale(0) }]} />
                      <CustomButton
                          text={"log in"}
                          styletext={[styles.subtext, { color: colors.textsin, marginTop: 0, fontWeight: "bold" }]}
                          OnPress={() => {
                          navigation.navigate("Login")
                          } } />
                  </View></>
      )}
      </Formik>
  )
}

