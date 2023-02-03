import React from "react";
import Ring from "./ring";
import "./techCard.css";

const TechCard = (props) => {
  return (
    <div className="techCard">
  
      <Ring type="f" size="75px" borderWidth="3px" borderColor="#009999" />
      <div
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "white",
          position: "absolute",
 
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: "10px",
        }}
      >
        <img src={props.imgLink} alt=""/>
      </div>
    </div>
  );
};
export default TechCard;
