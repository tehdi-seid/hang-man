import React from "react";
import style from "../keyboard.module.css";
const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
function Keybord() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(75px,1fr))",
        gap: ".25rem",
      }}
    >
      {KEYS.map((key) => (
        <button className={`${style.btn} ${style.btn.active}`}>{key}</button>
      ))}
    </div>
  );
}

export default Keybord;
