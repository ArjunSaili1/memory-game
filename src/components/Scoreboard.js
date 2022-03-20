import React, { useEffect, useState } from "react";

function Scoreboard(props){

    const [highscore, setHighscore] = useState(0);

    useEffect(()=>{
        if(props.score > highscore){
            setHighscore(props.score);
        }
    }, [highscore, setHighscore, props.score])

    return(
        <div>
            <h4>Score: {props.score}</h4>
            <h4>Highscore: {highscore}</h4>
        </div>
        
    )
}

export default Scoreboard