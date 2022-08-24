import React from "react";
import up from '../assets/up.svg';
import down from '../assets/down.svg';
import '../styles/style.css';
const SessionLength = (props) => {
    return (
        <section className="intervalContainer">
            <img src={down} alt="button down" />
            <p>{props.sessionLength}</p>
            <img src={up} alt="button up" />
        </section>
    );
}

export default SessionLength;
