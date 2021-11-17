import './rules.css'

export default function Rules(props){

    return(
        <div className = "content">
            <div>
                <h2>Rules of the Game: </h2>
            </div>
            <div>
                <p id = "title"> 
                    1. How to play?
                </p>
                <p id = "content">
                    When you play the game, you can find a enemy board on your sreen. Imagine it as a sea.
                    Clicking one cell on the board means that you fire a cannonball to the cell. If you hit enemy ship, 
                    the cell will become red. Otherwise it will become grey.
                    
                </p>

                <p id = "title"> 
                    2. How to win?
                </p>
                <p id = "content">
                    When you destory all enemy ships before the enemy destory yours, you win!!
                    Both of you have one 5X1 ship, one 4X1 ship, one 3X1 ship, and one 2X1 ship.
                    Remeber to destory all of them!
                </p>

                <p id = "content">
                    When you win, there will be a congratulation on the screen to show it.
                </p>

                <p id = "title"> 
                    3. How can I change game mode?
                </p>
                <p id = "content">
                    We have two game mode: 1. Normal Game 2. Pure Game. And you can chose them on your 
                    home page.
                </p>
                <p id = "content">
                    "Normal Game" means you will play with a stupid AI :) and play in turn. So you should 
                    try destorying all enemy ships fast or you may lose the game!
                </p>
                <p id = "content">
                    "Pure Game" means you will play with yourself. Just enjoy your game to see if you are 
                    lucky enough to find all the enemy ships easily!
                </p>

                <p id = "title"> 
                    4. How to start a new game?
                </p>
                <p id = "content">
                    Just Click the "Restart" button and you can go for a new game!
                </p>
            </div>
        </div>
    );

}