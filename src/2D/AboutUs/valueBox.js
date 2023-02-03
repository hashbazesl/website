import React, { useRef } from "react";
import "./valueBox.css";

function ValueBox({ value }) {
  return (
    <div className="valueBox">
      <h2 className="valueBoxTitle">{value.title}</h2>
      <div className="valueBoxBar" />
      <h2 className="valueBoxContent">{value.content}</h2>
    </div>
  );
}

export default ValueBox;
