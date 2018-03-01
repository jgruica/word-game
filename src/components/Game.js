import React, { Component } from 'react'
import Board from './Board'
import Timer from './Timer'
import ListOfWords from './ListOfWords'
import Score from './Score'
import WordSubmit from './WordSubmit'
import GameOver from './GameOver'
import Error from './Error'
import WordExist from './WordExist'
import Reset from './Reset'
import _ from 'lodash'
import axios from 'axios'
import { wordScore } from '../utilities'

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      board: this.generateRandomBoard(),
      word: '',
      words: [],
      gameOver: false,
      dictionaryWords: [],
      errorMessage: false,
      wordExist: false,
      clickedOnBoard: false
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

  onMouseDownOnBoard = (row, column) => {
    this.setState({ 
      word: this.state.board[row][column],
      clickedOnBoard: true
    })
  }

  onMouseUpOnBoard = (row, column) => {
    this.setState({ clickedOnBoard: false})
    this.submitWord()
  }

  onMouseDownHover = (row, column) => {
    if (this.state.clickedOnBoard) {
      this.setState(prevState => { 
        return {
          word: prevState.word + this.state.board[row][column]
        }
      })  
    }
  } 

  onKeyDown = (e) => {
    if (e.keyCode === 8) {
      this.setState({
        errorMessage: false,
        wordExist: false
      })
    }
  }

  handleChange = (e) => {
    this.setState({ word: e.target.value.toUpperCase() });
  }

  checkWordInDictionary = () => {
    return axios.get('/dictionary', {
      params: {
        inputWord: this.state.word
      }
    })
  }

  submitWord = () => {
    const inputWord = this.state.word
    this.setState({
      errorMessage: false,
      wordExist: false
    })

    if (this.state.words.map(scoredWord => scoredWord.word).includes(inputWord)) {
      this.setState({
        word: '',
        wordExist: true
      })
    } else if (this.checkIsWordOnBoard(inputWord)) {
      this.checkWordInDictionary()
        .then((result) => {
          this.setState(prevState => {
            return {
              word: '',
              words: _.concat(prevState.words, {
                word: inputWord,
                score: wordScore(inputWord)
              })
            }
          })
        })
        .catch((error) => {
          this.setState({ errorMessage: true })
        })
    } else {
      this.setState({ errorMessage: true })
    }
  }

  handleKeyPress = (e) => {
    this.setState({
      errorMessage: false,
      wordExist: false
    })
    if (e.key === 'Enter') {
      this.submitWord()
    }
  }

  timeIsOver = () => {
    this.setState({ gameOver: true })
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

  resetGame = () => {
    window.location.reload()
  }

  render() {
    return (
      <div className='game' >
        <div className='game-board'>
          <Timer timeIsOver={this.timeIsOver} />
          <ListOfWords words={this.state.words} currentScore={this.state.currentScore} />
          <Score words={this.state.words} />
          <Board board={this.state.board} onMouseDownOnBoard={this.onMouseDownOnBoard} onMouseUpOnBoard={this.onMouseUpOnBoard} onMouseDownHover={this.onMouseDownHover}/>
          <WordSubmit word={this.state.word} words={this.state.words} handleChange={this.handleChange} onKeyDown={this.onKeyDown} submitWord={this.submitWord} handleKeyPress={this.handleKeyPress} scoreResult={this.scoreResult} />
          {this.state.gameOver &&
            <div>
              <GameOver />
              <Reset resetGame={this.resetGame} />
            </div>}
          {this.state.errorMessage && <Error />}
          {this.state.wordExist && <WordExist />}
        </div>
      </div>
    )
  }
}

export default Game;

