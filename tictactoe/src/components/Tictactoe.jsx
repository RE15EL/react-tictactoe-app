import { useState } from "react";
import { Square } from './Square.jsx';
import { turns, winnerCombis } from '../utils/constants.js';
import { saveGameToStorage, resetGameFromStorage } from '../utils/save-reset-game.js';
import { WinnerModal } from './WinnerModal.jsx';
import confetti from 'canvas-confetti' // winner effects 

export const Tictactoe = ()=>{      
    // board state
    const [board, setBoard] = useState( ()=>{
        const boardStorage = JSON.parse(localStorage.getItem('board')); // get board from local storage
        return boardStorage ?? Array(9).fill(null); // init the board state
    })  
    
    // turn state
    const [turn, setTurn] = useState( ()=>{
        const turnStorage = localStorage.getItem('turn'); // get turn from local storage
        return turnStorage ?? turns.X; // init the turn state
    });

    //winner state
    const [winner, setWinner] = useState(null); // true = winner - false = empate 
    
    // check winner
    const checkWinner = (boardToCheck)=>{
        for (const combis of winnerCombis) {
            const [ a, b ,c ] = combis;
            if (
                boardToCheck[a] &&
                boardToCheck[a] === boardToCheck[b] &&
                boardToCheck[a] === boardToCheck[c]    
            ) {
                return boardToCheck[a];
            }   
        }
        return null;
    }

    // reset game
    const resetGame = ()=>{
        setBoard(Array(9).fill(null));
        setTurn(turns.X);
        setWinner(null);

        // reset game stats
        resetGameFromStorage();
    }

    // update board 
    const updateBoard = (index) => {
        if (board[index] || winner) return; //stop if already selected or have a winner

        const newBoard = [...board];
        newBoard[index] = turn;
        setBoard(newBoard);

        const currentTurn = turn === turns.X ? turns.O : turns.X;
        setTurn(currentTurn);

        // save new board an currentTurn will be used
        saveGameToStorage({
            board: newBoard, 
            turn: currentTurn
        });

        const newWinner = checkWinner(newBoard);
        if( newWinner){
            confetti();
            setWinner(newWinner)
        }else if( newBoard.every(x => x !== null) ){
            setWinner(false);
        }
    }
    
    return (
        <div className="board">
            <h1>Tic Tac Toe</h1>
            <button onClick={resetGame}>Reset</button>
            <section className="game">
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
            </section>
            <section className="turn">
                <Square isSelected={ turn === turns.X }> {turns.X} </Square>
                <Square isSelected={ turn === turns.O }> {turns.O} </Square>
            </section>
            <WinnerModal winner={winner}  resetGame={resetGame}/>
        </div>        
    )
}