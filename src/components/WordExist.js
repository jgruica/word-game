import React, { Component } from 'react'

class WordExist extends Component {

  render() {
    return (
      <div className="exist-message">
      <br/>
        <div className="error-text">
          That word already exist
            </div>
      </div>
    )
  }
}

export default WordExist