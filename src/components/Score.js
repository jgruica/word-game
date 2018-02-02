import React, { Component } from 'react'
import _ from 'lodash'

function wordScore(word) {
  return word.length < 3 ? 0 : word.length - 2
}

class Score extends Component {
  render() {
    return (
      <div className="score">
        <table className="scoreTable">
          <tbody>
            <tr>
              <th>POINTS</th>
            </tr>
            <tr>
              <td> {_.sumBy(this.props.words, word => wordScore(word))} </td>
            </tr>
          </tbody>
        </table>

      </div>
    )
  }
}

export default Score