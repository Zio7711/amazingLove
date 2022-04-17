import AppTabNavigator from './AppTabNavigator';
import ChatScreen from '../screens/ChatScreen';
import MapScreen from '../screens/MapScreen';
import React from 'react';
import TicTacToeScreen from '../screens/TicTacToeScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Main'
        component={AppTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name='Map' component={MapScreen} />
      <Stack.Screen name='Tic Tac Toe' component={TicTacToeScreen} />
      <Stack.Screen name='Chat' component={ChatScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
