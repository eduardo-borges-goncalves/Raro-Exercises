import { FC } from "react"
import { IProps } from "../../models/IProps"
import "./styles.css"

interface IPropsGameElement extends IProps {
    id: string,
}

export const GameElement:FC<IPropsGameElement> = (props) =>  (
        <p id={props.id} onClick={() => props.xOrBow(props.id)}> 
            {props.gameState[props.id]} 
        </p>         
)
