import React from 'react';
import { Link } from 'react-router-dom';
import { GameBoard } from '../gameboard/gameboard';
import './welcomepage.css'

export default function WelcomePage() {

    return (
    <div class="WelcomePage">
        <div>
            <h3>
            Introduction of the Battleship(game)
            </h3>
        </div>

        <div>
        <p id = "intro">
            Battleship is a strategy type guessing game for two players. It is played on ruled grids (paper or board) on which each player's fleet of ships (including battleships) are marked. The locations of the fleets are concealed from the other player. Players alternate turns calling "shots" at the other player's ships, and the objective of the game is to destroy the opposing player's fleet.
            </p>
            <p id = "intro">---- from Wikipedia</p>
            <h3></h3>
            <p id = "intro">Click the "Learn Rules" to learn how to play!</p>
        </div>  

        <div>
        <h3>Click here to start the game</h3>
        </div>
        <div>
            <Link to={"/gameboard"}>Play Normal Game</Link>
        </div>
        <Link to={"/puregame"}>Play Pure Game</Link>

        <h3>
        Click here to learn the rules
        </h3>
        <Link to={"/rules"}>Learn Rules</Link>
    </div>
    )

}