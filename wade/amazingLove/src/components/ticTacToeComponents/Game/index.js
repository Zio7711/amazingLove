import {
  AI_FIGURE,
  DRAW,
  EMPTY,
  USER_FIGURE,
  VICTORY_CONDITIONS,
} from './constants';
import React, { Component } from 'react';

import Board from './Board';
import TicTacToe from 'tictactoe-agent';
import { View } from 'react-native';

export default class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      board: [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
      player: true,
    };
  }

  _populateTile(index, figure, onFinish = (f) => f) {
    if (this.state.board[index] !== EMPTY) {
      return;
    }

    const board = [...this.state.board];
    board[index] = figure;

    this.setState(
      {
        board,
      },
      () => {
        const result = this._judgeWinner();

        if (result !== null) {
          this.props.onFinish(result);
        }

        onFinish();
      }
    );
  }

  _AIAct() {
    const input = this.state.board.join('');
    const model = new TicTacToe.Model(input, AI_FIGURE);
    const recommendation = model.getRecommendation();

    this._populateTile(recommendation.index, AI_FIGURE);
  }

  _judgeWinner() {
    if (!this.state.board.some((figure) => figure === EMPTY)) {
      return DRAW;
    }

    let winner = null;
    for (let i = 0; i < VICTORY_CONDITIONS.length; ++i) {
      let figure = this.state.board[VICTORY_CONDITIONS[i][0]];

      if (
        VICTORY_CONDITIONS[i].every((tile) => this._checkTile(tile, figure))
      ) {
        winner = figure;
        break;
      }
    }

    return winner;
  }

  _checkTile(tile, figure) {
    return (
      this.state.board[tile] === figure && this.state.board[tile] !== EMPTY
    );
  }

  _clearField() {
    this.setState({
      board: [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
    });
  }

  _handlePress = (index) => {
    // this._populateTile(index, USER_FIGURE, () => this._AIAct());
    const figure = this.state.player ? USER_FIGURE : AI_FIGURE;

    this._populateTile(index, figure);
    //set state player to false
    this.setState({
      player: !this.state.player,
    });
  };

  render() {
    return (
      <View>
        <Board board={this.state.board} onPress={this._handlePress} />
      </View>
    );
  }
}
