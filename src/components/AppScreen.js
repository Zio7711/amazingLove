import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import Constants from 'expo-constants';
import React from 'react';

const AppScreen = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      {children}
      <StatusBar style='auto' />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});

export default AppScreen;
