import { View, Text,ImageBackground, Alert } from 'react-native'
import React,{useState} from 'react'
import Customtext from '../../../component/text'
import styles from './styles'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { scale, verticalScale } from 'react-native-size-matters'
import ImageCustom from '../../../component/ImageCustom'
import CustomTouchIcon from '../../../component/CustomTouchIcon'
import Form from './Components/Form'
export default function RulesPatient({navigation}) {


  return (
     <ImageBackground source={require('../../../assets/background.jpg')} style={styles.imageContainer}>
   <Form/>
         
    </ImageBackground>
  )

}