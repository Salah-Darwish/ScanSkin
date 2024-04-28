import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View, Dimensions, Image } from "react-native";
import { HomeStack } from "./HomeStack";
import { AccountStack } from "./AccountStack";
import HomeScreen from "../screens/Home";
import { getPathDown } from "./curve";
import { Svg, Path } from "react-native-svg";
import { scale } from "react-native-size-scaling";
import { colors } from "../utls/colors";

const Tab = createBottomTabNavigator();
export const HomeTabs = () => {
  const [maxWidth, setMaxWidth] = useState(Dimensions.get("window").width);
  const returnpathDown = getPathDown(maxWidth, 60, 50);
  return (
    <Tab.Navigator
    
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "transparent",
          borderTopWidth: 0,
          position: "absolute",
          elevation: 0,
        
        },
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarItemStyle: {
            margin: 0,
           // backgroundColor: "white",
          },
          tabBarIcon: () => (
            <Image
              style={{
                width: 36,
                height: 36,
              }}
              source={{
                uri: "https://img.icons8.com/sf-regular-filled/48/null/home-page.png",
              }}
            />
          ),
          tabBarLabel: () => (
            <Text className="text-black text-xs">Home</Text>
          ),
        }}
      />
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          unmountOnBlur: false,
          tabBarItemStyle: {
            margin: 0,
            zIndex: -50,
          },
          tabBarIcon: () => (
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 56,
                width: 56,
         //       backgroundColor: "white",
                borderRadius: 35,
              }}
            >
              <Image
                style={{
                  width: 36,
                  height: 36,
                }}
                source={{
                  uri: "https://img.icons8.com/sf-regular-filled/48/null/home-page.png",
                }}
              />
            </View>
          ),
          tabBarLabel: () => (
            <View>
              <Svg width={maxWidth} height={scale(60)}>
                <Path fill={"white"} {...{ d: returnpathDown }} />
              </Svg>
            </View>
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
         //   backgroundColor: "white",
          },
          tabBarIcon: () => (
            <Image
              style={{
                width: 36,
                height: 36,
              }}
              source={{
                uri: "https://img.icons8.com/small/64/null/gender-neutral-user.png",
              }}
            />
          ),
          tabBarLabel: () => (
            <Text className="text-black text-xs">Profile</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};