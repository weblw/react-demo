import React, { Component, Fragment } from 'react'
import MajorClock from './MajorClock'
import ControlButtons from './ControlButtons'
import SplitTimes from './SplitTimes'

export default class StopWatch extends Component {
  state = {
    isActivated: false,
    currentTime: 0,
    startTime: 0,
    splitTimes: []
  }
  onStart = () => {
    this.setState({
      startTime: new Date(),
      currentTime: new Date(),
      isActivated: true
    })
    this.intervalHandle = setInterval(() => {
      this.setState({
        currentTime: new Date()
      })
    }, 1000 / 60)
  }
  onPause = () => {
    clearInterval(this.intervalHandle)
    this.setState({
      isActivated: false
    })
  }
  onReset = () => {
    this.setState({
      currentTime: 0,
      startTime: 0,
      splitTimes: []
    })
  }
  onSplit = () => {
    this.setState({
      splitTimes: [...this.state.splitTimes, this.state.currentTime - this.state.startTime]
    })
  }
  render () {
    return (
      <Fragment>
        <MajorClock isActivated={ this.state.isActivated } milliseconds={ this.state.currentTime - this.state.startTime } />
        <ControlButtons 
          isActivated={ this.state.isActivated } 
          onStart={ this.onStart }
          onPause={ this.onPause }
          onReset={ this.onReset }
          onSplit={ this.onSplit }
        />
        <SplitTimes splitTimes={ this.state.splitTimes } />
      </Fragment>
    )
  }
}
