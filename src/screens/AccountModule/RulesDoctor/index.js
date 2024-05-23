import { View, Text,ImageBackground, Alert,Modal } from 'react-native'
import React from 'react'
import styles from './styles'
import Form from './Components/Form'
export default function RulesDoctor({navigation}) {
 

  return (
     <ImageBackground source={require('../../../assets/background.jpg')} style={styles.imageContainer}>

   <Form/>    
    </ImageBackground>
  )

}