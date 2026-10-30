import React from "react";

function HangmanWord() {
  const word = "test";
  return (
    <div
      style={{
        display: "flex",
        gap: ".25em",
        fontFamily: "sans-serif",
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: "6rem",
      }}
    >
      {word.split("").map((letter, index) => {
        return (
          <span style={{ borderBottom: "1rem solid black" }}>{letter}</span>
        );
      })}
    </div>
  );
}

export default HangmanWord;
