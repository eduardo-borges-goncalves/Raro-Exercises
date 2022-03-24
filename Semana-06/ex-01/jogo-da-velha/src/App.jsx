import { useEffect, useState } from 'react';
import { Result } from './components/Result/Result';
import './App.css';
import { Game } from './components/Game';

let counter = 1  
let winner = "" 

function App() {
  let objGame = { g1: "", g2: "", g3: "", g4: "", g5: "", g6: "", g7: "", g8: "", g9: ""}

  const [objGameState, setObjGameState] = useState(objGame)
  const [classNameResult, setClassNameResult] = useState("areaHidden")

  let won = 
    objGameState.g1 === objGameState.g2 && objGameState.g1 === objGameState.g3 && ((objGameState.g1 && objGameState.g2 && objGameState.g3) !== "") ||
    objGameState.g4 === objGameState.g5 && objGameState.g4 === objGameState.g6 && ((objGameState.g4 && objGameState.g5 && objGameState.g6) !== "") ||
    objGameState.g7 === objGameState.g8 && objGameState.g7 === objGameState.g9 && ((objGameState.g7 && objGameState.g8 && objGameState.g9) !== "") ||
    objGameState.g1 === objGameState.g4 && objGameState.g1 === objGameState.g7 && ((objGameState.g1 && objGameState.g4 && objGameState.g7) !== "") ||
    objGameState.g2 === objGameState.g5 && objGameState.g2 === objGameState.g8 && ((objGameState.g2 && objGameState.g5 && objGameState.g8) !== "") ||
    objGameState.g3 === objGameState.g6 && objGameState.g3 === objGameState.g9 && ((objGameState.g3 && objGameState.g6 && objGameState.g9) !== "") ||
    objGameState.g1 === objGameState.g5 && objGameState.g1 === objGameState.g9 && ((objGameState.g1 && objGameState.g5 && objGameState.g9) !== "") ||
    objGameState.g3 === objGameState.g5 && objGameState.g3 === objGameState.g7 && ((objGameState.g3 && objGameState.g5 && objGameState.g7) !== "")

  function xOrBow (event) {
    let key = event.target.align
    if (counter % 2 === 0 && objGameState[key] === "" && !won) {
      setObjGameState({ ...objGameState, [key]: "O" })
      counter += 1;
    } else if ( objGameState[key] === "" && !won ) {
      setObjGameState({ ...objGameState, [key]: "X" })
      counter += 1
    }
  }

  function newGameFunction () {
     setObjGameState(objGame)
     setClassNameResult('areaHidden')
  }

  useEffect(()=> {
    counter % 2 !== 0? winner = "Bola": winner= "X"
    won && setClassNameResult('newGame')
    counter = 1
    console.log(counter)
  },[won])

  return (
    <div className="App">

      <div className="container">
          <Game xOrBow={xOrBow} objGameState={objGameState} />
          <Result 
            classNameResult={classNameResult} 
            winner={winner}
            newGameFunction={newGameFunction} />
      </div>
    </div>
  );
}

export default App;
