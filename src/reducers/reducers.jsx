import { combineReducers } from "redux";
import enemyReducer from "./enemygameReducer";
import gameReducer from "./gameReducer";

export default combineReducers({
    game: gameReducer,
    enemy: enemyReducer
});