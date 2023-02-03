import React, { useState, useEffect, useRef } from "react";
import "./blogCard.css";
import Card from "react-animated-3d-card";
import { LazyLoadImage } from "react-lazy-load-image-component";

const BlogCard = (props) => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="blogCard" onClick={() => openInNewTab(props.link)}>
      <Card
        style={{
          backgroundColor: "rgba(28, 29, 29, 1)",
          width: "300px",
  
          cursor: "pointer",
        }}
        borderRadius="5px"
        shineStrength={0.2}
      >
        <div>
          <LazyLoadImage
            className="blogCardImg"
            src={props.img}
            placeholderSrc={props.img}
            alt=""
            
          />
          <div className="blogCardContent">
            <div className="blogCardTagSection">
              {props.tags.map((name, idx) => {
                return (
                  <div className="blogCardTag" key={idx}>
                    {name}
                  </div>
                );
              })}
            </div>
            <h1 className="blogCardTitle">{props.title}</h1>
            <h1 className="blogCardBottomText">
              {props.date}
              <span> &nbsp; &nbsp; &nbsp; &nbsp; {props.time}</span>
            </h1>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BlogCard;
