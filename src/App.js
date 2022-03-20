import { useState } from 'react';
import './App.css';
import CardsContainer from './components/CardsContainer';
import Scoreboard from './components/Scoreboard';

function App() {

  const [clicked, setClicked] = useState([]);

  const updateClicked = (player) => {
    if(clicked.includes(player)){
      setClicked([]);
    }
    else{
      setClicked([...clicked, player])
    }
  }

  return (
    <div className="App">
      <CardsContainer updateClicked={updateClicked}/>
      <Scoreboard score={clicked.length}/>
    </div>
  );
}

export default App;
