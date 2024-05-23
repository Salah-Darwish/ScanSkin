import { TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { scale, verticalScale } from 'react-native-size-matters';
import { colors } from '../utls/colors';

export default function Input(props) {
  const {
    placeholder,
    styleInput,
    value,
    color,
    keyboard,
    secure,
    onChangeText, 
    handleblur, 
    isIcon,
    name,
    styleTouchIcon, 
    OnPress

  } = props;

  return (
    <View style={{ flexDirection:'row',alignItems:'center'}}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={color}
        style={styleInput}
        onChangeText={onChangeText}
        value={value}
        handleblur={handleblur}
        keyboardType={keyboard}
        secureTextEntry={secure}
      />
      <TouchableOpacity style={styleTouchIcon} onPress={OnPress}>
      {isIcon?<Icon name={name} size={25} color={colors.text}/>:null}
      </TouchableOpacity>
    </View>
  );
}
