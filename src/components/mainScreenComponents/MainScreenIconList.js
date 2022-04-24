import { StyleSheet, Text, View } from 'react-native';

import IconItem from '../IconItem';
import colors from '../../../config/colors';
import { useNavigation } from '@react-navigation/native';

const MainScreenIconList = (props) => {
  const navigation = useNavigation();
  // icons list for main screen
  const iconList = [
    { title: 'Home', name: 'home-account' },
    { title: 'Tic Tac Toe', name: 'gamepad-variant' },
    { title: 'Chat', name: 'message-text' },
    { title: 'Dairies', name: 'book-open-variant' },
    { title: 'Map', name: 'map' },
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
          onPress={() => navigation.push(icon.title)}
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
