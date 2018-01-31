import React, { Component } from 'react'
import ReactCountdownClock from 'react-countdown-clock'

class Timer extends Component {
  render() {
    return (
      <div className="timer">
        <ReactCountdownClock seconds={120}
          color="#3e8bd9"
          alpha={0.9}
          size={200}
        />
      </div>
    )
  }
}

export default Timer