import {  ImageBackground, View } from 'react-native'
import Customtext from '../../../component/text'
import styles from './styles'

import { verticalScale } from 'react-native-size-matters'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Form from './Components/Form'

export default function SignUp({navigation}) {

  return (
    <ImageBackground source={require('../../../assets/background.jpg')} style={styles.imageContainer}>
      <View style={styles.container}>
        <Customtext text={"Sign up"} styleText={styles.text} />
        <Customtext text={'Create your new account'} styleText={styles.subtext} />
      </View>
      <KeyboardAwareScrollView
       extraHeight={verticalScale(35)}
        enableOnAndroid>
         <Form/>
     </KeyboardAwareScrollView>
         
    </ImageBackground>
  )
}
