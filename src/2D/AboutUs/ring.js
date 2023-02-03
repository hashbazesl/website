import React from "react";
import "./ring.css";
function Ring(props) {
  const size = props.size;
  const borderWidth = props.borderWidth;
  const borderColor = props.borderColor;

  if (props.type === "f") {
    return (
      <div>
        <div
          className="fullArc"
          style={{
            width: size,
            height: size,
            borderWidth: borderWidth,
            borderColor: borderColor,
            filter:`drop-shadow(0px 0px 3px ${borderColor})`
          }}
        ></div>
      </div>
    );
  } else if (props.type === "rh") {
    return (
      <div>
        <div
          className="arc"
          style={{
            width: size,
            height: size,
            borderWidth: borderWidth,
            borderRightColor: borderColor,
            borderTopColor: "transparent",
            borderLeftColor: "transparent",
            borderBottomColor: "transparent",
          }}
        ></div>
      </div>
    );
  } else if (props.type === "lh") {
    return (
      <div>
        <div
          className="arc"
          style={{
            width: size,
            height: size,
            borderWidth: borderWidth,
            borderRightColor: "transparent",
            borderTopColor: "transparent",
            borderLeftColor: borderColor,
            borderBottomColor: "transparent",
          }}
        ></div>
      </div>
    );
  } else if (props.type === "th") {
    return (
      <div>
        <div
          className="arc"
          style={{
            width: size,
            height: size,
            borderWidth: borderWidth,
            borderRightColor: "transparent",
            borderTopColor: borderColor,
            borderLeftColor: "transparent",
            borderBottomColor: "transparent",
          }}
        ></div>
      </div>
    );
  } else if (props.type === "bh") {
    return (
      <div>
        <div
          className="arc"
          style={{
            width: size,
            height: size,
            borderWidth: borderWidth,
            borderRightColor: "transparent",
            borderTopColor: "transparent",
            borderLeftColor: "transparent",
            borderBottomColor: borderColor,
          }}
        ></div>
      </div>
    );
  }
}

export default Ring;
