import { Square } from './Square.jsx'

export function WinnerModal( {winner, resetGame }){
    if (winner === null) return null;
    const winnerName = winner === false ? 'Tie': 'Winner:';

    return (
        <section className="winner">
            <div className="text">
                <h2> 
                    { winnerName }
                </h2>
                <header className="win">
                    { winner && <Square > { winner } </Square> }
                </header>

                <footer>
                    <button onClick={resetGame}> Play again</button>
                </footer>
            </div>

            
        </section>
    )
    

}