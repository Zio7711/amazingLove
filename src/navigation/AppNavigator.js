import AppTabNavigator from "./AppTabNavigator";
import BucketListNavigator from "./BucketListNavigator";
import ChatScreen from "../screens/ChatScreen";
import DairiesScreen from "../screens/DairiesScreen";
import DatingBucketListScreen from "../screens/DatingBucketListScreen";
import MapScreen from "../screens/MapScreen";
import React from "react";
import TicTacToeScreen from "../screens/TicTacToeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import routes from "./routes";
import { useSelector } from "react-redux";

const Stack = createStackNavigator();

const AppNavigator = () => {
  const { user } = useSelector((state) => state.global);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.MAIN}
        component={AppTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={routes.MAP} component={MapScreen} />
      <Stack.Screen name={routes.TIC_TAC_TOE} component={TicTacToeScreen} />
      <Stack.Screen
        name={routes.DATING_BUCKET_LIST}
        component={BucketListNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={routes.CHAT}
        component={ChatScreen}
        options={{ title: user.soulmate.name }}
      />

      <Stack.Screen
        name={routes.DAIRIES}
        component={DairiesScreen}
        options={{
          presentation: "modal",
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
