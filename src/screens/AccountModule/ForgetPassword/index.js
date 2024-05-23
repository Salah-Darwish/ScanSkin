import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Styles from './styles'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { verticalScale } from 'react-native-size-matters'
import Form from './components/Form'
export default function ForgetPassword({navigation}) {


  return (
    <View style={Styles.containerView}>
      <KeyboardAwareScrollView
       extraHeight={verticalScale(35)}
        enableOnAndroid
        >
      <Form/>
  </KeyboardAwareScrollView>
   </View>
  )
}
