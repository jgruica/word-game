import React, { Component } from 'react'

class Board extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div class="board">
        <table>
          <tbody>
            <tr>
              <td><button> 1 </button></td>
              <td><button> 1 </button></td>
              <td><button> 1 </button></td>
              <td><button> 1 </button></td>
            </tr>
            <tr>
              <td><button> 1 </button></td>
              <td><button> 1 </button></td>
              <td><button> 1 </button></td>
              <td><button> 1 </button></td>
            </tr>
            <tr>
              <td><button> 1 </button></td>
              <td><button> 1 </button></td>
              <td><button> 1 </button></td>
              <td><button> 1 </button></td>
            </tr>
            <tr>
              <td><button> 1 </button></td>
              <td><button> 1 </button></td>
              <td><button> 1 </button></td>
              <td><button> 1 </button></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Board