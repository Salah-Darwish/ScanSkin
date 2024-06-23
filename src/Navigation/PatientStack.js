import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NotifactionPatient from '../screens/Patient/Notifaction';
import HomeScreen from '../screens/Patient/Home';
import Skan from '../screens/Patient/Skan';
import DiscoverDiseasesScreen from '../screens/Patient/DiscoverDisease';
import NotDiscoverDiseasesScreen from '../screens/Patient/NotDiscoverDiseases';
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
         <Stack.Screen
        name="DiscoverDiseasesScreen"
        component={DiscoverDiseasesScreen}
        options={{headerShown: false}}
      />  
         <Stack.Screen
        name="NotDiscoverDiseasesScreen"
        component={NotDiscoverDiseasesScreen}
        options={{headerShown: false}}
      />  
    </Stack.Navigator>
  );
}
