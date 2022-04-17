import MainScreen from '../screens/MainScreen';
import MapScreen from '../screens/MapScreen';
import React from 'react';
import TicTacToeScreen from '../screens/TicTacToeScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const MainScreenNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name='Main'
      component={MainScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name='Map' component={MapScreen} />
    <Stack.Screen name='Tic Tac Toe' component={TicTacToeScreen} />
  </Stack.Navigator>
);

export default MainScreenNavigator;
