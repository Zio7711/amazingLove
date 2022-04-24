import {
  Button,
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import MainScreenCenter from '../components/mainScreenComponents/MainScreenCenter';
import MainScreenIconList from 'components/mainScreenComponents/MainScreenIconList';
import { apiCallBegan } from '../store/apiActions';
import { useEffect } from 'react';

const MainScreen = (props) => {
  // const dispatch = useDispatch();
  // const test = useSelector((state) => state.user);

  // useEffect(() => {
  //   dispatch(
  //     apiCallBegan({
  //       url: '/auth/autoLogin',
  //       method: 'get',
  //       onSuccess: 'user/userReceived',
  //     })
  //   );
  // }, []);

  return (
    <>
      <ImageBackground
        style={styles.background}
        source={require('assets/pics/background.jpg')}
      ></ImageBackground>
      <ScrollView>
        <View style={styles.container}>
          <MainScreenCenter />
          <MainScreenIconList />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    bottom: 0,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    position: 'absolute',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('window').height - 60,
  },
});
export default MainScreen;
