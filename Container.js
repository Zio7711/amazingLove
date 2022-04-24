// window.navigator.userAgent = 'react-native';

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import AppNavigator from "./src/navigation/AppNavigator";
import LinkSoulmateScreen from "./src/screens/LinkSoulmateScreen";
import LoginScreen from "./src/screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { apiCallBegan } from "./src/store/apiActions";
import authApi from "./api/authApi";
import authStorage from "./auth/authStorage";
import coupleApi from "./api/coupleApi";
import { io } from "socket.io-client/dist/socket.io";
import { setSocket } from "./src/store/globalSlice";

export default function Container() {
  const { user, isLoading } = useSelector((state) => state.global);

  const dispatch = useDispatch();

  const autoLoginFunction = async () => {
    const token = await authStorage.getToken();
    // if there is token, auto login
    if (token) {
      dispatch(apiCallBegan(authApi.autoLogin()));
    }
  };

  // const getCouple = async () => {
  //   const result = await coupleApi.getCoupleById(user._id);
  //   if (!result.ok) return alert(result.data.message);
  //   setCouple(result.data.couple);
  // };

  useEffect(() => {
    autoLoginFunction();

    const socketIo = io.connect("http://192.168.0.183:5000");
    // setSocket(socketIo);
    dispatch(setSocket(socketIo));

    return () => socketIo.disconnect();
  }, []);

  useEffect(() => {
    if (user) {
      dispatch(apiCallBegan(coupleApi.getCoupleById(user._id)));
    }
  }, [user]);

  return (
    <NavigationContainer>
      {!user ? (
        <LoginScreen />
      ) : user.soulmate ? (
        <AppNavigator />
      ) : (
        <LinkSoulmateScreen />
      )}
    </NavigationContainer>
  );
}
