import { StyleSheet, Text, View } from 'react-native';

import AppScreen from '../AppScreen';
import IconItem from '../IconItem';
import colors from '../../../config/colors';

const MainScreenIconList = () => {
  const iconList = [
    { title: 'Home', name: 'home-account' },
    { title: 'Games', name: 'gamepad-variant' },
    { title: 'Chat', name: 'message-text' },
    { title: 'Dairies', name: 'book-open-variant' },
    { title: 'me', name: 'account' },
  ];

  return (
    <View style={styles.container}>
      {iconList.map((icon, index) => (
        <IconItem
          title={icon.title}
          key={index}
          size={40}
          name={icon.name}
          iconColor={'black'}
          backgroundColor={colors.primary}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 50,
    flexWrap: 'wrap',
  },
});
export default MainScreenIconList;
