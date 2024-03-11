import {  TextInput,  } from 'react-native'
import React from 'react'

export default function Input({placeholder,styleInput ,value,color,keyboard,secure}) {
  return (
<TextInput placeholder={placeholder} placeholderTextColor={color} style={styleInput} onChangeText={value}
keyboardType={keyboard}
secureTextEntry={secure}
/>
  )
}
