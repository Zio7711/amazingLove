import { Image, StyleSheet, Text, View } from "react-native";

import React from "react";

const BucketListCardDetails = ({ route }) => {
  const item = route.params;
  const { title, description, completed, image, location, date } = item;
  return (
    <View style={{ flex: 1 }}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text>{title}</Text>
        <Text>{description}</Text>
        <Text>{date}</Text>
        <Text>{location}</Text>
      </View>
    </View>
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
