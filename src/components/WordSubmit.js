import React, { Component } from 'react'

class WordSubmit extends Component {

  render() {
    return (
      <div className="word-submit">
        <input type="text" word={this.props.word} onChange={this.props.handleChange}/>
        <button onClick={this.props.submitWord} > SUBMIT WORD </button>
      </div>
    )
  }
}

export default WordSubmit