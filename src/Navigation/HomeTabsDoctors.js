import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View, Dimensions, Image } from "react-native";
import { DoctorsStack } from "./DoctorsStack";
import { getPathDown } from "./curve";
import { Svg, Path } from "react-native-svg";
import { scale } from "react-native-size-scaling";
import { AccountStack } from "./AccountStack";
import { colors } from "../utls/colors";

import { verticalScale } from "react-native-size-matters";

const Tab = createBottomTabNavigator();
export const HomeTabsDoctors = () => {
  const [maxWidth, setMaxWidth] = useState(Dimensions.get("window").width);
  const returnpathDown = getPathDown(maxWidth, verticalScale(60), verticalScale(50));
  return (
    <Tab.Navigator
    
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "transparent",
          borderTopWidth: 0,
          position: "absolute",
          elevation: 0,
         width:scale(500)
        },
      }}
    >
      <Tab.Screen
        name="DoctorsStack"
        component={DoctorsStack}
        options={{
          headerShown: false,
          tabBarItemStyle: {
            margin: 0,
    
          },
          tabBarIcon: () => (
            <Image
              style={{
                width:scale(25),
                height: verticalScale(22),
         
            
              }}
              source={require('../assets/home.png')}
            />
          ),
          tabBarLabel: () => (
            <Text className="text-black text-xs" style={{
              color:colors.white, 
              fontSize:scale(12), 
              fontWeight:"bold"
            }}>Home</Text>
          ),
        }}
      />
       <Tab.Screen
        name="AccountStack"
        component={AccountStack}
        options={{
          headerShown: false,
          tabBarItemStyle: {
            margin: 0,
      
  
          },
          tabBarIcon: () => (
            <Image
              style={{
                width: scale(25),
                height: verticalScale(22),
                marginRight:scale(170), 
               
              }}
              source={require('../assets/user.png')}
            />
          ),
          tabBarLabel: () => (
            <Text className="text-black text-xs" style={{
              color:colors.white, 
              fontSize:scale(10), 
              fontWeight:"bold", 
          //    marginTop:verticalScale(20), 
              marginRight:scale(136),
             marginBottom:verticalScale(1),
              width:scale(70)
              
            }}>Profile</Text>
          ),
        }}
      />
      
    </Tab.Navigator>
  );
};