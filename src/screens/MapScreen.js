import { StyleSheet, Text, View } from 'react-native';

import AppScreen from '../components/AppScreen';
import MapComponent from '../components/MapComponent';
import React from 'react';

const MapScreen = () => {
  return (
    <AppScreen style={styles.container}>
      <MapComponent />
    </AppScreen>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '50%',
  },
});
export default MapScreen;
