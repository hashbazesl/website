import React from "react";
import "./projectTitleCard.css";
import { BsBehance } from "react-icons/bs";

const ProjectTitleCard = (props) => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  if (props.type == "1") {
    return (
      <div
        className="generalProjectCardCss"
        style={{
          width: props.width,
          height: props.height,
          background: props.bColor,
          cursor: "default",
        }}
      >
        <div className="projectTitleBarType1">
          <div
            className="projectTitleIconBoxType1"
            style={{
              backgroundColor: props.iconBoxColor,
            }}
          >
            {props.icon}
          </div>
          <h1
            className="projectTitleTextType1"
            style={{
              color: props.titleColor,
            }}
          >
            {props.title}
          </h1>
        </div>
        <h2
          className="projectTitleContentText"
          style={{
            color: props.contentColor,
          }}
        >
          {props.content}
        </h2>
      </div>
    );
  } else if (props.type == "2") {
    return (
      <div
        className="generalProjectCardCss"
        style={{
          width: props.width,
          height: props.height,
          background: props.bColor,
          cursor: "default",
        }}
      >
        <div
          className="projectTitleIconBoxType2"
          style={{
            backgroundColor: props.iconBoxColor,
          }}
        >
          {props.icon}
        </div>
        <h1
          className="projectTitleTextType2"
          style={{
            color: props.titleColor,
          }}
        >
          {props.title}
        </h1>
        <h2
          className="projectTitleContentText"
          style={{
            color: props.contentColor,
          }}
        >
          {props.content}
        </h2>
      </div>
    );
  } else {
    return (
      <div
        className="generalProjectCardCss"
        onClick={() => {
          openInNewTab(props.link);
        }}
        style={{
          width: props.width,
          height: props.height,
          background: props.bColor,
          display: "fliex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        {/* <RiMoreFill size="60" color="white" /> */}
        <h1
          className="projectTitleTextType2"
          style={{
            color: props.titleColor,
          }}
        >
          Click for More
        </h1>
        <BsBehance size="60" color={props.titleColor} />
      </div>
    );
  }
};

export default ProjectTitleCard;
