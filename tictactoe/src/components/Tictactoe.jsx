import { useState } from "react";

useState

// square component
export const Square = ({ children, index, isSelected, updateBoard })=>{
    const squareClassName = `square ${isSelected? "selected" : ""}`;

    const handleClick = ()=>{
        updateBoard(index);
    }

    return (
        <div className={ squareClassName } onClick={ handleClick }>
            {children}
        </div>
    )
}


export const Tictactoe = ()=>{
    // turns
    const turns = {
        X: 'X',
        O: 'O'
    };
    
    // board state
    const [board, setBoard] = useState(Array(9).fill(null)); // 9 x 9 array
    
    // turn state
    const [turn, setTurn] = useState(turns.X);

    // update board 
    const updateBoard = (index) => {
        const newBoard = [...board];
        newBoard[index] = turn;
        setBoard(newBoard);

        const currentTurn = turn === turns.X ? turns.O : turns.X;
        setTurn(currentTurn);
    }
    
    return (
        <div className="board">
            <h1>Tic tac toe</h1>
            <div className="game">
                {
                    board.map((_, index) => 
                        <Square 
                            key={index} 
                            index={index}
                            updateBoard={updateBoard}
                        >
                            { board[index] } 
                        </Square>
                    )
                }
            </div>
            <section className="turn">
                <Square isSelected={ turn === turns.X }> {turns.X} </Square>
                <Square isSelected={ turn === turns.O }> {turns.O} </Square>
            </section>
        </div>        
    )
}