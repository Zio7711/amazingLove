import { StyleSheet, View } from "react-native";

import LottieView from "lottie-react-native";
import React from "react";

const ActivityIndicator = ({ visible = false }) => {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <LottieView
        autoPlay
        loop
        source={require("../../assets/animations/loading.json")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.5)",
    height: "100%",
    width: "100%",
    zIndex: 1,
  },
});

export default ActivityIndicator;
