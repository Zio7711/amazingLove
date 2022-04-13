import { StyleSheet, Text, View } from 'react-native';

import MainScreenIconItem from './MainScreenIconItem';

const MainScreenIconList = () => {
  return (
    <View style={styles.container}>
      <MainScreenIconItem
        name='home-account'
        size={40}
        color={'black'}
        title={'Home'}
      />
      <MainScreenIconItem
        name='gamepad-variant'
        size={40}
        color={'black'}
        title={'Games'}
      />
      <MainScreenIconItem
        name='message-text'
        size={40}
        color={'black'}
        title={'Chat'}
      />
      <MainScreenIconItem
        name='book-open-variant'
        size={40}
        color={'black'}
        title={'Dairies'}
      />
      <MainScreenIconItem
        name='account'
        size={40}
        color={'black'}
        title={'Me'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 50,
  },
});
export default MainScreenIconList;
