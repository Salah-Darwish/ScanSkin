import {Image, StyleSheet, Text, View, Dimensions,TouchableOpacity} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('screen');
const SlideItem = ({item}) => {
  
  return (
    <View style={styles.container}>
      
       <Image source={item.img} resizeMode='contain' style={styles.image} /> 
      <View style={styles.containt}>
        <Text style={styles.description}>{item.description}</Text>
    
      </View>
    </View>
  );
};

export default SlideItem;

const styles = StyleSheet.create({
  container: {
    width,
    height,
    alignItems: 'center',
  },
  image: {
    flex: 0.65,
    width: '80%',
    marginVertical:'18%'
    
  },
  containt: {
    flex: 0.45,
    alignItems: 'center',
  },

  description: {
    fontSize: 18,
    paddingHorizontal:18,
    marginVertical: -8,
    color: '#8D5524E2',
  },

});
