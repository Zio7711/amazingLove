import React, { useEffect, useRef } from "react";
import { StyleSheet, View } from "react-native";

import LottieView from "lottie-react-native";

const ActivityIndicator = ({ visible = false }) => {
  // for phones that do not support autoplay

  const lottieRef = useRef(null);

  useEffect(() => {
    lottieRef?.current?.play();
    return () => lottieRef.current?.reset();
  }, [visible]);

  if (!visible) return null;
  return (
    <View style={styles.overlay}>
      <LottieView
        ref={lottieRef}
        source={require("../../assets/animations/loading.json")}
        loop
        autoPlay
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
    zIndex: 100,
  },
});

export default ActivityIndicator;
