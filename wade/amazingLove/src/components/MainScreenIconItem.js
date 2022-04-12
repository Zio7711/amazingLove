import { Dimensions, StyleSheet, Text, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const MainScreenIconItem = ({ name, size, color, title, ...otherConfig }) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name={name}
        size={size}
        color={color}
        {...otherConfig}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    margin: 5,
    height: 120,
    width: Dimensions.get('window').width / 6,
    backgroundColor: '#FF6347',
    borderRadius: 15,
  },

  title: {
    textAlign: 'center',
  },
});

export default MainScreenIconItem;
