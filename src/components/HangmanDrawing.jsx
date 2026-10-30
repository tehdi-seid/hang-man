import React from "react";

const HEAD = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      position: "absolute",
      border: "10px solid black",
      right: "-30px",
      top: "50px",
    }}
  ></div>
);

const BODY = (
  <div
    style={{
      width: "10px",
      height: "100px",
      position: "absolute",
      backgroundColor: "black",
      top: "110px",
      right: "0",
    }}
  ></div>
);

const RIGHT_ARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      position: "absolute",
      backgroundColor: "black",
      top: "150px",
      right: "-100px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  ></div>
);

const LEFT_ARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      position: "absolute",
      backgroundColor: "black",
      top: "145px",
      right: "-100px",
      rotate: "-150deg",
      transformOrigin: "left bottom",
    }}
  ></div>
);
const RIGHT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      position: "absolute",
      backgroundColor: "black",
      top: "200px",
      right: "-90px",
      rotate: "45deg",
      transformOrigin: "left bottom",
    }}
  ></div>
);

const LEFT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      position: "absolute",
      backgroundColor: "black",
      top: "195px",
      right: "-90px",
      rotate: "130deg",
      transformOrigin: "left bottom",
    }}
  ></div>
);
function HangmanDrawing() {
  return (
    <div style={{ position: "relative" }}>
      {HEAD}
      {BODY}
      {RIGHT_ARM}
      {LEFT_ARM}
      {RIGHT_LEG}
      {LEFT_LEG}
      <div
        style={{
          width: "10px",
          height: "50px",
          backgroundColor: "black",
          marginLeft: "120px",
          top: "0",
          position: "absolute",
          right: "0",
        }}
      ></div>
      <div
        style={{
          width: "200px",
          height: "10px",
          backgroundColor: "black",
          marginLeft: "120px",
        }}
      ></div>
      <div
        style={{
          width: "10px",
          height: "400px",
          backgroundColor: "black",
          marginLeft: "120px",
        }}
      ></div>
      <div
        style={{
          width: "250px",
          height: "10px",
          backgroundColor: "black",
        }}
      ></div>
    </div>
  );
}

export default HangmanDrawing;
