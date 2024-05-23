import { StyleSheet, Text, View, ActivityIndicator,ImageBackground} from 'react-native'
import React,{useEffect} from 'react'
import {colors} from '../../../utls/colors';
import { VerticalScale, verticalScale } from 'react-native-size-matters'
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function SplachScreen({navigation}) {
    
useEffect(() => {
  checkFirstInstall();
}, []);

 const checkFirstInstall = async () => {
  try {
    const isFirstInstall = await AsyncStorage.getItem('firstInstall');
    if (isFirstInstall === null) {
      // First install, navigate to onboarding screen
      navigation.replace('Slider');
      await AsyncStorage.setItem('firstInstall', 'false'); // Set flag to indicate not the first install
    } else {
      // Not the first install, navigate to login screen
      navigation.replace('Login');
    }
  } catch (error) {
    console.error('Error checking first install:', error);
    // Handle error, maybe navigate to a default screen
  }
};

  return (
    <ImageBackground source={require('../../../assets/Logo.jpeg')}
     style={{
        backgroundColor:colors.splach, 
        flex:1 ,
        alignItems:'center', 
        justifyContent:'center', 
    
    }}>
 <ActivityIndicator color={colors.text} size={50} style={{
                    position:'absolute',
          bottom:verticalScale(80)
                }} />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({})