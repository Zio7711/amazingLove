import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';

import Constants from 'expo-constants';
import MapView from 'react-native-maps';

const MapComponent = () => {
  const mapRef = useRef(null);
  const [mapRegion, setMapRegion] = useState({
    latitude: 30.2348219,
    longitude: 120.244489,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  return (
    <MapView
      ref={mapRef}
      style={styles.map}
      region={mapRegion}
      showsMyLocationButton={true}
      showsUserLocation={true}
      mapPadding={{ bottom: 130 }}
    ></MapView>
  );
};
const styles = StyleSheet.create({
  map: {
    height: '170%',
    alignItems: 'stretch',
  },
});
export default MapComponent;
