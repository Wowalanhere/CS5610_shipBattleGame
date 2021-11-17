import { useSelector } from "react-redux";
import "./enemyboard.css";
import { EnemySquare } from "./enemysquare";

export function EnemyBoard(props) {
  const boardState = useSelector((state) => state.enemy);

  const Squares = [];

  for (let i = 0; i < boardState.length; i++) {
    let row = boardState[i];
    for (let j = 0; j < row.length; j++) {
      Squares.push(<EnemySquare symbol={boardState[i][j]} x={i} y={j} />);
    }
  }

  return (
    <div>
      <h3>This is the EnemyBoard</h3>
      <div className="enemyboard">{Squares}</div>
    </div>
  );
}