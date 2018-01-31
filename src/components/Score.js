import React, { Component } from 'react'


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
              <td> {this.props.score} </td>
            </tr>
          </tbody>
        </table>

      </div>
    )
  }
}

export default Score