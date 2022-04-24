import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Game from '../components/ticTacToeComponents/Game';
import Result from '../components/ticTacToeComponents/Result';

const TicTacToeScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);

  handleGameFinish = (resultState) => {
    setResult(resultState);
  };

  handleGameRestart = () => {
    navigation.replace('Tic Tac Toe');
  };

  return (
    <View style={styles.container}>
      <View pointerEvents={result ? 'none' : 'auto'}>
        <Game onFinish={handleGameFinish} />
      </View>
      {result && (
        <Result result={result} onRestartGameBtnClick={handleGameRestart} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TicTacToeScreen;
