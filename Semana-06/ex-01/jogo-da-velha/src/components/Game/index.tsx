import { FC } from "react"
import { IProps } from "../../models/IProps"

import { GameElement } from "../GameElement"

import "./styles.css"

export const Game:FC <IProps> = (props) =>{
    return (
        <>
            <h2>Jogo da Old Lady</h2>
            <div className='game'>
                <div className="columnBox">
                    <div className='column1'></div>
                    <div className='column2'></div>
                </div>
                <div className="gameRow">
                    <GameElement 
                        gameState={props.gameState} 
                        xOrBow={props.xOrBow}
                        id="g1" 
                    />
                    <GameElement 
                        gameState={props.gameState} 
                        xOrBow={props.xOrBow}
                        id="g2" 
                    />
                    <GameElement 
                        gameState={props.gameState} 
                        xOrBow={props.xOrBow}
                        id="g3" 
                    />
                </div>
                <div className='line'></div>
                <div className="gameRow">
                    <GameElement 
                        gameState={props.gameState} 
                        xOrBow={props.xOrBow}
                        id="g4" 
                    />
                    <GameElement 
                        gameState={props.gameState} 
                        xOrBow={props.xOrBow}
                        id="g5" 
                    />
                    <GameElement 
                        gameState={props.gameState} 
                        xOrBow={props.xOrBow}
                        id="g6" 
                    />
                </div>
                <div className='line'></div>
                <div className="gameRow">
                    <GameElement 
                        gameState={props.gameState} 
                        xOrBow={props.xOrBow}
                        id="g7" 
                    />
                    <GameElement 
                        gameState={props.gameState} 
                        xOrBow={props.xOrBow}
                        id="g8" 
                    />
                    <GameElement 
                        gameState={props.gameState} 
                        xOrBow={props.xOrBow}
                        id="g9" 
                    />
                </div>            
            </div>
        </>
    )
}