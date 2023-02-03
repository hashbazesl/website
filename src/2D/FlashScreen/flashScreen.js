import React, { CSSProperties } from "react";
import "./flashScreen.css";
import HashLoader from "react-spinners/HashLoader";

function FlashScreen(props) {
  return (
    <div className="flashScreen">
      <div className="fsCenter">{props.centerText}</div>
      <HashLoader size={80} color="#ecba05" />
    </div>
  );
}

export default FlashScreen;
