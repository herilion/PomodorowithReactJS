import React from "react";
import up from '../assets/up.svg';
import down from '../assets/down.svg';
import '../styles/style.css';
const SessionLength = (props) => {
    return (
        <section>
            <h4>Length Session</h4>
            <section className="intervalContainer">
                <img src={down} alt="button down" />
                <p className="intervalLength">{props.sessionLength}</p>
                <img src={up} alt="button up" />
            </section>
        </section>

    );
}


export default SessionLength;
