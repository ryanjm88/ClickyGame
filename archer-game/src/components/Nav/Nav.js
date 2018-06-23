import React from "react";
import "./Nav.css";

const Nav = props => (
    <nav>
        <ul>
            <li className="brand animated lightSpeedIn">
                <a href="/clicky-game/">{props.title}</a>
            </li>
        
        <li id="ans">{props.answered}</li>

        <li id="cur-sco">Current Score: {props.score}</li>

        <li id="top-sco">Top Score: {props.topScore}</li>
    </ul>
</nav>
);

export default Nav;