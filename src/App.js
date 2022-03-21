import { useState } from 'react';
import './App.css';
import CardsContainer from './components/CardsContainer';
import Header from './components/Header';

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
      <Header score={clicked.length}/>
      <CardsContainer updateClicked={updateClicked}/>
    </div>
  );
}

export default App;
