import { Button, StyleSheet, Text, View } from 'react-native';

import MainScreenCenter from '../components/mainScreenComponents/MainScreenCenter';
import MainScreenIconList from '../components/mainScreenComponents/MainScreenIconList';
import ScreenContainer from '../components/ScreenContainer';

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <MainScreenCenter />
      <MainScreenIconList />
      <Button title='Go to Map' onPress={() => navigation.navigate('Map')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default MainScreen;
