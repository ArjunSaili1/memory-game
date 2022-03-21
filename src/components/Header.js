import React from "react";
import Scoreboard from "./Scoreboard";

function Header(props){
    return(
        <div className="header">
            <h1 className="title">NBA Legends Memory Game</h1>
            <Scoreboard score={props.score}/>
        </div>
    )
}

export default Header