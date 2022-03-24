import { useEffect, useState } from 'react';
import './App.css';

function App() {

  let gameElement = {
    g1: "",
    g2: "",
    g3: "",
    g4: "",
    g5: "",
    g6: "",
    g7: "",
    g8: "",
    g9: "",
  }

  const [botao, setBotao] = useState(gameElement)
  let counter = 1

  function xOrBola (event) {
    // if (counter%2 === 0  ) {
    //   setBotao('O')
    //   counter = counter + 1
    // }
    // else  {
    //   setBotao('X')
    //   counter = counter +1
    // }

      setBotao(botao, botao[event.target.align] = "X")
      console.log("aqui", gameElement.g1)
      console.log("baixo", botao)
  }


  // Primeiro jogador que clicar gera x
  // Segundo gera bola
  // Se contador igual a impar, imprime x
  // Se contador igual a par, imprime bola
  // a gente pode ter um componente escrito x e outro bola 
  // ai a gente renderiza ele no lugar quando clicar e for impar
  // criar um objeto com todos os negócios

  return (
    <div className="App">
      <div className="container">
          <h2>Jogo da Old Lady</h2>
          <div className='game'>
            <div className='gameRow'>
              <p align="g1" onClick={xOrBola}>{botao.g1}oi</p>
              <p id="a2" onClick={xOrBola}>{gameElement.g2}</p>
              <p id="a3" onClick={xOrBola}>{gameElement.g3}</p>
            </div>
            <div className='line'></div>
            <div className='gameRow'>
              <p id="a4" onClick={xOrBola}>{gameElement.g4}</p>
                <div className='column1'></div>
              <p id="a2" onClick={xOrBola}>{gameElement.g5}</p>
                <div className='column2'></div>
              <p id="a3" onClick={xOrBola}>{gameElement.g6}</p>
            </div>
            <div className='line'></div>
            <div className='gameRow'>
              <p id="a7" onClick={xOrBola}>{gameElement.g7}</p>
              <p id="a2" onClick={xOrBola}>{gameElement.g8}</p>
              <p id="a3" onClick={xOrBola}>{gameElement.g9}</p>
            </div>
          </div>
          
          <button className='newGameBut'>
            Jogar Novamente</button>
      </div>
      
    </div>
  );
}

export default App;
