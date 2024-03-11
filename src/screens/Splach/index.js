import { StyleSheet, Text, View, ActivityIndicator} from 'react-native'
import React,{useEffect} from 'react'
import {colors} from '../../utls/colors';
import { VerticalScale, verticalScale } from 'react-native-size-matters'

export default function SplachScreen({navigation}) {
    
  useEffect(() => {
        let x = 0
        setTimeout(() => {
            navigation.replace('Slider')
        }, 1500);
    })
  return (
    <View style={{
        backgroundColor:colors.splach, 
        flex:1 ,
        alignItems:'center', 
        justifyContent:'center', 
    }}>
 <ActivityIndicator color='#fff' size={50} style={{
                    position:'absolute',
          bottom:verticalScale(80)
                }} />
    </View>
  )
}

const styles = StyleSheet.create({})