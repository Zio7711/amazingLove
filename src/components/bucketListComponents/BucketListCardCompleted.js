import { Image, StyleSheet, Text, View } from "react-native";

import Button from "../../components/Button";
import React from "react";

const BucketListCardCompleted = ({ item, setIsOnEdit, isOnEdit }) => {
  const { title, description, isCompleted, image, location, date } = item;

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text>{title}</Text>
        <Text>{description}</Text>
        <Text>{date}</Text>
        <Text>{location}</Text>
      </View>

      <Button title="Edit" width={200} onPress={() => setIsOnEdit(true)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  contentContainer: {
    paddingTop: 50,
    alignItems: "center",
  },
  image: {
    height: "70%",
    resizeMode: "cover",
    width: "100%",
  },
});

export default BucketListCardCompleted;
