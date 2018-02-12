import React, { Component } from 'react'

class Reset extends Component {

  render() {
    return (
      <div className="reset">
            <button onClick={this.props.resetGame}>  RESET GAME </button>
      </div>
    )
  }
}

export default Reset