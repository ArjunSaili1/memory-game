import { useState } from 'react';
import './App.css';
import CardsContainer from './components/CardsContainer';

function App() {

  const [clicked, setClicked] = useState([]);

  const updateClicked = (player) => {
    if(clicked.includes(player)){
      console.log("lose")
    }
    else{
      setClicked([...clicked, player])
      console.log(player)
    }
  }

  return (
    <div className="App">
      <CardsContainer updateClicked={updateClicked}/>
    </div>
  );
}

export default App;
