import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'

export default function CustomTouchIcon({StyleTouch,StyleImg,OnPress,src}) {
  return (
<TouchableOpacity style={StyleTouch} onPress={OnPress}>
<Image style={StyleImg} source={src}/>
</TouchableOpacity>
  )
}