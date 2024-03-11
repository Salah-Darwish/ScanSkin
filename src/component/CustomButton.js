import {  TouchableOpacity } from 'react-native'
import React from 'react'
import Customtext from './text'

export default function CustomButton({text,styletext,OnPress,styleButton}) {
  return (
   <TouchableOpacity onPress={OnPress} style={styleButton}>
    <Customtext text={text} styleText={styletext}/>
   </TouchableOpacity>
  )
}