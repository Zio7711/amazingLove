import { Text, View } from 'react-native';

import CommunityScreen from '../screens/CommunityScreen';
import MainScreen from '../screens//MainScreen';
import MyProfileScreen from '../screens/MyProfileScreen';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name='Us' component={MainScreen} />
      <Tab.Screen name='Community' component={CommunityScreen} />
      <Tab.Screen name='Profile' component={MyProfileScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
