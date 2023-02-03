import React, { useState, useEffect, useRef } from "react";
import "./landing.css";
import Logo from "../../assets/images/logo.png";
import { RiTeamFill } from "react-icons/ri";
import { MdComputer } from "react-icons/md";
import { MdQuestionAnswer } from "react-icons/md";
import { RiArticleFill } from "react-icons/ri";
import content from "../../utils/content/landing.js";
import { CSSTransition } from "react-transition-group";
import { TypeAnimation } from "react-type-animation";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Snowfall from "react-snowfall";

import HomeImg1 from "../../assets/images/home-1.jpg";
import HomeImg2 from "../../assets/images/home-2.jpg";
import HomeImg3 from "../../assets/images/home-3.jpg";

const TwoDLandingPage = ({ changeWindow, windowState }) => {
  let mottoArray = content.mottoText;
  let img_array = [HomeImg1, HomeImg2, HomeImg3];
  const [imgIndex, setImgIndex] = useState(0);
  const [loadPane, setLoadPane] = useState(false);
  const [visiblePane, setVisiblePane] = useState(false);
  const [loadNavBar, setLoadNavBar] = useState(false);
  const [visibleNavBar, setVisibleNavBar] = useState(false);
  const [windowIndex, setWindowIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (imgIndex == img_array.length - 1) {
        setImgIndex(0);
      } else {
        setImgIndex(imgIndex + 1);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [imgIndex]);

  useEffect(() => {
    if (windowState && !visiblePane) {
      setLoadPane(true);
      setVisiblePane(true);
    }
  });
  function unload2DWindow(value) {
    setLoadNavBar(false);
    setWindowIndex(value);
  }

  return (
    <div className="landingRoot">
      <CSSTransition
        in={loadPane}
        timeout={1200}
        classNames={{
          enter: "enterLine",
          enterActive: "enterLineActive",
          exitActive: "exitLineActive",
        }}
        onEntered={() => {
          setLoadNavBar(true);
          setVisibleNavBar(true);
        }}
      >
        {visiblePane ? <div className="line" /> : <div />}
      </CSSTransition>

      <CSSTransition
        in={loadNavBar}
        timeout={600}
        classNames={{
          enter: "enterNavBar",
          enterActive: "enterNavBarActive",
          exitActive: "exitNavBarActive",
        }}
        onExited={() => {
          setLoadPane(false);
          setVisibleNavBar(false);
        }}
      >
        {visibleNavBar ? (
          <div className="bottomNavbar">
            <div
              className="bottomNavbar-icon"
              onClick={() => {
                unload2DWindow(2);
              }}
            >
              <RiTeamFill color="#5ffff1" size="1.7em" />
            </div>
            <div
              className="bottomNavbar-icon"
              onClick={() => {
                unload2DWindow(4);
              }}
            >
              <MdComputer color="#5ffff1" size="1.7em" />
            </div>

            <img
              alt=""
              className="circle"
              src={Logo}
              onClick={() => unload2DWindow(0)}
            ></img>
            <div
              className="bottomNavbar-icon"
              onClick={() => {
                unload2DWindow(3);
              }}
            >
              <RiArticleFill color="#5ffff1" size="1.7em" />
            </div>
            <div
              className="bottomNavbar-icon"
              onClick={() => {
                unload2DWindow(5);
              }}
            >
              <MdQuestionAnswer color="#5ffff1" size="1.7em" />
            </div>
          </div>
        ) : (
          <div />
        )}
      </CSSTransition>

      <CSSTransition
        in={loadPane}
        timeout={1200}
        classNames={{
          enter: "enterLeftOrUp",
          enterActive: "enterLeftOrUpActive",
          exitActive: "exitLeftOrUpActive",
        }}
        onExited={() => {
          setVisiblePane(false);
          changeWindow(windowIndex);
        }}
      >
        {visiblePane ? (
          <div className="container-leftOrUp">
            <div className="center">
              <h1 className="title">HashBaze</h1>
              <h1 className="subtitle">
                innovate for{" "}
                <span
                  style={{
                    color: "#FFDB1E",
                    filter: "drop-shadow(0px 0px 3px rgba(255, 219, 30, 0.5))",
                  }}
                >
                  NextGen
                </span>
              </h1>
            </div>

            <TypeAnimation
              sequence={[
                mottoArray[0],
                1000,
                mottoArray[1],
                1000,
                mottoArray[2],
                1000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              className="motto-text"
            />
          </div>
        ) : (
          <div></div>
        )}
      </CSSTransition>

      <CSSTransition
        in={loadPane}
        timeout={1200}
        classNames={{
          enter: "enterRightOrDown",
          enterActive: "enterRightOrDownActive",
          exitActive: "exitRightOrDownActive",
        }}
      >
        {visiblePane ? (
          <div className="container-rightOrDown">
            <Snowfall />
            <h2 className="landingRightText">
              LIVE THE <span style={{ color: "#00f760", fontWeight:"700" }}>EXPERIENCE</span> CONNECT WITH{" "}
              <span style={{ color: "#FFDB1E" ,fontWeight:"700"}}>HashBaze</span>
            </h2>
            {/* <h2>From <span>HashBaze</span> Team</h2> */}
            {/* <h2 className="topic-rightOrDown">New on Platform</h2> */}
            {/* <div className="highlightTag-outer">
              <div className="highlightTag">
                <img
                  className="rightImgBox"
                  src={img_array[imgIndex]}
                  // effect="blur"
                  // loading="lazy"
                  // placeholderSrc={img_array[imgIndex]}
                />
              </div>
            </div> */}
          </div>
        ) : (
          <div></div>
        )}
      </CSSTransition>
    </div>
  );
};

export default TwoDLandingPage;
