import { StyleSheet, Text, View } from "react-native";

import AppScreen from "../components/AppScreen";
import Button from "components/Button";
import ProfileInfo from "../components/profile/ProfileInfo";
import ProfileTopIconList from "../components/profile/ProfileTopIconList";
import React from "react";
import { logOut } from "../store/globalSlice";
import { useDispatch } from "react-redux";

const MyProfileScreen = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    dispatch(logOut());
  };

  return (
    <AppScreen>
      <ProfileInfo />
      <ProfileTopIconList />
      <Button title="Logout" onPress={handleLogout} />
    </AppScreen>
  );
};

const styles = StyleSheet.create({});

export default MyProfileScreen;
