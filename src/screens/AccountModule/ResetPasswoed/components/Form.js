import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import { Formik } from 'formik'
import { useUpadateEffect } from '../../../../utls/useUpdateEffect'
import styles from '../Styles'
import CustomButton from '../../../../component/CustomButton'
import Customtext from '../../../../component/text'
import Input from '../../../../component/Input'
import { Reser_Password } from '../../../../Formik/initialValues'
import { ResetPasswordSchema } from '../../../../Formik/schema'
import StylesGloba from '../../../../Styles/Styles'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { Resetpassword } from '../../../../redux/actions'
import { scale,verticalScale } from 'react-native-size-matters'
import { colors } from '../../../../utls/colors'
 export default function Form() {
    const isLoading=useSelector(state=>state.auth.isResetpassword); 
 const success=useSelector(state=>state.auth.ResetpasswordSuccess)
  const dispatch=useDispatch()
  const navigation=useNavigation()
  useUpadateEffect(()=>{
navigation.navigate('Login');
},[success])
  return (
  <Formik
      initialValues={Reser_Password}
      validateOnMount={true}
      validationSchema={ResetPasswordSchema}
  onSubmit={async (values) => {
         dispatch(
        Resetpassword(values.newPassword,values.confirmPassword)
        );
      }}>
      {({handleChange,handleBlur,handleSubmit,values,touched,errors}) => (

      <><View style={styles.container}>
          <Customtext text={"Your new password must be different\nfrom the password you used\npreviously"}
            styleText={[styles.text, { fontSize: scale(17), color: colors.text, marginTop: verticalScale(170) }]}
            />
          <Input placeholder={"Password"} color={colors.text} styleInput={[styles.input, { marginTop: verticalScale(80) }]} keyboard={"default"}
            value={values.newPassword}
          onChangeText={handleChange('newPassword')}
          handleblur={handleBlur('newPassword')}
    secure={true}
            />
              {(errors.newPassword&&touched.newPassword) &&
      <Customtext text={errors.newPassword} styleTextCustom={styles.newPassword}/>}
          <Input placeholder={"Confirm Password"} color={colors.text} styleInput={[styles.input, { marginTop: verticalScale(30) }]} keyboard={"default"}
            value={values.confirmPassword}
            onChangeText={handleChange('confirmPassword')}
            handleBlur={handleBlur('confirmPassword')}
        
          secure={true }
            
            />
              {(errors.confirmPassword&&touched.confirmPassword) &&
      <Customtext text={errors.confirmPassword} styleTextCustom={styles.error}/>}
        </View><View style={[styles.container, { marginTop: verticalScale(20) }]}>
            <CustomButton text={'Save'} styletext={[styles.subtext, { marginTop: 0 }]} styleButton={[styles.styleButton, { marginTop: verticalScale(80) }]}
              isLoading={isLoading}
              OnPress={handleSubmit} 
              
              
              />
          </View></>


      )}
      </Formik>
  )
}

