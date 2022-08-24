import React from "react";
import up from '../assets/up.svg';
import down from '../assets/down.svg';
import '../styles/style.css';
const BreackInterval = (props) => {
    const decrease = () => {

    }
    return (
        <section>
            <h4>Break Length</h4>
            <section className="intervalContainer">
                <img src={down} alt="button down" onClick={decrease} />
                <p className="intervalLength">{props.breakInterval}</p>
                <img src={up} alt="button up" onClick={increase} />
            </section>
        </section>

    );
}

export default BreackInterval;