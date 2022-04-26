import { Dimensions, StyleSheet, Text, View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const IconItem = ({
  name,
  size,
  iconColor,
  backgroundColor,
  title,
  textOnTop = false,
  onPress,
  ...otherConfig
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, { backgroundColor }]}>
        {textOnTop && <Text style={styles.title}>{title}</Text>}
        <MaterialCommunityIcons
          name={name}
          size={size}
          color={iconColor}
          {...otherConfig}
        />
        {!textOnTop && <Text style={styles.title}>{title}</Text>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    margin: 5,
    height: 120,
    width: Dimensions.get("window").width / 6,
    borderRadius: 15,
  },

  title: {
    textAlign: "center",
  },
});

export default IconItem;
