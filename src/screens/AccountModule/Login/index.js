import { ImageBackground, StyleSheet, TouchableOpacity, View, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import Form from './Form'
export default function Login({ navigation }) {

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent} keyboardShouldPersistTaps="handled">
<Form/>
    </ScrollView>
  )
}
