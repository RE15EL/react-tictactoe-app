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