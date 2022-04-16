import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native';

import MainScreenCenter from '../components/mainScreenComponents/MainScreenCenter';
import MainScreenIconList from 'components/mainScreenComponents/MainScreenIconList';

const MainScreen = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require('assets/pics/background.jpg')}
    >
      <View style={styles.container}>
        <MainScreenCenter />
        <MainScreenIconList />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default MainScreen;
