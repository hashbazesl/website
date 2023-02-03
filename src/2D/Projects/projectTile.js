import React from "react";
import "./projectTile.css";

import { FaMobileAlt } from "react-icons/fa";
import { BsLaptop } from "react-icons/bs";
const ProjectTile = (props) => {
  return (
    <div
      className={
        `tile ${props.position}` +
        " " +
        (props.index == props.clickedIndex ? "clicked" : "")
      }
      onClick={() => {
        props.setClickedIndex(props.index);
      }}
    >
      <div className="iconList">
        {props.platform.map((platform) => {
          if (platform == "M") {
            return <FaMobileAlt key="M" />;
          } else if (platform == "W") {
            return <BsLaptop key="W" />;
          }
        })}
      </div>
      <h2 className="appTitle">{props.title}</h2>
    </div>
  );
};

export default ProjectTile;
