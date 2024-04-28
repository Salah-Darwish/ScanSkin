import {  ActivityIndicator, TouchableOpacity } from 'react-native'
import React from 'react'
import Customtext from './text'
import ImageCustom from './ImageCustom';

export default function CustomButton(props) {
  const {
    text,
    styletext,
    OnPress, 
    styleButton, 
    isLoading,
    isImage, 
    src, 
StyleImage
  } =props; 
  return (
   <TouchableOpacity onPress={OnPress} style={styleButton}>
    {isLoading? <ActivityIndicator/> : 
    <Customtext text={text} styleText={styletext}/>
}
{isImage?<ImageCustom src={src} styleImage={StyleImage}/>:null}
   </TouchableOpacity>
  )
}