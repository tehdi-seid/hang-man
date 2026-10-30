import React, { useState } from "react";
import word from "./wordList.json";
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Keybord from "./components/Keybord";
function App() {
  console.log(word);
  const [wordToBeGussed] = useState(() => {
    return word[Math.floor(Math.random() * word.length)];
  });

  const [gussedLetters, setGussedLetters] = useState([]);
  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "2rem", textAlign: "center" }}>loss win</div>

      <HangmanDrawing />
      <HangmanWord />
      <div style={{ alignSelf: "stretch" }}>
        <Keybord />
      </div>
    </div>
  );
}

export default App;
