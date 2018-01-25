import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './index.css'
import Game from './components/Game'

class App extends Component {
  render () {
    return (
      <div className='app'>
        <div className='app-header'>
          <h1> Boggle </h1>
        </div>
        <div className='main-game'>
          <Game />
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)