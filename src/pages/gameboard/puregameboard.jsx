import React from "react";
import { useSelector } from "react-redux";
import { EnemyBoard } from "./enemyboard";
import { ResetButtom } from "./reset";
import './puregameboard.css'


function whoIsWinner(enemyboard){
    
    let enemyx = 0;

    for(let i = 0; i < 10; i++){
        for (let j = 0; j < 10; j++){
           
            if (enemyboard[i][j] === 'x'){
                enemyx += 1;
            }
        }
    }

    if (enemyx === 14) return "You Hit All Ships!"
    else return "You Have not Hit All Ships!";

}


export function PureGameBoard(props){

    const enemyboard = useSelector((state) => state.enemy);

    const winner = whoIsWinner(enemyboard);

    return (
        <div className = "gameboard">
            <h1>{winner}</h1>
            <EnemyBoard/>
            <ResetButtom />
        </div>
    )
}
