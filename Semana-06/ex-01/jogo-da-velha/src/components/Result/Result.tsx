import { FC } from "react"
import "./styles.css"

interface IProps {
    classNameResult: string,
    result: string, 
    winner: string, 
    newGame: () => void,
}

export const Result:FC <IProps> = (props) => {
    return (
        <div className={ props.classNameResult }>
            <span> { props.winner } {props.result} </span>
            <button className='newGameBut'
                    onClick={ props.newGame }>
                Jogar Novamente
            </button>
        </div>
    )
}