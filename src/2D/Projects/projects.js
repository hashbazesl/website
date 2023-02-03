import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";

import "./projects.css";
import ProjectTile from "./projectTile";
import ProjectTitleCard from "./projectTitleCard";

import { HiOutlineHome } from "react-icons/hi";

import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import content from "../../utils/content/projects.js";
import FlashScreen from "../FlashScreen/flashScreen";
import ProjectsBackImage from "../../assets/images/projects-back.png";
import ProjectsBarBack from "../../assets/images/title-section-back.png";
import Perks from "../../assets/images/perks-app.png";
import Familife from "../../assets/images/familife-app.png";
import Fitness from "../../assets/images/fitness-app.png";
import Law from "../../assets/images/law-app.png";
import PersonPilot from "../../assets/images/pp-app.png";

const Projects = ({ changeWindow }) => {
  const totalProjectCount = content.projects.length;
  const [minDisplayNum, setMinDisplayNum] = useState(1);
  const [maxDisplayNum, setMaxDisplayNum] = useState(4);
  const [displayFlash, setDisplayFlash] = useState(0);
  const [displayWindow, setDisplayWindow] = useState(false);
  const [displayTitle, setDisplayTitle] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(0);
  const [displayImg, setDisplayImg] = useState(Perks);

  const hasWindow = typeof window !== "undefined";
  const [imageLoaded, setImageLoaded] = useState(false);
  var items = [
    ProjectsBackImage,
    ProjectsBarBack,
    Perks,
    Familife,
    Fitness,
    Law,
    PersonPilot,
  ];

  function loader(items, thingToDo, allDone) {
    if (!items) {
      // nothing to do.
      return;
    }

    if ("undefined" === items.length) {
      // convert single item to array.
      items = [items];
    }

    var count = items.length;

    // this callback counts down the things to do.
    var thingToDoCompleted = function (items, i) {
      count--;
      if (0 == count) {
        allDone(items);
      }
    };

    for (var i = 0; i < items.length; i++) {
      // 'do' each thing, and await callback.
      thingToDo(items, i, thingToDoCompleted);
    }
  }

  function loadImage(items, i, onComplete) {
    var onLoad = function (e) {
      e.target.removeEventListener("load", onLoad);
      onComplete(items, i);
    };
    var img = new Image();
    img.addEventListener("load", onLoad, false);
    img.src = items[i];
  }

  useEffect(() => {
    loader(items, loadImage, function () {
      setImageLoaded(true);
    });
  }, []);

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
    if (displayFlash == 0 && !displayWindow) {
      setDisplayTitle(true);
      setDisplayWindow(true);
    }
  });
  useEffect(() => {
    if (windowDimensions.width <= 450) {
      setMaxDisplayNum(3);
    } else {
      setMaxDisplayNum(4);
    }
  }, [windowDimensions]);

  useEffect(() => {
    if (content.projects[clickedIndex].title == "Perks") {
      setDisplayImg(Perks);
    } else if (content.projects[clickedIndex].title == "MyLawyer") {
      setDisplayImg(Law);
    } else if (content.projects[clickedIndex].title == "GymBuddy") {
      setDisplayImg(Fitness);
    } else if (content.projects[clickedIndex].title == "FamiLife") {
      setDisplayImg(Familife);
    } else if (content.projects[clickedIndex].title == "PersonPilot") {
      setDisplayImg(PersonPilot);
    }
  }, [clickedIndex]);

  return (
    <div
      className="project-background"
      style={{
        backgroundImage: `url("${ProjectsBackImage}")`,
      }}
    >
      <div className="projectCard">
        <div
          className="projectCardImg"
          style={{
            backgroundImage: `url("${displayImg}")`,
          }}
        ></div>
        <div
          className="projectCardDisc"
          style={{ background: content.projects[clickedIndex].backGrad }}
        >
          <ProjectTitleCard
            type="1"
            icon={content.projects[clickedIndex].box1.icon}
            iconBoxColor={content.projects[clickedIndex].box1.iconBox}
            title={content.projects[clickedIndex].box1.title}
            content={content.projects[clickedIndex].box1.content}
            bColor={content.projects[clickedIndex].grad}
            titleColor={content.projects[clickedIndex].titleColor}
            contentColor={content.projects[clickedIndex].contentColor}
          />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <ProjectTitleCard
              type="2"
              icon={content.projects[clickedIndex].box2.icon}
              iconBoxColor={content.projects[clickedIndex].box2.iconBox}
              title={content.projects[clickedIndex].box2.title}
              content={content.projects[clickedIndex].box2.content}
              width="50%"
              bColor={content.projects[clickedIndex].grad}
              titleColor={content.projects[clickedIndex].titleColor}
              contentColor={content.projects[clickedIndex].contentColor}
            />
            <ProjectTitleCard
              type="2"
              icon={content.projects[clickedIndex].box3.icon}
              iconBoxColor={content.projects[clickedIndex].box3.iconBox}
              title={content.projects[clickedIndex].box3.title}
              content={content.projects[clickedIndex].box3.content}
              width="50%"
              bColor={content.projects[clickedIndex].grad}
              titleColor={content.projects[clickedIndex].titleColor}
              contentColor={content.projects[clickedIndex].contentColor}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <ProjectTitleCard
              type="2"
              icon={content.projects[clickedIndex].box4.icon}
              iconBoxColor={content.projects[clickedIndex].box4.iconBox}
              title={content.projects[clickedIndex].box4.title}
              content={content.projects[clickedIndex].box4.content}
              width="50%"
              bColor={content.projects[clickedIndex].grad}
              titleColor={content.projects[clickedIndex].titleColor}
              contentColor={content.projects[clickedIndex].contentColor}
            />
            <ProjectTitleCard
              type="3"
              width="50%"
              bColor={content.projects[clickedIndex].grad}
              titleColor={content.projects[clickedIndex].titleColor}
              contentColor={content.projects[clickedIndex].contentColor}
              link={content.projects[clickedIndex].link}
            />
          </div>
        </div>
      </div>
      <CSSTransition
        in={displayTitle}
        timeout={600}
        classNames={{
          enter: "enterTitle",
          enterActive: "enterTitleActive",
          exitActive: "exitTitleActive",
        }}
        onExited={() => {
          setDisplayWindow(false);
          changeWindow(1);
        }}
      >
        {displayWindow || displayTitle ? (
          <div
            className="projectsBar"
            style={{
              backgroundImage: `url("${ProjectsBarBack}")`,
            }}
          >
            <div
              id="backToHome"
              className="project-backToHome"
              onClick={() => {
                setDisplayTitle(false);
              }}
            >
              <HiOutlineHome color="#0fd346" size="1.7em" />
            </div>
            <div
              id="backCarosalButton"
              className="project-backCarosalButton"
              onClick={() => {
                if (minDisplayNum != 1) {
                  setMaxDisplayNum(maxDisplayNum - 1);
                  setMinDisplayNum(minDisplayNum - 1);
                }
              }}
            >
              <MdOutlineArrowBackIosNew color="#ecba05" size="1.7em" />
            </div>
            <div
              id="fowardCarosalButton"
              className="project-fowardCarosalButton"
              onClick={() => {
                if (maxDisplayNum != totalProjectCount) {
                  setMaxDisplayNum(maxDisplayNum + 1);
                  setMinDisplayNum(minDisplayNum + 1);
                }
              }}
            >
              <MdOutlineArrowForwardIos color="#ecba05" size="1.7em" />
            </div>
            {Array(maxDisplayNum - minDisplayNum + 1)
              .fill()
              .map((_, idx) => minDisplayNum + idx)
              .map((index) => {
                if (index == minDisplayNum) {
                  return (
                    <ProjectTile
                      key={content.projects[index - 1].index}
                      title={content.projects[index - 1].title}
                      index={content.projects[index - 1].index}
                      platform={content.projects[index - 1].platform}
                      position="start"
                      setClickedIndex={setClickedIndex}
                      clickedIndex={clickedIndex}
                    />
                  );
                } else if (index == maxDisplayNum) {
                  return (
                    <ProjectTile
                      key={content.projects[index - 1].index}
                      title={content.projects[index - 1].title}
                      index={content.projects[index - 1].index}
                      platform={content.projects[index - 1].platform}
                      position="end"
                      setClickedIndex={setClickedIndex}
                      clickedIndex={clickedIndex}
                    />
                  );
                } else {
                  return (
                    <ProjectTile
                      key={content.projects[index - 1].index}
                      title={content.projects[index - 1].title}
                      index={content.projects[index - 1].index}
                      platform={content.projects[index - 1].platform}
                      setClickedIndex={setClickedIndex}
                      clickedIndex={clickedIndex}
                    />
                  );
                }
              })}
          </div>
        ) : (
          <div />
        )}
      </CSSTransition>
      {!imageLoaded && <FlashScreen centerText="PROJECTS" />}
    </div>
  );
  // }
};

export default Projects;
