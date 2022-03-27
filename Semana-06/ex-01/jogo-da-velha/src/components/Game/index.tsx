import { FC } from "react"
import { IProps } from "../../models/IProps"

import { GameElement } from "../GameElement"

import "./styles.css"

// basta por space-around, deve ficar equilibrado,
// como jogar por cima z-index?

export const Game:FC <IProps> = (props) =>{
    return (
        <>
            <h2>Jogo da Old Lady</h2>
            <div className='game'>
                <div className="columnBox">
                    <div className='column1'></div>
                    <div className='column2'></div>
                </div>
                
                <GameElement 
                    gameState={props.gameState} 
                    xOrBow={props.xOrBow}
                    id1="g1" id2="g2" id3="g3"
                />
                <div className='line'></div>
                <GameElement 
                    gameState={props.gameState} 
                    xOrBow={props.xOrBow}
                    id1="g4" id2="g5" id3="g6"
                />
                <div className='line'></div>
                <GameElement 
                    gameState={props.gameState} 
                    xOrBow={props.xOrBow}
                    id1="g7" id2="g8" id3="g9"
                />
            </div>
        </>
    )
}