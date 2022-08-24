import React from "react";
import up from '../assets/up.svg';
import down from '../assets/down.svg';
import '../styles/style.css';
const SessionLength = (props) => {

    const increase = () => {
        if (props.sessionLength === 60) {
            return;
        }
        props.increaseSession();
    }
    const decrease = () => {
        if (props.sessionLength === 1) {
            return;
        }
        props.decreaseSession();
    }
    return (
        <section>
            <h4>Length Session</h4>
            <section className="intervalContainer">
                <img src={down} alt="button down" onClick={decrease} />
                <p className="intervalLength">{props.sessionLength}</p>
                <img src={up} alt="button up" onClick={increase} />
            </section>
        </section>

    );
}


export default SessionLength;
