import React from 'react';
import BreackInterval from './composants/BreackInterval.js';
import SessionLength from './composants/SessionLength.js';
import Timer from './composants/Timer.js';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timerMinute: 25
    }
    this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this);
    this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this);
    this.onIncreaseSessionLength = this.onIncreaseSessionLength.bind(this);
    this.onDecreaseSessionLength = this.onDecreaseSessionLength.bind(this);
    this.onToggleIntervall = this.onToggleIntervall.bind(this);
    this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind(this);
    this.onResetTimer = this.onResetTimer.bind(this);
  }
  onIncreaseBreakLength() {
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength + 1
      }
    })
  }
  onDecreaseBreakLength() {
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength - 1,

      }
    })
  }
  onIncreaseSessionLength() {
    this.setState((prevState) => {
      return {
        sessionLength: prevState.sessionLength + 1,
        timerMinute: prevState.sessionLength + 1
      }
    })
  }
  onDecreaseSessionLength() {
    this.setState((prevState) => {
      return {
        sessionLength: prevState.sessionLength - 1,
        timerMinute: prevState.sessionLength - 1
      }
    })
  }
  onUpdateTimerMinute() {
    this.setState((prevState) => {
      return {
        timerMinute: prevState.timerMinute - 1
      }
    })
  }
  onToggleIntervall(isSession) {
    if (isSession) {
      this.setState({
        timerMinute: this.state.sessionLength
      })
    }
    else {
      this.setState({
        timerMinute: this.state.breakLength
      })
    }
  }
  onResetTimer() {
    this.setState({
      timerMinute: this.state.sessionLength
    })

  }

  render() {
    return (
      <main>
        <h2>Pomodoro Clock</h2>
        <section className='intervalLengthContainer'>
          <BreackInterval breakInterval={this.state.breakLength}
            increaseBreak={this.onIncreaseBreakLength}
            decreaseBreak={this.onDecreaseBreakLength} />
          <SessionLength sessionLength={this.state.sessionLength}
            increaseSession={this.onIncreaseSessionLength}
            decreaseSession={this.onDecreaseSessionLength}
          />
        </section>
        <Timer
          timerMinute={this.state.timerMinute}
          breakLength={this.state.breakLength}
          updateTimerMinute={this.state.onUpdateTimerMinute}
          toogleInterval={this.state.onToggleIntervall}
          resetTimer={this.onResetTimer}

        />
      </main>
    );
  }
}

export default App;

//8:59
