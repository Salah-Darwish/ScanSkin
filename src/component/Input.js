import { TextInput, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
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
  } = props;

  return (
    <View style={{ position: 'relative' ,}}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={color}
        style={styleInput}
        onChangeText={value}
        keyboardType={keyboard}
        secureTextEntry={secure}
      />
    </View>
  );
}
