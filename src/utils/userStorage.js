// haven't been used

import AsyncStorage from '@react-native-async-storage/async-storage';

const key = 'soulmateStorage';

const storeSoulmateUser = async (soulmateUser) => {
  try {
    const jsonValue = JSON.stringify(soulmateUser);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.warn('Error storing the soulmate user', error);
  }
};

const getSoulmateUser = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);

    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.log('Error getting the soulmate user', error);
  }
};

export default { storeSoulmateUser, getSoulmateUser };
