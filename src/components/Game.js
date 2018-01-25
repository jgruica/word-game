import React, { Component } from 'react'
import Board from './Board'
import Score from './Score'
import WordSubmit from './WordSubmit'

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    };
  };

  render() {
    return (
        <div className='game'>
          <div className='game-board'>
            <Score />
            <Board />
            <WordSubmit />
          </div>
        </div>
  
      )
  }
}

export default Game;

