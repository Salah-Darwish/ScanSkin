import {Image, StyleSheet, Text, View, Dimensions,Animated} from 'react-native';
import React,{useState,useRef, useEffect} from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { colors } from '../../utls/colors';
const {width, height} = Dimensions.get('screen');
export default function SlideItem ({item}) {

  return (
    <View style={styles.container}>
      <Image source={item.img} resizeMode="contain" style={styles.image} />
      <View style={styles.containt}>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};


const styles = ScaledSheet.create({
  container: {
    width,
    height,
    alignItems: 'center',
    justifyContent:"center"
  },
  image: {
    flex: 0.5,
marginTop:'110@s',
  },
  containt: {
    flex: 0.4,
   alignItems:'center',
    justifyContent:'center',
  marginBottom:"150@s"
  },
  description: {
    fontSize:'15@s',
    color: colors.text, 
    fontWeight:'bold', 
  textAlign:'center',
marginHorizontal:"20@s"
  },
});
