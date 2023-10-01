// square component
export const Square = ({ children, index })=>{
    return (
        <div className="square">
            {children}
        </div>
    )
}

// turns
const turns = {
    X: 'X',
    O: 'O'
};

// board
const board = Array(9).fill(null);

export const Tictactoe = ()=>{

    return (
        <div className="board">
            <h1>Tic tac toe</h1>
            <div className="game">
                {
                    board.map((_, index) => 
                        <Square key={index} index={index}> {index} </Square>
                    )
                }
            </div>
        </div>        
    )
}