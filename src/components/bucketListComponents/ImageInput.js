import * as ImagePicker from "expo-image-picker";

import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import ErrorMessage from "../forms/ErrorMessage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import colors from "../../../config/colors";
import { useFormikContext } from "formik";

const ImageInput = ({ name }) => {
  const { setFieldValue, errors, touched, values } = useFormikContext();

  // handle upload image press for edit
  const selectImage = async () => {
    // try to get image from camera roll
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) setFieldValue(name, result.uri);
    } catch (error) {
      console.log("error in selectImage");
    }
  };

  return (
    <>
      {values[name] ? (
        <TouchableOpacity onPress={selectImage} style={styles.imageOnEdit}>
          <Image source={{ uri: values[name] }} style={styles.imageOnEdit} />
        </TouchableOpacity>
      ) : (
        <View style={styles.imageOnEdit}>
          <TouchableOpacity onPress={selectImage}>
            <MaterialCommunityIcons
              name="plus-circle"
              size={60}
              color={colors.primary}
            />
          </TouchableOpacity>
        </View>
      )}

      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

const styles = StyleSheet.create({
  imageOnEdit: {
    height: "100%",
    width: "50%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ImageInput;
