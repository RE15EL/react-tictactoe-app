import { useState } from "react";

useState

// square component
export const Square = ({ children, index, isSelected })=>{
    const squareClassName = `square ${isSelected? "selected" : ""}`;
    return (
        <div className={ squareClassName }>
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
            <section className="turn">
                <Square isSelected={ turn === turns.X }> {turns.X} </Square>
                <Square isSelected={ turn === turns.O }> {turns.O} </Square>
            </section>
        </div>        
    )
}