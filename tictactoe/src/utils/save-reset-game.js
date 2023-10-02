

export const saveGameToStorage = ({ newBoard, currentTurn})=>{
    window.localStorage.setItem('board',JSON.stringify(newBoard));
    window.localStorage.setItem('turn', currentTurn);
}

export const resetGameFromStorage = ()=>{
    window.localStorage.removeItem('board');	
    window.localStorage.removeItem('turn');
}