import {
  Keyboard,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import Constants from "expo-constants";
import React from "react";

function AppScreen({ children, style, onPress = () => {} }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={[styles.view, style]}>{children}</View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});

export default AppScreen;
