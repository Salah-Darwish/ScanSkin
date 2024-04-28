import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '../../component/CustomButton'
import MyStyles from './styles'
import {useDispatch,useSelector } from 'react-redux'
import {LogOut} from '../../redux/actions'
export default function AccountScreen() {
  const dispatch =useDispatch(); 
  const SignOut=()=>dispatch(LogOut());
  return (
    <View style={MyStyles.Container}>
   <CustomButton styleButton={MyStyles.ButtonStyle} text={"Sign Out"} styletext={MyStyles.TextStyle}
   OnPress={SignOut}
   />
    </View>
  )
}

const styles = StyleSheet.create({})