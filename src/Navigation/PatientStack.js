import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NotifactionPatient from '../screens/Patient/Notifaction';
import HomeScreen from '../screens/Patient/Home';
import Skan from '../screens/Patient/Skan';
const Stack = createNativeStackNavigator();

export function PatientStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
    name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NotifactionPatient"
        component={NotifactionPatient}
        options={{headerShown: false}}
      />  
    </Stack.Navigator>
  );
}
