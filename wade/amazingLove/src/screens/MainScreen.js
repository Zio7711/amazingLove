import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import MainScreenCenter from '../components/mainScreenComponents/MainScreenCenter';
import MainScreenIconList from '../components/mainScreenComponents/MainScreenIconList';
import ScreenContainer from '../components/ScreenContainer';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <MainScreenCenter />
      <MainScreenIconList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 50,
  },
});

export default MainScreen;
