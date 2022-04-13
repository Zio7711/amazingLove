import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import moment from 'moment';
import { secondsToDhms } from '../../utils/mainScreenHelper';

const MainScreenCenter = () => {
  const [lovingTime, setLovingTime] = useState(0);

  useEffect(() => {
    const currentTime = moment(new Date(Date.now()));
    const dateWeMet = moment('2021-10-19');
    const lovingTimeInSeconds = currentTime.diff(dateWeMet, 'seconds');
    setLovingTime(lovingTimeInSeconds);

    let everySecondInterval = setInterval(() => {
      setLovingTime((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(everySecondInterval);
  }, []);

  const displayLovingTime = secondsToDhms(lovingTime);

  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        Anais <MaterialCommunityIcons name='heart' size={24} color='red' /> Zio
      </Text>
      <Text style={styles.description}>{displayLovingTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 30,
  },
  description: {
    fontSize: 16,
  },
});

export default MainScreenCenter;
