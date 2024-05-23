import {  ImageBackground, View } from 'react-native'
import Customtext from '../../../component/text'

import styles from './Styles'

import { scale, verticalScale } from 'react-native-size-matters'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Form from './components/Form' 
export default function ResetPassword({navigation}) {



  return (
    <ImageBackground source={require('../../../assets/background.jpg')} style={styles.imageContainer}>
      <View style={styles.container}>
        <Customtext text={"Reset Password"} styleText={styles.text} />
      </View>
      <KeyboardAwareScrollView
       extraHeight={verticalScale(35)}
        enableOnAndroid>
    
    <Form/>
     </KeyboardAwareScrollView>
         
    </ImageBackground>
  )
}
