import { View, Text, Alert } from 'react-native'
import React from 'react'
import styles from './styles'
import Customtext from '../../component/text'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useSelector,useDispatch } from 'react-redux'
import { scale, verticalScale } from 'react-native-size-matters'
import { colors } from '../../utls/colors'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { ConfirmCode } from '../../redux/actions'
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Token_Key } from '../../utls/constant'
import { setToken } from '../../redux/actions'
import CustomButton from '../../component/CustomButton'
import { useUpadateEffect } from '../../utls/useUpdateEffect'
import { shOWError } from '../../utls/helperFunction'
export default function ConfirmationCode({navigation}) {
     const [value, setValue] =React.useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const CELL_COUNT = 6;
  const isLoading=useSelector(state=>state.auth.isConfirmCode); 
 const success=useSelector(state=>state.auth.ConfirmSuccess)
 const failure=useSelector(state=>state.auth.ConfirmFailure)
const dispatch=useDispatch(); 
// Inside your ConfirmationCode component
useUpadateEffect(() => {
  navigation.navigate('Setrules');
}, [success]);

useUpadateEffect(()=>{
shOWError('SignUp Failed')
},[failure])
const doneHandler=()=>{
dispatch(ConfirmCode(value))
}
  return (
        <KeyboardAwareScrollView
       extraHeight={verticalScale(35)}
        enableOnAndroid>
    <View style={styles.container}>
     
    <Customtext text={"Confirmation Code"} styleText={[styles.textstyle,{
        marginTop:verticalScale(20)
    }]}/>
    <View style={styles.IconContainer}>
    <Icon name="check-bold" size={scale(60)} color={colors.white}/>
    </View>
     <Customtext text={"Enter verification code sent \n \t\t\t\t\t\t\t to you via e-mail"} styleText={[styles.textstyle,
        {
        fontWeight:'500', 
        fontSize:scale(18)
        }]}/>
 <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        autoComplete={Platform.select({ android: 'sms-otp', default: 'one-time-code' })}
        testID="my-code-input"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor/> : null)}
          </Text>
        )}
      />
      <CustomButton  text="Verfiy" styletext={styles.text} 
      styleButton={styles.Button}
      isLoading={isLoading}
      OnPress={doneHandler}
        />
    
    </View>
      </KeyboardAwareScrollView>
  )
}