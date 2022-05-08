import {
  Alert,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import ImageInput from "./ImageInput";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { apiCallBegan } from "../../store/apiActions";
import bucketListApi from "../../../api/bucketListApi";
import colors from "../../../config/colors";
import { useDispatch } from "react-redux";
import { useFormikContext } from "formik";

const SubmitFormTopSection = ({ isModalVisible, toggleModal, id }) => {
  const { handleSubmit } = useFormikContext();
  const dispatch = useDispatch();

  // blow are event handler

  const deleteItem = () => {
    // function after click on Confirm button
    // delete the item from the bucket list
    const confirmDelete = () => {
      toggleModal();
      dispatch(apiCallBegan(bucketListApi.deleteBucketListItemById(id)));
    };

    Alert.alert(
      "Delete Confirmation",
      "Are you sure you want to delete this item?",
      [
        {
          text: "Cancel",
          // onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "Confirm", onPress: confirmDelete },
      ]
    );
  };

  return (
    <View style={styles.buttonImageContainer}>
      {/* only when modal is open the cancel button is pressable */}
      <TouchableOpacity disabled={!isModalVisible} onPress={deleteItem}>
        <MaterialCommunityIcons
          name="trash-can"
          size={30}
          color={colors.primary}
        />
      </TouchableOpacity>

      {/* Form Field for image */}
      <ImageInput name="image" />

      {/* only when modal is open the save button is pressable */}
      <TouchableOpacity onPress={handleSubmit} disabled={!isModalVisible}>
        <MaterialCommunityIcons name="check" size={30} color={colors.primary} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonImageContainer: {
    padding: 10,
    marginTop: 20,
    flexDirection: "row",
    height: "45%",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: Dimensions.get("window").width,
  },
});

export default SubmitFormTopSection;
