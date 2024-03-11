import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import SplachScreen from '../screens/Splach'; 
import Slider from '../screens/Onboarding/Slider';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp'
import ForgetPassword from '../screens/ForgetPassword';
export default function Navigation() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerShown:false
        }}>
  <Stack.Screen name='Splach' component={SplachScreen}/>
  <Stack.Screen name='Slider' component={Slider} />
  <Stack.Screen name='Login' component={Login}/>
  <Stack.Screen name='SignUp' component={SignUp}/>
  <Stack.Screen name='ForgetPassword' component={ForgetPassword}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}