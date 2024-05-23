import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreenDoctors from '../screens/Doctors/HomeScreenDoctors';
const Stack = createNativeStackNavigator();

export function DoctorsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
    name="HomeScreenDoctors"
        component={HomeScreenDoctors}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
