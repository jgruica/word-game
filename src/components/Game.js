import React, { Component } from 'react'
import Board from './Board'
import Timer from './Timer'
import ListOfWords from './ListOfWords'
import Score from './Score'
import WordSubmit from './WordSubmit'
import _ from 'lodash'

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      board: this.generateRandomBoard(),
      word: '',
      words: []
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
        words: _.concat(prevState.words, inputWord)
      }
    })

  }


  render() {
    return (
      <div className='game'>
        <div className='game-board'>
          <Timer />
          <ListOfWords words={this.state.words} />
          <Score />
          <Board board={this.state.board} />
          <WordSubmit word={this.state.word} words={this.state.words} handleChange={this.handleChange} submitWord={this.submitWord} />
        </div>
      </div>

    )
  }
}

export default Game;

