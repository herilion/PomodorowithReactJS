import React from "react";
import play from "../assets/play.svg";
import pause from "../assets/pause.svg";
import rotate from "../assets/rotate.svg"

class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            isSession: true,
            timerSecond: 0

        }
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
                    <img src={play} alt="" />
                    <img src={rotate} alt="" />
                    <img src={pause} alt="" />

                </section>
            </section>

        );
    }
}
export default Timer;