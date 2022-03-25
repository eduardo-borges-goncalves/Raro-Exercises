import { useEffect, useState } from 'react';
import { Result } from './components/Result/Result';
import { Game } from './components/Game';
import { IObjGame } from './models/IObjGame';
import { Container } from './components/Container';

let xPlay:boolean = true  
let winner:string = "" 
let result:string = ""

function App() {
  let objGame: IObjGame = { g1: "", g2: "", g3: "", g4: "", g5: "", g6: "", g7: "", g8: "", g9: "" }

  const [gameState, setGameState] = useState <IObjGame> (objGame)
  const [classNameResult, setClassNameResult] = useState <string> ("areaHidden")
  
  let won: boolean = 
    gameState.g1 === gameState.g2 && gameState.g1 === gameState.g3 && ((gameState.g1 && gameState.g2 && gameState.g3) !== "") ||
    gameState.g4 === gameState.g5 && gameState.g4 === gameState.g6 && ((gameState.g4 && gameState.g5 && gameState.g6) !== "") ||
    gameState.g7 === gameState.g8 && gameState.g7 === gameState.g9 && ((gameState.g7 && gameState.g8 && gameState.g9) !== "") ||
    gameState.g1 === gameState.g4 && gameState.g1 === gameState.g7 && ((gameState.g1 && gameState.g4 && gameState.g7) !== "") ||
    gameState.g2 === gameState.g5 && gameState.g2 === gameState.g8 && ((gameState.g2 && gameState.g5 && gameState.g8) !== "") ||
    gameState.g3 === gameState.g6 && gameState.g3 === gameState.g9 && ((gameState.g3 && gameState.g6 && gameState.g9) !== "") ||
    gameState.g1 === gameState.g5 && gameState.g1 === gameState.g9 && ((gameState.g1 && gameState.g5 && gameState.g9) !== "") ||
    gameState.g3 === gameState.g5 && gameState.g3 === gameState.g7 && ((gameState.g3 && gameState.g5 && gameState.g7) !== "")

  let tie: boolean = gameState.g1 !=="" && gameState.g2 !=="" && gameState.g3 !=="" &&
                     gameState.g4 !=="" && gameState.g5 !=="" && gameState.g6 !=="" &&
                     gameState.g7 !=="" && gameState.g8 !=="" && gameState.g9 !=="" && 
                     won === false

  function xOrBow (event:any) {
    let key:string = event.target.id
    
    if (xPlay  && gameState[key] === "" && !won) {
      setGameState({ ...gameState, [key]: "X" })
      xPlay = false
    } else if ( gameState[key] === "" && !won ) {
      setGameState({ ...gameState, [key]: "O" })
      xPlay = true
    }
  }

  function newGame () {
    setGameState(objGame)
    setClassNameResult('areaHidden')
  }

  useEffect(() => {
    xPlay ? winner = "Bola": winner= "X"
    won && setClassNameResult('newGame')
    xPlay = true
  },[won])

  useEffect(() => {
    tie ? result = "Ihh, empatou! Tente outra vez!": result = "Venceu!";
    winner = ""
    tie && setClassNameResult('newGame')
    xPlay = true
  }, [tie])

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
