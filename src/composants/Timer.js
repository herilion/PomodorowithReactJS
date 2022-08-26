import React from "react";
import play from "../assets/play.svg";
import pause from "../assets/pause.svg";
import rotate from "../assets/rotate.svg"

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSession: true,
            timerSecond: 0,
            intervalId: 0
        };
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
        this.reset = this.reset.bind(this);
        this.decreaseTimer = this.decreaseTimer.bind(this);
    }
    play() {
        // if (this.props.timerMinute > 0) {
        let intervalId = setInterval(this.decreaseTimer, 1000);
        this.setState({
            intervalId: intervalId
        })
        // }
        // else if (this.props.timerMinute == 0 && this.props.timerSecond == 0) {
        //     this.pause()
        // }

    }
    decreaseTimer() {
        switch (this.state.timerSecond) {
            case 0:
                this.props.updateTimerMinute()
                this.setState({
                    timerSecond: 59
                })
                break;
            default:
                this.setState((prevState) => {
                    return {
                        timerSecond: prevState.timerSecond - 1
                    }
                })
                break;

        }
    }
    pause() {
        clearInterval(this.state.intervalId);
    }
    reset() {
        // this.pause();
        // this.props.resetTimer();
        // this.setState({
        //     timerSecond: 0,
        // })
        window.location.reload()
    }
    render() {
        return (
            <section>
                <section className="timerContainer">
                    <h4>{this.state.isSession === true ? "Session" : "Break"}</h4>
                    <span className="timer">{this.props.timerMinute}</span>
                    <span className="timer">:</span>
                    <span className="timer">{this.state.timerSecond === 0
                        ? "00"
                        : this.state.timerSecond < 10
                            ? "0" + this.state.timerSecond
                            : this.state.timerSecond}
                    </span>
                </section>
                <section className="timerAction">
                    <img src={play} alt="" onClick={this.play} />
                    <img src={rotate} alt="" onClick={this.reset} />
                    <img src={pause} alt="" onClick={this.pause} />

                </section>
            </section >

        );
    }
}
export default Timer;

// 57:55