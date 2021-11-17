const defaultState = {
  gameBoard: [
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
  ],
};

// generate a random integer between [min, max]
function randomNum(min, max) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * min + 1, 10);
    case 2:
      return parseInt(Math.random() * (max - min + 1) + min, 10);
    default:
      break;
  }
}

const gaintShip = ["X", "X", "X", "X", "X"];
const largeShip = ["X", "X", "X", "X"];
const mediumShip = ["X", "X", "X"];
const fleetShip = ["X", "X"];
const ship = [gaintShip, largeShip, mediumShip, fleetShip];

/**
 * logic of ship generation：
 * 1. chose the ship we want to put
 * 2. chose a start randomly and a direction randomly
 * 3. detect if we have enough space
 * 4. if N return to 2
 * 5. if Y we put the ship
 */

function generateGameBoard() {
  defaultState.gameBoard = [
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
  ];

  for (let i = 0; i < 4; i++) {
    while (true) {
      let randomRow = randomNum(0, 9);
      let randomCol = randomNum(0, 9);
      let randomDirec = randomNum(0, 1);
      let Direc = 1 - randomDirec;
      let ifEnough = true;

      // if randomDirec = 0, Direc = 1-0 = 1;
      // and they can be different increment to x and y axis
      // if (defaultState.gameBoard[randomRow][randomCol] == 'X') continue;
      // j = 1,2,3,4

      for (let j = 0; j < ship[i].length; j++) {
        if (randomRow + randomDirec * j > 9 || randomCol + Direc * j > 9) {
          ifEnough = false;
        } else if (
          defaultState.gameBoard[randomRow + randomDirec * j][
            randomCol + Direc * j
          ] == "X"
        ) {
          ifEnough = false;
        }
      }
      // ifEough is true --> we have enough space
      if (ifEnough) {
        for (let j = 0; j < ship[i].length; j++) {
          defaultState.gameBoard[randomRow + randomDirec * j][
            randomCol + Direc * j
          ] = "X";
        }
        console.log("we build a ship");
        break;
      } else {
        continue;
      }
    }
  }
  return defaultState.gameBoard;
}

export default function enemyReducer(state, action) {
  // debugger;

  if (state === undefined) {
    return generateGameBoard();
  }

  if (action.type === "CREATE_GAME_BOARD") {
    alert("created a game board!");
  }

  if (action.type === "Click") {
    const value = state[action.x][action.y];
    if (value === "X") {
      state[action.x][action.y] = "x";
    } else if (value === "") {
      state[action.x][action.y] = "O";
    }
    // check winning condition

    return [...state];
  }

  if (action.type === "RESET") {
    return generateGameBoard();
  }
  return state;
}
