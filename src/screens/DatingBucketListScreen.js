import { Text, View } from "react-native";

import AppScreen from "../components/AppScreen";
import BucketList from "../components/bucketListComponents/BucketList";
import BucketListTop from "../components/bucketListComponents/BucketListTop";
import React from "react";

const DatingBucketListScreen = () => {
  return (
    <AppScreen>
      <BucketListTop />
      <BucketList />
    </AppScreen>
  );
};

export default DatingBucketListScreen;
