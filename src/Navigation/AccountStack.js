import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountScreen from '../screens/Account';
import UpdateAccountScreen from '../screens/UpdateAccount';

const Stack = createNativeStackNavigator();

export function AccountStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{headerShown: false, headerBackTitleVisible: false}}
      />
      <Stack.Screen
        name="UpdateAccountScreen"
        component={UpdateAccountScreen}
        options={{headerBackTitleVisible: false, title: 'Update Account'}}
      />
  
    </Stack.Navigator>
  );
}
