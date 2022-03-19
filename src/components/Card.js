import React from "react";

function Card(props){
    return(
        <button className="card">
            <img alt={props.title} src={props.image}></img>
            <h4>{props.title}</h4>
        </button>
    )
}

export default Card