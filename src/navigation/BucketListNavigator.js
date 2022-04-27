import BucketListCardDetails from "../components/bucketListComponents/BucketListCardDetails";
import DatingBucketListScreen from "../screens/DatingBucketListScreen";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import routes from "./routes";

const Stack = createStackNavigator();

const BucketListNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.DATING_BUCKET_LIST_SCREEN}
        component={DatingBucketListScreen}
      />

      <Stack.Screen
        name={routes.DATING_BUCKET_LIST_CARD_DETAILS}
        component={BucketListCardDetails}
        options={{
          presentation: "modal",
          gestureEnabled: true,
          // headerMode: "screen",
          cardStyle: {
            // backgroundColor: "transparent",
          },
          // headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default BucketListNavigator;
