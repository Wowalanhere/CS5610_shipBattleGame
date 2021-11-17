import React from "react";
import { useDispatch } from "react-redux";
import "./square.css";

export function Square(props) {
  const dispatch = useDispatch();

  const symbol = props.symbol;
  let backGroundColor = "nexist";
  if (symbol === "X") {
    backGroundColor = "exist";
  } else if (symbol === "x") {
    backGroundColor = "hit";
  } else if (symbol === "O") {
    backGroundColor = "miss";
  }

  return (
    <div id="square" className={backGroundColor}>
      {props.symbol}
    </div>
  );
}
