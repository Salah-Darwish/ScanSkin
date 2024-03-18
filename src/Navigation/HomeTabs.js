import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import { IonIcon } from '../component/IonIcon';
//import {TINT_COLOR} from '../utils/colors';
import { colors } from '../utls/colors';
import { HomeStack } from './HomeStack';
//import {SearchStack} from './SearchStack';
import { AccountStack } from './AccountStack';
import { TabCartIcon } from '../component/TabCartIcon';

const Tabs = createBottomTabNavigator();

export function HomeTabs(props) {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => {
        const iconName = {
          HomeStack: 'home',
          SearchStack: 'search',
          AccountStack: 'person',
        };

        const label = {
          HomeStack: 'Shop',
          CartStack: 'Cart',
          SearchStack: 'Search',
          AccountStack: 'Account',
        };

        return {
          tabBarIcon: ({focused}) =>
            route.name === 'CartStack' ? (
              <TabCartIcon focused={focused} />
            ) : (
              <IonIcon
                name={iconName[route.name]}
                style={{color: focused ? colors.Actdot: 'black', fontSize: 24}}
              />
            ),
          tabBarLabel: ({focused}) => (
            <Text style={{color: focused ? colors.Actdot : 'black', fontSize: 18}}>
              {label[route.name]}
            </Text>
          ),
        };
      }}>
      <Tabs.Screen name="HomeStack" component={HomeStack} />
      {/* <Tabs.Screen name="CartStack" component={CartStack} /> */}
      {/* <Tabs.Screen name="SearchStack" component={SearchStack} /> */}
      <Tabs.Screen name="AccountStack" component={AccountStack} />
    </Tabs.Navigator>
  );
}
