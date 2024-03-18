import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from '../screens/SignUp';
import Login from '../screens/Login';
import SplachScreen from '../screens/Splach';
import SlideItem from '../screens/Onboarding/SlideItem';
import Slider from '../screens/Onboarding/Slider';

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
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
     
    </Stack.Navigator>
  );
}
