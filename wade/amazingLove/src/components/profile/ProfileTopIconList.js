import { StyleSheet, Text, View } from 'react-native';

import AppScreen from '../AppScreen';
import IconItem from '../IconItem';
import ProfileTopIconItem from './ProfileTopIconItem';
import React from 'react';
import colors from '../../../config/colors';

const ProfileTopIconList = () => {
  const iconList = [
    { title: 'Home', name: 'home-account' },
    { title: 'Games', name: 'gamepad-variant' },
    { title: 'Chat', name: 'message-text' },
    { title: 'Dairies', name: 'book-open-variant' },
    { title: 'me', name: 'account' },
  ];

  return (
    <AppScreen>
      <View style={styles.container}>
        {iconList.map((icon, index) => (
          <IconItem
            title={icon.title}
            key={index}
            size={40}
            name={icon.name}
            iconColor={'black'}
            backgroundColor={colors.secondary}
            textOnTop={true}
          />
        ))}
      </View>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default ProfileTopIconList;
