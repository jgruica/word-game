import React, { Component } from 'react'
import ReactCountdownClock from 'react-countdown-clock'

class Timer extends Component {

  render() {
    return (
      <div className="timer">
        <ReactCountdownClock seconds={3}
          color="#3e8bd9"
          alpha={0.9}
          size={200}
          onComplete={this.props.timeIsOver}
        />
      </div>
    )
  }
}

export default Timer