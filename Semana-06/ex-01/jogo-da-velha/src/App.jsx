import { useEffect, useState } from 'react';
import { Result } from './components/Result/Result';
import './App.css';
import { Game } from './components/Game';

let counter = 1  
let winner = "" 
let result = ""

function App() {
  let objGame = { g1: "", g2: "", g3: "", g4: "", g5: "", g6: "", g7: "", g8: "", g9: ""}

  const [gameState, setGameState] = useState(objGame)
  const [classNameResult, setClassNameResult] = useState("areaHidden")
  
  let won = 
    gameState.g1 === gameState.g2 && gameState.g1 === gameState.g3 && ((gameState.g1 && gameState.g2 && gameState.g3) !== "") ||
    gameState.g4 === gameState.g5 && gameState.g4 === gameState.g6 && ((gameState.g4 && gameState.g5 && gameState.g6) !== "") ||
    gameState.g7 === gameState.g8 && gameState.g7 === gameState.g9 && ((gameState.g7 && gameState.g8 && gameState.g9) !== "") ||
    gameState.g1 === gameState.g4 && gameState.g1 === gameState.g7 && ((gameState.g1 && gameState.g4 && gameState.g7) !== "") ||
    gameState.g2 === gameState.g5 && gameState.g2 === gameState.g8 && ((gameState.g2 && gameState.g5 && gameState.g8) !== "") ||
    gameState.g3 === gameState.g6 && gameState.g3 === gameState.g9 && ((gameState.g3 && gameState.g6 && gameState.g9) !== "") ||
    gameState.g1 === gameState.g5 && gameState.g1 === gameState.g9 && ((gameState.g1 && gameState.g5 && gameState.g9) !== "") ||
    gameState.g3 === gameState.g5 && gameState.g3 === gameState.g7 && ((gameState.g3 && gameState.g5 && gameState.g7) !== "")

  let tie = gameState.g1 !=="" && gameState.g2 !=="" && gameState.g3 !=="" && gameState.g4 !=="" && 
            gameState.g5 !=="" && gameState.g6 !=="" && gameState.g7 !=="" && gameState.g8 !=="" && 
            gameState.g9 !=="" && won === false

  function xOrBow (event) {
    let key = event.target.align
    if (counter % 2 === 0 && gameState[key] === "" && !won) {
      setGameState({ ...gameState, [key]: "O" })
      counter += 1;
    } else if ( gameState[key] === "" && !won ) {
      setGameState({ ...gameState, [key]: "X" })
      counter += 1
    }
  }

  function newGameFunction () {
     setGameState(objGame)
     setClassNameResult('areaHidden')
  }

  useEffect(() => {
    counter % 2 !== 0? winner = "Bola": winner= "X"
    won && setClassNameResult('newGame')
    counter = 1
  },[won])

  useEffect(() => {
    tie ? result = "Ihhh, empatou! Tente outra vez!": result = "Venceu!";
    winner = ""
    tie && setClassNameResult('newGame')
    counter = 1
  }, [tie])

  return (
      <div className="container">
          <Game xOrBow={xOrBow}
           gameState={gameState}/>
          <Result 
            classNameResult={classNameResult} 
            winner={winner}
            result={result}
            newGameFunction={newGameFunction} />
      </div>
  );
}

export default App;
