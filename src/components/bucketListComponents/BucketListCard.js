import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import routes from "../../navigation/routes";
import { useNavigation } from "@react-navigation/native";

const BucketListCard = ({ item }) => {
  const { id, title, description, completed, image, location, date } = item;

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(routes.DATING_BUCKET_LIST_CARD_DETAILS, item)
      }
    >
      <View style={styles.cardContainer}>
        <Image source={{ uri: image }} style={styles.image} />
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: Dimensions.get("window").width / 3.5,
    padding: 5,
    paddingBottom: 10,
    alignItems: "center",
    height: 150,
    borderWidth: 4,
    margin: 8,
  },

  image: {
    width: "100%",
    height: "80%",
    resizeMode: "contain",
  },
});

export default BucketListCard;
