import "./styles.css"

export function Result(props) {
    return (
        <div className={ props.classNameResult }>
            <span> { props.winner } {props.result} </span>
            <button className='newGameBut'
                    onClick={ props.newGameFunction }>
                Jogar Novamente
            </button>
        </div>
    )
}