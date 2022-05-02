import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

import BucketListCardModal from "./BucketListCardModal";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../../config/colors";
import { useState } from "react";

const BucketListCard = ({ item }) => {
  const { title, isCompleted, image } = item;

  // state for list card details modal
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <>
      {/* when the modal is open, the card is not pressable */}
      <TouchableOpacity onPress={toggleModal} disabled={isModalVisible}>
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

      <BucketListCardModal
        item={item}
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
      />
    </>
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
