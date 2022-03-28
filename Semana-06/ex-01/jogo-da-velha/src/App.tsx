import { useState } from 'react';
import { Result } from './components/Result/Result';
import { Game } from './components/Game';
import { IObjGame } from './models/IObjGame';
import { Container } from './components/Container';

let xPlay = true 
let xWin= true 
let winner = "" 
let result = ""

function App() {
  let objGame: IObjGame = { g1: "", g2: "", g3: "", g4: "", g5: "", g6: "", g7: "", g8: "", g9: "" }

  const [gameState, setGameState] = useState <IObjGame> (objGame)
  let [classNameResult, setClassNameResult] = useState ("areaHidden")
  
  let won = 
    gameState.g1 === gameState.g2 && gameState.g1 === gameState.g3 && (gameState.g2 !== "") ||
    gameState.g4 === gameState.g5 && gameState.g4 === gameState.g6 && (gameState.g5 !== "") ||
    gameState.g7 === gameState.g8 && gameState.g7 === gameState.g9 && (gameState.g8 !== "") ||
    gameState.g1 === gameState.g4 && gameState.g1 === gameState.g7 && (gameState.g4 !== "") ||
    gameState.g2 === gameState.g5 && gameState.g2 === gameState.g8 && (gameState.g5 !== "") ||
    gameState.g3 === gameState.g6 && gameState.g3 === gameState.g9 && (gameState.g6 !== "") ||
    gameState.g1 === gameState.g5 && gameState.g1 === gameState.g9 && (gameState.g5 !== "") ||
    gameState.g3 === gameState.g5 && gameState.g3 === gameState.g7 && (gameState.g5 !== "")

  let tie = gameState.g1 !=="" && gameState.g2 !=="" && gameState.g3 !=="" &&
            gameState.g4 !=="" && gameState.g5 !=="" && gameState.g6 !=="" &&
            gameState.g7 !=="" && gameState.g8 !=="" && gameState.g9 !=="" && 
            won === false

  function xOrBow (event: React.MouseEvent<HTMLButtonElement>) {
    let key:string = event.currentTarget.id
    
    if (xPlay  && gameState[key] === "" && !won) {
      setGameState({ ...gameState, [key]: "X" })
      xPlay = false
      xWin = true
    } else if ( gameState[key] === "" && !won ) {
      setGameState({ ...gameState, [key]: "O" })
      xPlay = true
      xWin = false
    }
  }

  function newGame () {
    setGameState(objGame)
    setClassNameResult('areaHidden')
  }

  if (won) {
    result = "Venceu"
    xWin ? winner = "X": winner= "Bola"
    classNameResult = 'newGame'
    xPlay = true 
  }
  
  if (tie) {
    result = "Ihh, empatou! Tente outra vez!"
    winner = ""
    classNameResult = 'newGame'
    xPlay = true 
  }

  return (
    <Container>
      <Game xOrBow={xOrBow}
        gameState={gameState}/>
      <Result 
        classNameResult={classNameResult} 
        winner={winner}
        result={result}
        newGame={newGame} />
    </Container>
  );
}

export default App;
