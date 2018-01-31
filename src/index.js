import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Logo from './images/logo.png'
import Game from './components/Game'

class App extends Component {
  render() {
    return (
      <div className='boggle'>
        <img src={Logo} className="logo"  alt=""/>
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