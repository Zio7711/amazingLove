import { StyleSheet, Text, View } from 'react-native';

import MainScreen from './src/screens/MainScreen';
import MapComponent from './src/components/MapComponent';
import { NavigationContainer } from '@react-navigation/native';
import ScreenContainer from './src/components/ScreenContainer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ScreenContainer style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Main' component={MainScreen} />
          <Stack.Screen name='Map' component={MapComponent} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <MapComponent /> */}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
