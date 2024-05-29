import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from './AuthStack';
import { HomeTabs } from './HomeTabs';
import { HomeTabsDoctors } from './HomeTabsDoctors';

export function AppContainer(props) {
  const { isAuthenticated, role } = props;

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        role === 'Doctor' ? (
          <HomeTabsDoctors />
        ) : (
          <HomeTabs />
        )
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
}
