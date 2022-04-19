import { StyleSheet, Text, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import colors from '../../../config/colors';

const ProfileTopIconItem = () => {
  return (
    <View style={styles.container}>
      <Text>Roses</Text>
      <MaterialCommunityIcons name='flower' size={30} color='black' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    width: 60,
    padding: 5,
    margin: 5,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
});

export default ProfileTopIconItem;
