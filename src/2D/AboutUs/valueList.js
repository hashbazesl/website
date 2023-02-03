import React, { useRef } from "react";
import ValueBox from "./valueBox";

import "./valueList.css";

function ValueList({ values }) {
  return (
    <div className="valueList">
      {values.map((value, idx) => {
        return <ValueBox key={idx} value={value} />;
      })}
    </div>
  );
}

export default ValueList;
