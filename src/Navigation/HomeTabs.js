import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View, Dimensions, Image } from "react-native";
import { HomeStack } from "./HomeStack";
import { AccountStack } from "./AccountStack";
import { PatientStack } from "./PatientStack";
import { getPathDown } from "./curve";
import { Svg, Path } from "react-native-svg";
import { scale } from "react-native-size-scaling";
import HomeScreen from "../screens/Patient/Home";
import Appointment from "../screens/Patient/Appointment";
import { colors } from "../utls/colors";
import Skan from "../screens/Patient/Skan";
import { verticalScale } from "react-native-size-matters";

const Tab = createBottomTabNavigator();
export const HomeTabs = () => {
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
        name="PatientStack"
        component={PatientStack}
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
        name="Skan"
        component={Skan}
        options={{
          headerShown: false,
          unmountOnBlur: false,
          tabBarItemStyle: {
            margin: 0,
            zIndex: scale(-50),
          },
          tabBarIcon: () => (
            <View
              style={{
               display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: verticalScale(53),
                width: scale(65),
         //       backgroundColor: "white",
                borderRadius: scale(32.5),
                backgroundColor:colors.text, 
                alignItems:'center', justifyContent:'center'

              }}
            >
              <Image
                style={{
                  width: scale(36),
                  height: verticalScale(36),
                  resizeMode:'contain'
                }}
                source={require('../assets/camera.png')}
              />
            </View>
          ),
          tabBarLabel: () => (
            <View>
              <Svg width={maxWidth} height={verticalScale(50)}>
                <Path fill={colors.text} {...{ d: returnpathDown }} />
              </Svg>
            </View>
          ),
        }}
      />
       <Tab.Screen
        name="Appointment"
        component={Appointment}
        options={{
          headerShown: false,
          tabBarItemStyle: {
            margin: 0,
          
        
          },
          tabBarIcon: () => (
            <Image
              style={{
                width: scale(20),
                height: verticalScale(20),
                marginRight:scale(70)
              }}
              source={require('../assets/calendar.png')
              }
            />
          ),
          tabBarLabel: () => (
            <Text className="text-black text-xs" style={{
              color:colors.white, 
              fontSize:scale(9), 
              fontWeight:"bold",
              marginRight:scale(70), 
              marginBottom:verticalScale(2)
            }}>Appointment</Text>
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