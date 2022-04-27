import { Text, View } from "react-native";

import CommunityScreen from "../screens/CommunityScreen";
import MainScreen from "../screens/MainScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MyProfileScreen from "../screens/MyProfileScreen";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import routes from "./routes";

const Tab = createBottomTabNavigator();

const AppTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name={routes.US}
        component={MainScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.COMMUNITY}
        component={CommunityScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="google-circles-communities"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name={routes.PROFILE}
        component={MyProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppTabNavigator;
