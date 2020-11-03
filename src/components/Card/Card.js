import React, { Component } from 'react';
import './Card.css'

function Card(props) {
    return (
        <div className="MemeCard">
            <img src={props.url} alt={props.name} />
            <p>{props.name}</p>
        </div>
    );
}

export default Card;