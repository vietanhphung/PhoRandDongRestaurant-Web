
import "./Card.css";
import React, { useState, createContext  } from "react";




 function Card(props){
    return (

<a className="menuCard" href={props.link}  style={{cursor:"pointer"}} >
    <img className="cardImg" src={props.image} ></img>
    <div className="cardName">{props.title}</div>
    <div className="cardDescription">{props.description}</div>
</a>
    )
};

export default Card;