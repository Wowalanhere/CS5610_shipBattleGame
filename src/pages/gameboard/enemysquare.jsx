import React from "react"
import { useDispatch } from "react-redux"
import './enemysquare.css'

/**
 * the logic is:
 * 1. enemyboard fistly get enemy(store) to generate a game board;
 * 2. and we have X inside the board
 * 3. we can click a square
 * 4. if we click a empty square, this square turns to 1 color
 * 5. if we click a non-empty square, turns to red color and show "X"
 */



export function EnemySquare(props){

    const dispatch = useDispatch();
    const dispatchturn = useDispatch();

    const symbol = props.symbol;
    let backGroundColor = 'origin';
    if (symbol === 'x'){
        backGroundColor = 'hit';
    }
    else if (symbol === 'O'){
        backGroundColor = 'miss';
    }



    return(
        <div onClick={() => {
            dispatch({
                type:"Click",
                x: props.x,
                y: props.y
            })
            dispatchturn({
                type:"EnemyTurn"
            })
        }} 
        id = "square" 
        className = {backGroundColor}>

            {props.symbol}

        </div>
    )

}