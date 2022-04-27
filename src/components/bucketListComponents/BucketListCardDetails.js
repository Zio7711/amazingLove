import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import BucketListCardCompleted from "./BucketListCardCompleted";
import BucketListCardNew from "./BucketListCardNew";
import BucketListCardOnEdit from "./BucketListCardOnEdit";

const BucketListCardDetails = ({ route }) => {
  const item = route.params;
  const { isCompleted } = item;

  const [isOnEdit, setIsOnEdit] = useState(false);

  return (
    <>
      {isOnEdit ? (
        <BucketListCardOnEdit item={item} />
      ) : isCompleted ? (
        <BucketListCardCompleted
          item={item}
          setIsOnEdit={setIsOnEdit}
          isOnEdit={isOnEdit}
        />
      ) : (
        <BucketListCardNew item={item} />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    // justifyContent: "center",
    paddingTop: 50,
    alignItems: "center",
  },
  image: {
    height: "70%",
    resizeMode: "cover",
    width: "100%",
  },
});

export default BucketListCardDetails;
