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
  }
  render() {
    return (
      <main>
        <h2>Pomodoro Clock</h2>
        <section className='intervalLengthContainer'>
          <BreackInterval breakInterval={this.state.breakLength} />
          <SessionLength sessionLength={this.state.sessionLength} />
        </section>
        <Timer timerMinute={this.state.timerMinute} />
      </main>
    );
  }
}

export default App;

//8:59
