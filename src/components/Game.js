import React, { Component } from 'react'
import Board from './Board'
import Timer from './Timer'
import ListOfWords from './ListOfWords'
import Score from './Score'
import WordSubmit from './WordSubmit'
import GameOver from './GameOver'
import _ from 'lodash'

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      board: this.generateRandomBoard(),
      word: '',
      words: [],
      score: 0,
      currentScore: 0,
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

  scoreResult = () => {
    this.setState(prevState => {
      const currentScore = this.state.word.length < 3 ? 0 : this.state.word.length - 2
      return {
        currentScore,
        score: this.state.score + currentScore
      }
    })
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
          {this.state.gameOver === true ?
          <div>
            <GameOver />
            <ListOfWords words={this.state.words} currentScore={this.state.currentScore} />
              <Score word={this.state.word} score={this.state.score} scoreResult={this.scoreResult} />
              <Board board={this.state.board} />
              <WordSubmit word={this.state.word} words={this.state.words} handleChange={this.handleChange} submitWord={this.submitWord} scoreResult={this.scoreResult} />
            </div>
            
            :
            <div>
              <Timer timeIsOver={this.timeIsOver} />
              <ListOfWords words={this.state.words} currentScore={this.state.currentScore} />
              <Score word={this.state.word} score={this.state.score} scoreResult={this.scoreResult} />
              <Board board={this.state.board} />
              <WordSubmit word={this.state.word} words={this.state.words} handleChange={this.handleChange} submitWord={this.submitWord} scoreResult={this.scoreResult} />
        </div>}

        </div>
      </div>

    )
  }
}

export default Game;

