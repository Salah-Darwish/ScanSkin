import { View, Text, Alert, Platform } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import Customtext from '../../../component/text';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector, useDispatch } from 'react-redux';
import { scale, verticalScale } from 'react-native-size-matters';
import { colors } from '../../../utls/colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ConfirmCode, ResendCode } from '../../../redux/actions';
import CountDown from 'react-native-countdown-component';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import CustomButton from '../../../component/CustomButton';
import { useUpadateEffect } from '../../../utls/useUpdateEffect';
import { shOWError } from '../../../utls/helperFunction';

export default function ConfirmationCode({ navigation }) {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [time, setTime] = useState(60 * 4 + 1);
  const [isResending, setIsResending] = useState(false);
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const CELL_COUNT = 6;
  const isLoading = useSelector((state) => state.auth.isConfirmCode);
  const success = useSelector((state) => state.auth.ConfirmSuccess);
  const failure = useSelector((state) => state.auth.ConfirmFailure);
  const isLoadingResend = useSelector((state) => state.auth.isResendCode);
  const dispatch = useDispatch();
  useUpadateEffect(() => {
      navigation.replace('SetRulesAccount');
  }, [success]);

  useEffect(() => {
    let interval;
    if (isResending) {
      interval = setInterval(() => {
        setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isResending]);

  useUpadateEffect(() => {
    if (failure) {
      shOWError('Confirmation Code Failed');
    }
  }, [failure]);

  const doneHandler = () => {
    dispatch(ConfirmCode(value));
  };

  const resendHandler = () => {
    setTime(60 * 4 + 1);
    dispatch(ResendCode());
    setIsResending(true);
  };

  return (
    <KeyboardAwareScrollView extraHeight={verticalScale(35)} enableOnAndroid>
      <View style={styles.container}>
        <Customtext
          text="Confirmation Code"
          styleText={[styles.textstyle, { marginTop: verticalScale(20) }]}
        />
        <View style={styles.IconContainer}>
          <Icon name="check-bold" size={scale(60)} color={colors.white} />
        </View>
        <Customtext
          text="Enter verification code sent to you via e-mail"
          styleText={[
            styles.textstyle,
            { fontWeight: '500', fontSize: scale(18) },
          ]}
        />
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          autoComplete={Platform.select({ android: 'sms-otp', default: 'one-time-code' })}
          testID="my-code-input"
          renderCell={({ index, symbol, isFocused }) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}
            >
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <CountDown
            until={time}
            size={25}
            style={{ marginTop: scale(20) }}
            digitStyle={{ backgroundColor: colors.backgr }}
            digitTxtStyle={{ color: colors.text }}
            timeToShow={['M', 'S']}
            timeLabels={{ m: 'MM', s: 'SS' }}
          />
          <CustomButton
            text="Resend Code"
            styletext={styles.text}
            styleButton={[
              styles.Button,
              { marginTop: verticalScale(40), width: scale(130), marginLeft: scale(30) },
            ]}
            isLoading={isLoadingResend}
            OnPress={resendHandler}
          />
        </View>
        <CustomButton
          text="Verify"
          styletext={styles.text}
          styleButton={styles.Button}
          isLoading={isLoading}
          OnPress={doneHandler}
        />
      </View>
    </KeyboardAwareScrollView>
  );
}
