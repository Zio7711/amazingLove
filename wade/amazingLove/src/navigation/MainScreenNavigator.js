import MainScreen from '../screens/MainScreen';
import MapScreen from '../screens/MapScreen';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const MainScreenNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name='Main' component={MainScreen} />
    <Stack.Screen
      name='Map'
      component={MapScreen}
      options={{ headerShown: true }}
    />
  </Stack.Navigator>
);

export default MainScreenNavigator;
