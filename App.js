// window.navigator.userAgent = 'react-native';

import { Button, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';

import AppNavigator from './src/navigation/AppNavigator';
import AuthContext from './auth/context';
import LinkSoulmateScreen from './src/screens/LinkSoulmateScreen';
import LoginScreen from './src/screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import authApi from './api/authApi';
import authStorage from './auth/authStorage';
import coupleApi from './api/coupleApi';
import { io } from 'socket.io-client/dist/socket.io';

export default function App() {
  const [user, setUser] = useState(null);
  const [socket, setSocket] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [couple, setCouple] = useState(null);

  const autoLoginFunction = async () => {
    const token = await authStorage.getToken();
    if (token) {
      const result = await authApi.autoLogin();
      if (!result.ok) return;
      setUser(result.data.user);
    }
  };

  const handleLogout = async () => {
    await authStorage.removeToken();
    setUser(null);
  };

  const getCouple = async () => {
    const result = await coupleApi.getCoupleById(user._id);
    if (!result.ok) return alert(result.data.message);
    setCouple(result.data.couple);
  };

  useEffect(() => {
    autoLoginFunction();
    const socketIo = io.connect('http://192.168.0.183:5000');
    setSocket(socketIo);

    return () => socketIo.disconnect();
  }, []);

  useEffect(() => {
    if (user) {
      getCouple();
    }
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        socket,
        setIsLoading,
        isLoading,
        couple,
        setCouple,
      }}
    >
      <NavigationContainer>
        {!user ? (
          <LoginScreen />
        ) : user.soulmate ? (
          <AppNavigator />
        ) : (
          <LinkSoulmateScreen />
        )}
      </NavigationContainer>
      {user?.soulmate && <Button title='Logout' onPress={handleLogout} />}
    </AuthContext.Provider>
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
