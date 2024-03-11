import { ImageBackground, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Customtext from '../../component/text'
import Input from '../../component/Input'
import styles from './styles'
import { colors } from '../../utls/colors'
import { verticalScale } from 'react-native-size-matters'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import CustomButton from '../../component/CustomButton'

export default function SignUp({navigation}) {
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
            <Input placeholder={"Name"} color={colors.text} styleInput={styles.input} keyboard={"default"} />
            <Input placeholder={"E-mail"} color={colors.text} styleInput={[styles.input, { marginTop: verticalScale(20) }]} keyboard={"email-address"} />
            <Input placeholder={"Phone"} color={colors.text} styleInput={[styles.input, { marginTop: verticalScale(20) }]} keyboard={"numeric"} />
            <Input placeholder={"Password"} color={colors.text} styleInput={[styles.input, { marginTop: verticalScale(20) }]} secure={true} keyboard={"default"} />
            <Input placeholder={"Confirm Password"} color={colors.text} styleInput={[styles.input, { marginTop: verticalScale(20) }]} secure={true} keyboard={"default"} />
          </View>
        <View style={[styles.container,{marginTop:verticalScale(20)}]}>
          <CustomButton text={'Continue'} styletext={[styles.subtext, { marginTop: 0 }]} styleButton={[styles.styleButton,]} />
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
