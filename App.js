import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Slider from './src/component/Slider'
import Login from './pages/login'
import ForgetPass from './pages/ForgetPass'
import Verfiy from './pages/Verfiy'
import ResetPass from './pages/resetPass'
// import AccountType from './pages/acountType'
const Stack=createNativeStackNavigator()
const App = () => {
  return (



      <NavigationContainer>
        <Stack.Navigator   screenOptions={{
          headerShown:false
        }} > 
      {/* <Stack.Screen name='Slider_Screen' component={Slider}  />  */}
         {/* <Stack.Screen name='Login_Screen' component={Login}/>
         <Stack.Screen name='Forgetpass_Screen' component={ForgetPass}/>
         <Stack.Screen name='Verfiy_Screen' component={Verfiy}/> */}
         <Stack.Screen name='Resetpass_Screen' component={ResetPass}/>
         {/* <Stack.Screen name='Acounttype_Screen' component={AccountType}/> */}

         </Stack.Navigator>
      </NavigationContainer> 
  
   
  );
};
export default App;

const styles = StyleSheet.create({});
