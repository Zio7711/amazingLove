import { SafeAreaView, StyleSheet } from 'react-native';

import Constants from 'expo-constants';
import React from 'react';

const ScreenContainer = ({ children }) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});

export default ScreenContainer;