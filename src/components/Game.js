import React, { Component } from 'react'
import Board from './Board'
import Timer from './Timer'
import ListOfWords from './ListOfWords'
import Score from './Score'
import WordSubmit from './WordSubmit'
import GameOver from './GameOver'
import _ from 'lodash'
import { wordScore } from '../utilities'

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      board: this.generateRandomBoard(),
      word: '',
      words: [],
      gaveOver: false
    };
  }

  generateRandomBoard() {
    const diceCombinations = [
      'AAEEGN', 'ABBJOO', 'ACHOPS', 'AFFKPS',
      'AOOTTW', 'CIMOTU', 'DEILRX', 'DELRVY',
      'DISTTY', 'EEGHNW', 'EEINSU', 'EHRTVW',
      'EIOSST', 'ELRTTY', 'HIMNUQ', 'HLNNRZ'
    ]

    const randomPickCharacter = string => string[Math.floor(Math.random() * string.length)]

    const diceLayout = diceCombinations.map(randomPickCharacter)
    const shuffledArray = _.shuffle(diceLayout)
    return _.chunk(shuffledArray, 4)
      .map(characters => characters.join(''))
  }

  handleChange = (e) => {
    this.setState({ word: e.target.value.toUpperCase() });
  }

  submitWord = (e) => {
    const inputWord = this.state.word
    this.setState(prevState => {
      return {
        word: '',
        words: _.concat(prevState.words, {
          word: inputWord,
          score: wordScore(inputWord)
        })
      }
    })
  }

  handleKeyPress = (e) => {
    const inputWord = this.state.word
    if (e.key === 'Enter') {
      if (this.checkIsWordOnBoard(inputWord)) {
        this.setState(prevState => {
          return {
            word: '',
            words: _.concat(prevState.words, {
              word: inputWord,
              score: wordScore(inputWord)
            })
          }
        })
      }
    }

  }

  timeIsOver = () => {
    this.setState(prevState => {
      return {
        gameOver: true
      }
    })
  }

  checkIsWordOnBoard = (word) => {
    const board = this.state.board
    let visited;

    function containsWordRecursion(word, i, j) {
      if (word.length === 0) {
        return true
        //out of the border
      } else if (i < 0 || i >= board.length) {
        return false
        //out of the border
      } else if (j < 0 || j >= board[i].length) {
        return false
        //first word is not on border
      } else if (visited[i][j]) {
        return false
      } else if (word[0] !== board[i][j]) {
        return false
      } else {
        visited[i][j] = true
        const wordRest = word.slice(1)
        return containsWordRecursion(wordRest, i + 1, j) ||
          containsWordRecursion(wordRest, i - 1, j) ||
          containsWordRecursion(wordRest, i, j + 1) ||
          containsWordRecursion(wordRest, i, j - 1) ||
          containsWordRecursion(wordRest, i + 1, j + 1) ||
          containsWordRecursion(wordRest, i + 1, j - 1) ||
          containsWordRecursion(wordRest, i - 1, j + 1) ||
          containsWordRecursion(wordRest, i - 1, j - 1)
      }
    }

    for (let i = 0; i < board.length; ++i) {
      for (let j = 0; j < board[i].length; ++j) {
        visited = [
          [false, false, false, false],
          [false, false, false, false],
          [false, false, false, false],
          [false, false, false, false]
        ]
        if (containsWordRecursion(word, i, j)) {
          return true
        }
      }
    }

    return false
  }



  render() {
    return (
      <div className='game'>
        <div className='game-board'>
          <Timer timeIsOver={this.timeIsOver} />
          <ListOfWords words={this.state.words} currentScore={this.state.currentScore} />
          <Score words={this.state.words} />
          <Board board={this.state.board} />
          <WordSubmit word={this.state.word} words={this.state.words} handleChange={this.handleChange} submitWord={this.submitWord} handleKeyPress={this.handleKeyPress} scoreResult={this.scoreResult} />
          {this.state.gameOver && <GameOver />}
        </div>
      </div>
    )
  }
}

export default Game;

