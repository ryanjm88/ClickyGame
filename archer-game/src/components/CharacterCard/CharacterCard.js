import React from "react";
import "./CharacterCard.css";
import Column from "../../Column";

const CharacterCard = props => (
    <Column size="md-3 sm-6">
    <div
        className="card"
        onClick={() => props.handleClick(props.id)}
    >
    <div className="img-container">
        <img alt ={props.className} src={props.image} />
    </div>
    </div>
    </Column>
);

export default CharacterCard;