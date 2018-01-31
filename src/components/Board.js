import React, { Component } from 'react'

class Board extends Component {
  render() {
    return (
      <div className="board">

        <table className="boardTable">
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