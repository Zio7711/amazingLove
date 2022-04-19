import { Text, View } from 'react-native';

import AppScreen from '../components/AppScreen';
import ProfileTopIconList from '../components/profile/ProfileTopIconList';
import React from 'react';

const CommunityScreen = () => {
  return (
    <AppScreen>
      <View>
        <ProfileTopIconList />
      </View>
    </AppScreen>
  );
};

export default CommunityScreen;
