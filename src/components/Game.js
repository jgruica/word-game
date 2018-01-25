import React, { Component } from 'react';
import Board from './Board';
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
            <Board />
            BLAA
          </div>
        </div>
  
      )
  }
}

export default Game;

