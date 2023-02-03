import React, { useState, useEffect } from "react";
import "./statCard.css";
import Ring from "./ring";
const StatCard = (props) => {
  const [outerHalfRingSize, setOuterHalfRingSize] = useState("160px");
  const [outerRingSize, setOuterRingSize] = useState("155px");
  const [innerRingSize, setInnerRingSize] = useState("125px");
  const [topTextFontSize, setTopTextFontSize] = useState("20px");
  const [bottomTextFontSize, setBottomTextFontSize] = useState("30px");

  const hasWindow = typeof window !== "undefined";

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow]);

  useEffect(() => {
    
    if (windowDimensions.width <= 420) {
      setOuterHalfRingSize("95px");
      setOuterRingSize("90px")
      setInnerRingSize("70px")
      setTopTextFontSize("10px")
      setBottomTextFontSize("16px")
    }
    else if (windowDimensions.width <= 520) {
      setOuterHalfRingSize("130px");
      setOuterRingSize("125px")
      setInnerRingSize("95px")
      setTopTextFontSize("15px")
      setBottomTextFontSize("22px")
    }
    else{
      setOuterHalfRingSize("160px");
      setOuterRingSize("155px")
      setInnerRingSize("125px")
      setTopTextFontSize("20px")
      setBottomTextFontSize("30px")
    }
  }, [windowDimensions]);

  return (
    <div className="statCard">
      <Ring
        type="f"
        size={innerRingSize}
        borderWidth="5px"
        borderColor="#5ffff1"
      />
      <Ring
        type="bh"
        size={outerHalfRingSize}
        borderWidth="10px"
        borderColor="#5ffff1"
      />
      <Ring
        type="f"
        size={outerRingSize}
        borderWidth="5px"
        borderColor="#5ffff1"
      />
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          background: "transparent",
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: "10px",
        }}
      >
        <h2
          style={{
            fontSize: topTextFontSize,
            margin: "0px",
            color: "white",
            fontFamily: "'Merriweather', serif",
          }}
        >
          {props.titleText}
        </h2>
        <div
          style={{
            width: "60%",
            height: "3px",
            background: "#5ffff1",
            borderRadius: "10px",
          }}
        ></div>
        <h2
          style={{
            fontSize: bottomTextFontSize,
            marginTop: "0px",
            marginBottom: "0px",
            color: "rgba(249, 199, 3, 1)",
            fontFamily: "'Merriweather', serif",
            fontStyle: "italic",
          }}
        >
          {props.text}
        </h2>
      </div>
    </div>
  );
};

export default StatCard;
