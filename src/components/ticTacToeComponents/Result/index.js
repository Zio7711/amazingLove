import { AI_FIGURE, DRAW, USER_FIGURE } from '../Game/constants';
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class Result extends Component {
  _getResultMessage() {
    const { result } = this.props;

    switch (result) {
      case USER_FIGURE:
        return 'Player won the game';
      case AI_FIGURE:
        return 'AI won the game';
      case DRAW:
        return 'Draw';
    }
  }
  render() {
    const { onRestartGameBtnClick } = this.props;

    return (
      <View>
        <Text style={styles.result}>{this._getResultMessage()}</Text>
        <TouchableOpacity onPress={onRestartGameBtnClick}>
          <Text style={styles.instructions}>Touch here to play again</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  result: {
    fontSize: 24,
    margin: 18,
    textAlign: 'center',
  },
  instructions: {
    textAlign: 'center',
    color: 'grey',
  },
});
