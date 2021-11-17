import { useSelector } from "react-redux";
import { Square } from "./square";
import './myboard.css';

export function MyBoard(props){

    const boardState = useSelector((state) => state.game)

    const Squares = [];

    for (let i = 0; i < boardState.length; i++){
        let row = boardState[i];
        for(let j = 0; j < row.length; j++){
            Squares.push(<Square symbol = {boardState[i][j]} x={i} y={j}/>)
        }
    }

    return(
        <div>
            <h3>This is the MyBoard</h3>
            <div className = "myboard">
            {Squares}
            </div>
        </div>
    )
}