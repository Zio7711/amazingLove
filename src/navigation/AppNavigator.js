import AppTabNavigator from "./AppTabNavigator";
import ChatScreen from "../screens/ChatScreen";
import DatingBucketListScreen from "../screens/DatingBucketListScreen";
import MapScreen from "../screens/MapScreen";
import React from "react";
import TicTacToeScreen from "../screens/TicTacToeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";

const Stack = createStackNavigator();

const AppNavigator = () => {
  const { user } = useSelector((state) => state.global);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={AppTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Map" component={MapScreen} />
      <Stack.Screen name="Tic Tac Toe" component={TicTacToeScreen} />
      <Stack.Screen
        name="Dating Bucket List"
        component={DatingBucketListScreen}
      />
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={{ title: user.soulmate.name }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
