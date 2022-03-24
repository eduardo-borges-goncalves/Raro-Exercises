import "./styles.css"

export function Game (props) {
    return (
        <>
            <h2>Jogo da Old Lady</h2>
            <div className='game'>
            <div className='gameRow'>
                <p align="g1" onClick={props.xOrBow}> 
                    {props.gameState.g1} 
                </p>
                <p align="g2" onClick={props.xOrBow}>
                    {props.gameState.g2}
                </p>
                <p align="g3" onClick={props.xOrBow}>
                    {props.gameState.g3} 
                </p>
            </div>
            <div className='line'></div>
            <div className='gameRow'>
                <p align="g4" onClick={props.xOrBow}> 
                    {props.gameState.g4} 
                </p>
                <div className='column1'></div>
                <p align="g5" onClick={props.xOrBow}> 
                    {props.gameState.g5} 
                </p>
                <div  className='column2'></div>
                <p align="g6" onClick={props.xOrBow}> 
                    {props.gameState.g6} 
                </p>
            </div>
            <div className='line'></div>
            <div className='gameRow'>
                <p align="g7" onClick={props.xOrBow}> 
                    {props.gameState.g7} 
                </p>
                <p align="g8" onClick={props.xOrBow}>
                    {props.gameState.g8} 
                </p>
                <p align="g9" onClick={props.xOrBow}> 
                    {props.gameState.g9} 
                </p>
            </div>
            </div>
        </>
    )
}