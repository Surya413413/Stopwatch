// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {runningTime: false, seconds: 0, minutes: 0}

  onStart = () => {
    const {runningTime, seconds, minutes} = this.state
    this.timeId = setInterval(this.updateTime, 1000)
    this.setState({runningTime: true})
  }

  updateTime = () => {
    this.setState(privious => ({
      seconds: privious.seconds + 1,
    }))
  }

  setSeconds = () => {
    const {seconds} = this.state
    const secondsCount = Math.floor(seconds % 60)

    if (secondsCount < 10) {
      return `0${secondsCount}`
    }
    return secondsCount
  }

  setMintues = () => {
    const {minutes} = this.state
    const minutesCount = Math.floor(minutes % 60)

    if (minutesCount < 10) {
      return `0${minutesCount}`
    }
    return minutesCount
  }

  onStop = () => {
    clearInterval(this.timeId)
    this.setState({runningTime: false})
  }

  onreset = () => {
    this.setState({runningTime: false, seconds: 0})
  }

  componentWillUnmount() {
    clearInterval(this.timeId)
  }
  render() {
    const {seconds, minutes, runningTime} = this.state

    return (
      <div className="app-container">
        <div className="second-container">
          <h1 className="heading-style">Stopwatch</h1>
          <div className="third-container">
            <div className="timer-img-container">
              <img src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png" alt="stopwatch"/>
              <p>Timer</p>
            </div>
            <h1>
              {this.setMintues()}:{this.setSeconds()}
            </h1>
            <div className="button-container">
              <button
                className="start-button"
                type="button"
                onClick={this.onStart}
                disabled={runningTime}
              >
                Start
              </button>
              <button
                className="stop-button"
                type="button"
                onClick={this.onStop}
              >
                Stop
              </button>
              <button
                className="reset-button"
                type="button"
                onClick={this.onreset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
