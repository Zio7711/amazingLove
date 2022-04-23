import { StyleSheet, Text, View } from 'react-native';

import AppScreen from '../components/AppScreen';
import Button from 'components/Button';
import ProfileInfo from '../components/profile/ProfileInfo';
import ProfileTopIconList from '../components/profile/ProfileTopIconList';
import React from 'react';
import authStorage from '../../auth/authStorage';
import useAuth from '../../auth/useAuth';

const MyProfileScreen = () => {
  const { setUser } = useAuth();
  const handleLogout = async () => {
    await authStorage.removeToken();
    setUser(null);
  };

  return (
    <AppScreen>
      <ProfileInfo />
      <ProfileTopIconList />
      <Button title='Logout' onPress={handleLogout} />
    </AppScreen>
  );
};

const styles = StyleSheet.create({});

export default MyProfileScreen;
