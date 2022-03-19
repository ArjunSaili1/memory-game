import React, { useState } from "react";
import Card from "./Card";
import playersObj from "../assets/index";

function CardsContainer(props){

    const [players, setPlayers] = useState(playersObj)

    const playerClicked = (e) => {
        props.updateClicked(e.target.alt);
        shufflePlayers();
    }

    const shufflePlayers = () => {
        let playersCopy = players;
        let current = playersCopy.length;
        let randomIndex;
        while(current !== 0){
            randomIndex = Math.floor(Math.random()* current);
            current--;
            [playersCopy[current], playersCopy[randomIndex]] = [playersCopy[randomIndex], playersCopy[current]]
        }
        setPlayers([...playersCopy]);
    }

    return(
        <div className="card-outer-container">
            <div className="card-container">
                {players.map((player)=>{
                    return <Card key={player.name} playerClicked={playerClicked} image={player.image} title={player.name}/>
                })}
            </div>
        </div>
    )
}

export default CardsContainer;