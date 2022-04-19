import Constants from 'expo-constants';

const settings = {
  dev: {
    apiUrl: 'http://localhost:5000/api/v1',
  },
  staging: {
    apiUrl: 'http://localhost:5000/api/v1',
  },
  prod: {
    apiUrl: 'http://localhost:5000/api/v1',
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === 'staging') return settings.staging;
  return settings.prod;
};

export default getCurrentSettings();
