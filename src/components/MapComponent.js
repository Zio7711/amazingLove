import * as Location from "expo-location";

import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ActivityIndicator from "./ActivityIndicator";
import Constants from "expo-constants";
import MapView from "react-native-maps";
import { setLoadingState } from "../store/globalSlice";

const MapComponent = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.global);

  const mapRef = useRef(null);
  const [mapRegion, setMapRegion] = useState({
    latitude: 30.2348219,
    longitude: 120.244489,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  // get current location of the user
  useEffect(() => {
    dispatch(setLoadingState(true));
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.warn("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Lowest,
      });

      setMapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });

      dispatch(setLoadingState(false));
    })();
  }, []);

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
    height: "170%",
    alignItems: "stretch",
  },
});
export default MapComponent;
