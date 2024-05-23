import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from '../screens/AccountModule/SignUp';
import Login from '../screens/AccountModule/Login';
import SplachScreen from '../screens/AccountModule/Splach';
import Slider from '../screens/AccountModule/Onboarding/Slider';
import SetRulesAccount from '../screens/AccountModule/SetRules';
import RulesDoctor from '../screens/AccountModule/RulesDoctor';
import RulesPatient from '../screens/AccountModule/RulesPatient';
import ForgetPassword from '../screens/AccountModule/ForgetPassword';
import ConfirmatioCodePassword from '../screens/AccountModule/ConfirmationCodePassword';
import ResetPassword from '../screens/AccountModule/ResetPasswoed';
import ConfirmationCode from '../screens/AccountModule/ConfirmationCode';
const Stack = createNativeStackNavigator();

export function AuthStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name='SplachScreen' component={SplachScreen}
         options={{headerShown: false,}}
      />

      <Stack.Screen name='Slider' component={Slider}
         options={{headerShown: false,}}/>
 <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown:false,}}
      />
       <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{headerShown:false,}}
      />
        <Stack.Screen
        name="ConfirmatioCodePassword"
        component={ConfirmatioCodePassword}
        options={{headerShown:false,}}
      />
         <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{headerShown:false,}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen name='ConfirmationCode'
      component={ConfirmationCode}
      options={{headerShown:false}}
      />
      <Stack.Screen 
      name='SetRulesAccount'
      component={SetRulesAccount}
      options={{headerShown:false}}
      />
     <Stack.Screen
     name='RulesDoctor'
     component={RulesDoctor}
     options={{headerShown:false}}
     />
     <Stack.Screen
     name='RulesPatient'
     component={RulesPatient}
     options={{headerShown:false}}
     />
     
    </Stack.Navigator>
  );
}
