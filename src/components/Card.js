import React from "react";

function Card(props){
    return(
        <button onClick={props.playerClicked}className="card">
            <img className="card-image" alt={props.title} src={props.image}></img>
            <h4 className="card-title">{props.title}</h4>
        </button>
    )
}

export default Card