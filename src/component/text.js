import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Customtext({text,styleText}) {
  return (
    <View>
      <Text style={styleText}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})