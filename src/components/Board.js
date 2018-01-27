import React, { Component } from 'react'

class Board extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="board">

        <table>
          <tbody>
            {this.props.board.map((row, rowIndex) => 
              <tr key={rowIndex}> 
                {row.split('').map((column, columnIndex) => 
                  <td key={columnIndex}><button> {column} </button></td>
                )}
              </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Board