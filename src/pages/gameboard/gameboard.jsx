import React from "react";
import { useSelector } from "react-redux";
import { EnemyBoard } from "./enemyboard";
import { MyBoard } from "./myboard";
import { ResetButtom } from "./reset";
import './gameboard.css'


function whoIsWinner(myboard, enemyboard){
    console.log(enemyboard);
    let myx = 0;
    let enemyx = 0;

    for(let i = 0; i < 10; i++){
        for (let j = 0; j < 10; j++){
            if (myboard[i][j]  === 'x'){
                myx += 1;
            }
            if (enemyboard[i][j] === 'x'){
                enemyx += 1;
            }
        }
    }

    if (myx === 14) return "your Enemy!"
    else if (enemyx === 14) return "You!"
    else return "";

}


export function GameBoard(props){

    const myboard = useSelector((state) => state.game);
    const enemyboard = useSelector((state) => state.enemy);

    const winner = whoIsWinner(myboard, enemyboard);

    return (
        <div className = "gameboard">
            <h1>The Winner is:{winner}</h1>
            <EnemyBoard/>
            <MyBoard />
            <ResetButtom />
        </div>
    )
}
