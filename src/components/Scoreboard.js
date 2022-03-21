import React, { useEffect, useState } from "react";

function Scoreboard(props){

    const [highscore, setHighscore] = useState(0);

    useEffect(()=>{
        if(props.score > highscore){
            setHighscore(props.score);
        }
    }, [highscore, setHighscore, props.score])

    return(
        <div className="scoreboard">
            <h2>High Score: {highscore}</h2>
            <h2>Score: {props.score}</h2>
        </div>
        
    )
}

export default Scoreboard