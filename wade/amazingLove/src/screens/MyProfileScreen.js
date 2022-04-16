import { Text, View } from 'react-native';

import AppScreen from '../components/AppScreen';
import ProfileInfo from '../components/profile/ProfileInfo';
import ProfileTopIconList from '../components/profile/ProfileTopIconList';
import React from 'react';

const MyProfileScreen = () => {
  return (
    <AppScreen>
      <View>
        <ProfileInfo />
        <ProfileTopIconList />
      </View>
    </AppScreen>
  );
};

export default MyProfileScreen;
