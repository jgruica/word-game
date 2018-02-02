import React, { Component } from 'react'
import _ from 'lodash'

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
              <td> {_.sumBy(this.props.words, scoredWord => scoredWord.score)} </td>
            </tr>
          </tbody>
        </table>

      </div>
    )
  }
}

export default Score