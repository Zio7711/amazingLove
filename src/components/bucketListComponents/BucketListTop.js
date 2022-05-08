import { Image, StyleSheet, Text, View } from "react-native";

import React from "react";
import colors from "../../../config/colors";
import { useSelector } from "react-redux";

const BucketListTop = () => {
  const { bucketList } = useSelector((state) => state.bucketList);

  const bucketListCount = bucketList.length;
  const completedCount = bucketList.filter((item) => item.isCompleted).length;

  return (
    <View style={styles.container}>
      <Image
        source={require("assets/pics/bucketListBackground.jpeg")}
        style={styles.image}
        blurRadius={5}
      />
      <Text style={styles.taskText}>
        Task Completed: {completedCount} / {bucketListCount}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
    opacity: 0.5,
  },

  taskText: {
    position: "absolute",
    color: colors.dark,
  },
});

export default BucketListTop;
