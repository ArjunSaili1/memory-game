import React from "react";
import Card from "./Card";
import players from "../assets/index";

function CardsContainer(props){

    return(
        <div className="card-outer-container">
            <div className="card-container">
                {players.map((player)=>{
                    return <Card key={player.name} image={player.image} title={player.name}/>
                })}
            </div>
        </div>
    )
}

export default CardsContainer;