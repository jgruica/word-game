import React, { Component } from 'react'
import Dice from './Dice'

class Board extends Component {
    constructor(props) {
        super(props)
  }

  render() {
    return (
      <div class="board">
          <Dice />
      </div>
    )
  }
}

export default Board