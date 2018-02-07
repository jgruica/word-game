import React, { Component } from 'react'

class WordSubmit extends Component {

  render() {
    return (
      <div className="word-submit">
        <input type="text" value={this.props.word} onChange={this.props.handleChange} onKeyPress={this.props.handleKeyPress} placeholder="Enter a term..."/> <br/>
        <button  className="submitBtn" onClick={this.props.submitWord} > SUBMIT </button>
      </div>
    )
  }
}

export default WordSubmit