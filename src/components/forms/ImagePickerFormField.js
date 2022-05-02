import { Text, View } from "react-native";

import React from "react";
import { useFormikContext } from "formik";

const ImagePickerFormField = () => {
  const { setFieldTouched, setFieldValue, errors, touched, values } =
    useFormikContext();

  return (
    <View>
      <Text>ImagePickerFormField</Text>
    </View>
  );
};

export default ImagePickerFormField;
