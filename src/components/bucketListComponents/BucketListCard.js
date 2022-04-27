import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../../config/colors";
import routes from "../../navigation/routes";
import { useNavigation } from "@react-navigation/native";

const BucketListCard = ({ item }) => {
  const { id, title, description, isCompleted, image, location, date } = item;

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(routes.DATING_BUCKET_LIST_CARD_DETAILS, item)
      }
    >
      <View style={styles.cardContainer}>
        {isCompleted ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <View style={styles.image}>
            <MaterialCommunityIcons
              name="plus-circle"
              size={60}
              style={styles.icon}
              color={colors.primary}
            />
          </View>
        )}
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
    resizeMode: "cover",
    borderWidth: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BucketListCard;
