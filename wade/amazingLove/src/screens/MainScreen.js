import { StyleSheet, Text, View } from 'react-native';

import MainScreenIconList from '../components/MainScreenIconList';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <MainScreenIconList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 50,
  },
});

export default MainScreen;
