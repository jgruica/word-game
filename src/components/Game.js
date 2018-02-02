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

  

  timeIsOver = () => {
    this.setState(prevState => {
      return {
        gameOver: true
      }
    })
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

