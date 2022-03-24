import "./styles.css"

export function Result(props) {
    return (
        <div className={ props.classNameResult }>
            <span> { props.winner } Venceu! </span>
            <button className='newGameBut'
                    onClick={ props.newGameFunction }>
                Jogar Novamente
            </button>
        </div>
    )
}