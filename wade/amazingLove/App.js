import { StyleSheet, Text, View } from 'react-native';

import CommunityScreen from './src/screens/CommunityScreen';
import MainScreen from './src/screens/MainScreen';
import MapComponent from './src/components/MapComponent';
import MyProfileScreen from './src/screens/MyProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import ScreenContainer from './src/components/ScreenContainer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ScreenContainer style={styles.container}>
      <NavigationContainer>
        {/* <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Main' component={MainScreen} />
          <Stack.Screen name='Map' component={MapComponent} />
        </Stack.Navigator> */}

        <Tab.Navigator>
          <Tab.Screen name='Us' component={MainScreen} />
          <Tab.Screen name='Community' component={CommunityScreen} />
          <Tab.Screen name='Profile' component={MyProfileScreen} />
        </Tab.Navigator>
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
