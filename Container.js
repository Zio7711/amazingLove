// window.navigator.userAgent = 'react-native';

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import ActivityIndicator from "./src/components/ActivityIndicator";
import AppLoading from "expo-app-loading";
import AppNavigator from "./src/navigation/AppNavigator";
import LinkSoulmateScreen from "./src/screens/LinkSoulmateScreen";
import LoginScreen from "./src/screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import { apiCallBegan } from "./src/store/apiActions";
import authApi from "./api/authApi";
import authStorage from "./auth/authStorage";
import coupleApi from "./api/coupleApi";
// import { io } from "socket.io-client/dist/socket.io";
import io from "socket.io-client";
import { setSocket } from "./src/store/globalSlice";

export default function Container() {
  const { user, isLoading } = useSelector((state) => state.global);
  const [isReady, setIsReady] = useState(false);

  const dispatch = useDispatch();

  const autoLoginFunction = async () => {
    const token = await authStorage.getToken();
    // if there is token, auto login
    if (token) {
      dispatch(apiCallBegan(authApi.autoLogin()));
    }
  };

  useEffect(() => {
    // autoLoginFunction();

    // const socketIo = io.connect("http://192.168.0.183:5000");
    const socketIo = io.connect("http://10.155.19.5:5000");

    dispatch(setSocket(socketIo));

    return () => socketIo.disconnect();
  }, []);

  useEffect(() => {
    if (user) {
      dispatch(apiCallBegan(coupleApi.getCoupleById(user._id)));
    }
  }, [user]);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={autoLoginFunction}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }
  return (
    <>
      {!isReady ? (
        <AppLoading
          startAsync={autoLoginFunction}
          onFinish={() => setIsReady(true)}
          onError={console.warn}
        />
      ) : (
        <>
          <ActivityIndicator visible={isLoading} />
          <NavigationContainer>
            {!user ? (
              <LoginScreen />
            ) : user.soulmate ? (
              <AppNavigator />
            ) : (
              <LinkSoulmateScreen />
            )}
          </NavigationContainer>
        </>
      )}
    </>
  );
}
