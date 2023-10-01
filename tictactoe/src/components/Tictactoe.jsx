

export const Tictactoe = ()=>{
    // turns
    const turns = {
        X: 'X',
        O: 'O'
    };

    // board
    const board = Array(9).fill(null);

    return (
        <div className="board">
            <h1>Tic tac toe</h1>
            <div className="game">
                {
                    board.map((item, index) => {
                        return (
                            <div className="square" key={index}>
                                {index}
                            </div>
                        )
                    })
                }
            </div>
        </div>        
    )
}