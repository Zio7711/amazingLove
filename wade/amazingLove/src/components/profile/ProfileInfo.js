import { Image, StyleSheet, Text, View } from 'react-native';

import IconItem from '../IconItem';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import colors from '../../../config/colors';

const ProfileInfo = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={require('assets/pics/background.jpg')}
      />
      <View style={styles.infoContainer}>
        <Text>
          Anais <MaterialCommunityIcons name='heart' size={24} color='red' />{' '}
          Zio
        </Text>

        <Text>Our Information Details</Text>
      </View>
      <IconItem
        title='Wallet'
        size={40}
        name='wallet'
        iconColor={'black'}
        backgroundColor={colors.medium}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  infoContainer: {
    // alignItems: 'center',
  },
});
export default ProfileInfo;
