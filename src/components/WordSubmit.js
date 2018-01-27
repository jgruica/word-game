import React, { Component } from 'react'

class WordSubmit extends Component {
    constructor(props) {
        super(props)
  }

  render() {
    return (
      <div className="word-submit">
        <input type="text" />
        <button> submit </button>
      </div>
    )
  }
}

export default WordSubmit