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
      words: [],
      score: 0
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

  scoreResult = () => {
    if(this.state.word.length === 3) {
      this.state.score += 1;
    }
    if(this.state.word.length === 4) {
      this.state.score += 2;
    }
    if(this.state.word.length === 5) {
      this.state.score += 3;
    }
    if(this.state.word.length === 6) {
      this.state.score += 4;
    }
    if(this.state.word.length === 7) {
      this.state.score += 5;
    }

    this.setState({score: this.state.score})
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
    this.scoreResult()
  }


  render() {
    return (
      <div className='game'>
        <div className='game-board'>
          <Timer />
          <ListOfWords words={this.state.words} />
          <Score word={this.state.word}  score={this.state.score} scoreResult={this.scoreResult}/>
          <Board board={this.state.board} />
          <WordSubmit word={this.state.word} words={this.state.words} handleChange={this.handleChange} submitWord={this.submitWord} scoreResult={this.scoreResult} />
        </div>
      </div>

    )
  }
}

export default Game;

