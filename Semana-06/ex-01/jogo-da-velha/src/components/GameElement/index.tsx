import { FC } from "react"
import { IObjGame } from "../../models/IObjGame"
import { IProps } from "../../models/IProps"
import "./styles.css"

interface IPropsGameElement extends IProps {
    id1: string, 
    id2: string,
    id3: string,
}

export const GameElement:FC<IPropsGameElement> = (props) => {
    return (
        <div className='gameRow'>
            <p id={props.id1} onClick={props.xOrBow}> 
                {props.gameState[props.id1]} 
            </p>
            <p id={props.id2} onClick={props.xOrBow}>
                {props.gameState[props.id2]}
            </p>
            <p id={props.id3} onClick={props.xOrBow}>
                {props.gameState[props.id3]} 
            </p>
        </div>
    )
}