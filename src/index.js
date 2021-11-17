import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import reducers from "./reducers/reducers";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WelcomePage from "./pages/welcome/welcomepage";
import { GameBoard } from "./pages/gameboard/gameboard";
import Rules from "./pages/rules/rules";
import { EnemyBoard } from "./pages/gameboard/enemyboard";
import { PureGameBoard } from "./pages/gameboard/puregameboard";

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className="fixedheader">
        <div className="headdivide">
          <h2 id="logo">SHIP BATTLE GAME</h2>
        </div>
        <div className="headdivide" id="name">
          <p class="logopw">By Anlan Xu</p>
        </div>
        <div className="headdivide">
          <Link to={"/"}>HOME PAGE</Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/gameBoard" element={<GameBoard />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/puregame" element={<PureGameBoard />} />
      </Routes>
    </Router>
  </Provider>,
  document.getElementById("root")
);
