import { useState } from "react";
import confetti from 'canvas-confetti' // winner effects 

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

    //winner state
    const [winner, setWinner] = useState(null); // true = winner - false = empate 
    const winnerCombis = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    // check winner
    const checkWinner = (boardToCheck)=>{
        for (const combis of winnerCombis) {
            const [ a, b ,c ] = combis;
            if (
                boardToCheck[a] &&
                boardToCheck[a] === boardToCheck[b] &&
                boardToCheck[a] === boardToCheck[c]    
            ) {
                confetti(true);
                return boardToCheck[a];
            }   
        }
        return null;
    }

    // update board 
    const updateBoard = (index) => {
        if (board[index] || winner) return; //stop if already selected or have a winner

        const newBoard = [...board];
        newBoard[index] = turn;
        setBoard(newBoard);

        const currentTurn = turn === turns.X ? turns.O : turns.X;
        setTurn(currentTurn);

        const newWinner = checkWinner(newBoard);
        if( newWinner){
            setWinner(newWinner)
        }
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