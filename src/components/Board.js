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
                  <td key={columnIndex}><button onMouseDown={e => this.props.onMouseDownOnBoard(rowIndex, columnIndex)} onMouseEnter={e => this.props.onMouseDownHover(rowIndex, columnIndex)} onMouseUp={e => this.props.onMouseUpOnBoard(rowIndex, columnIndex)}> {column} </button></td>
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