import {  ActivityIndicator, TouchableOpacity } from 'react-native'
import React from 'react'
import Customtext from './text'

export default function CustomButton(props) {
  const {
    text,
    styletext,
    OnPress, 
    styleButton, 
    isLoading
  } =props; 
  return (
   <TouchableOpacity onPress={OnPress} style={styleButton}>
    {isLoading? <ActivityIndicator/> : 
    <Customtext text={text} styleText={styletext}/>
}
   </TouchableOpacity>
  )
}