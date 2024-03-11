import { StyleSheet ,Image} from 'react-native'
import React from 'react'

export default function ImageCustom({src,styleImage}) {
  return (
    <Image source={src} style={styleImage} />
  )
}