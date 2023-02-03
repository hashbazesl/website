import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./aboutus.css";
import { HiOutlineHome } from "react-icons/hi";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
} from "react-simple-maps";

import { Carousel } from "react-responsive-carousel";

import TechCard from "./techCard";
import StatCard from "./statCard";
import ValueList from "./valueList";
import FlashScreen from "../FlashScreen/flashScreen";
import { CSSTransition } from "react-transition-group";
import content from "../../utils/content/aboutus.js";
import ServiceCard from "./serviceCard";

import TechStackBackImage from "../../assets/images/techstack-back.png";
import WhoWeAreBackImage from "../../assets/images/who-we-are-back.png";
import AboutUsBackImage from "../../assets/images/aboutus-back.png";
import OurValuesBack from "../../assets/images/our-values-back.png";
import ServicesBackImage from "../../assets/images/services-back.png";
import MapBackImage from "../../assets/images/map-back.png";
import TitleSectionBackImage from "../../assets/images/title-section-back.png";
import AppService from "../../assets/images/app-service.jpg";
import BCService from "../../assets/images/blockchain-service.jpg";
import CloudService from "../../assets/images/cloud-service.jpg";
import AiService from "../../assets/images/ai-service.jpg";

const AboutUs = ({ changeWindow }) => {
  const [displayFlash, setDisplayFlash] = useState(0);
  const [displayTitle, setDisplayTitle] = useState(false);
  const [displayWindow, setDisplayWindow] = useState(false);

  const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });
  const [imageLoaded, setImageLoaded] = useState(false);
  var items = [
    TechStackBackImage,
    WhoWeAreBackImage,
    AboutUsBackImage,
    OurValuesBack,
    MapBackImage,
    ServicesBackImage,
    TitleSectionBackImage,
    AppService,
    BCService,
    CloudService,
    AiService,
  ];

  const geoUrl =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries-sans-antarctica.json";
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

  function handleMoveEnd(position) {
    setPosition(position);
  }

  useEffect(() => {
    if (displayFlash == 0 && !displayWindow) {
      setDisplayTitle(true);
      setDisplayWindow(true);
    }
  });
  return (
    <div
      className="aboutus-background"
      id="aboutus-background"
      style={{
        backgroundImage: `url("${AboutUsBackImage}")`,
      }}
    >
      <div
        id="backToHome"
        className="about-backToHome"
        onClick={() => {
          setDisplayTitle(false);
        }}
      >
        <HiOutlineHome color="#0fd346" size="1.7em" />
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
            className="aboutus-bottomNavbar"
            style={{
              backgroundImage: `url("${TitleSectionBackImage}")`,
            }}
          >
            <h2 className="aboutus-bottomNavbarSubScreenText">ABOUT US</h2>
          </div>
        ) : (
          <div />
        )}
      </CSSTransition>

      <Carousel
        showStatus={false}
        showThumbs={false}
        emulateTouch={true}
        showArrows={false}
        preventMovementUntilSwipeScrollTolerance={true}
        swipeScrollTolerance={50}
        renderArrowPrev={(clickHandler, hasPrev, labelPrev) => (
          <div
            id="backCarosalButton"
            className="about-backCarosalButton"
            onClick={clickHandler}
          >
            <MdOutlineArrowBackIosNew color="#ecba05" size="1.7em" />
          </div>
        )}
        renderArrowNext={(clickHandler, hasPrev, labelPrev) => (
          <div
            id="fowardCarosalButton"
            className="about-fowardCarosalButton"
            onClick={clickHandler}
          >
            <MdOutlineArrowForwardIos color="#ecba05" size="1.7em" />
          </div>
        )}
      >
        <div className="cardBackground">
          <div
            id="mainCard-whoWeAre"
            className="mainCard"
            style={{
              backgroundImage: `url("${WhoWeAreBackImage}")`,
            }}
          >
            <div className="card_title">WHO WE ARE</div>
            <div className="aboutSection">
              <div className="whoWeAreSection">
                {/* <div
                  className="whoWeAreImg"
                  style={{
                    backgroundImage: `url("${ServicesBackImage}")`,
                  }}
                ></div> */}
                <div>
                  <h2 className="infoText">{content.whoWeAre.intro}</h2>
                  <div className="rowField">
                    <div className="vision_mission">
                      <div className="icon_title_text">MISSION</div>
                      <div className="icon_text">
                        {content.whoWeAre.mission}
                      </div>
                    </div>
                    <div className="vision_mission">
                      <div className="icon_title_text">VISION</div>
                      <div className="icon_text">{content.whoWeAre.vision}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cardBackground">
          <div
            className="mainCard"
            style={{
              backgroundImage: `url("${ServicesBackImage}")`,
            }}
          >
            <div className="card_title">OUR SERVICES</div>
            <div className="ourServicesSection">
              {content.services.map((service, idx) => {
                return (
                  <ServiceCard
                    key={idx}
                    img={[AppService, BCService, CloudService, AiService]}
                    title={service.title}
                    desc={service.content}
                    index={service.index}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="cardBackground">
          <div
            className="mainCard"
            style={{
              backgroundImage: `url("${MapBackImage}")`,
            }}
          >
            <div className="statSection">
              <StatCard titleText="Years" text="2.5+" />
              <StatCard titleText="Clients" text="5" />
              <StatCard titleText="Projects" text="15+" />
            </div>

            <ComposableMap>
              <ZoomableGroup
                zoom={position.zoom}
                center={position.coordinates}
                onMoveEnd={handleMoveEnd}
              >
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        style={{
                          default: {
                            fill: "#5ffff1",
                          },
                          hover: {
                            fill: "rgba(249, 199, 3, 1)",
                          },
                        }}
                      />
                    ))
                  }
                </Geographies>

                <Marker coordinates={[79.861244, 6.927079]}>
                  <g
                    fill="none"
                    stroke="#ec4d0a"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    transform="translate(-12, -24)"
                  >
                    <circle cx="12" cy="10" r="3" />
                    <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                  </g>
                  <text
                    textAnchor="middle"
                    y="20px"
                    style={{
                      fontFamily: "system-ui",
                      fontSize: "23px",
                      fill: "rgba(249, 199, 3, 1)",
                    }}
                  >
                    SriLanka
                  </text>
                </Marker>
                <Marker coordinates={[132.373659, -24.020092]}>
                  <g
                    fill="none"
                    stroke="#ec4d0a"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    transform="translate(-12, -24)"
                  >
                    <circle cx="12" cy="10" r="3" />
                    <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                  </g>
                  <text
                    textAnchor="middle"
                    y="80px"
                    style={{
                      fontFamily: "system-ui",
                      fontSize: "23px",
                      fill: "rgba(249, 199, 3, 1)",
                    }}
                  >
                    Austrailia
                  </text>
                </Marker>
                <Marker coordinates={[-103.871133, 30.681862]}>
                  <g
                    fill="none"
                    stroke="#ec4d0a"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    transform="translate(-12, -24)"
                  >
                    <circle cx="12" cy="10" r="3" />
                    <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                  </g>
                  <text
                    textAnchor="middle"
                    y="80px"
                    style={{
                      fontFamily: "system-ui",
                      fontSize: "23px",
                      fill: "rgba(249, 199, 3, 1)",
                    }}
                  >
                    America
                  </text>
                </Marker>
                <Marker coordinates={[9.630085, 55.995581]}>
                  <g
                    fill="none"
                    stroke="#ec4d0a"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    transform="translate(-12, -24)"
                  >
                    <circle cx="12" cy="10" r="3" />
                    <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                  </g>
                  <text
                    textAnchor="middle"
                    y="-40px"
                    style={{
                      fontFamily: "system-ui",
                      fontSize: "23px",
                      fill: "rgba(249, 199, 3, 1)",
                    }}
                  >
                    Denmark
                  </text>
                </Marker>
                <Marker coordinates={[10.753189, 51.321823]}>
                  <g
                    fill="none"
                    stroke="#ec4d0a"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    transform="translate(-12, -24)"
                  >
                    <circle cx="12" cy="10" r="3" />
                    <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                  </g>
                  <text
                    textAnchor="middle"
                    y="0px"
                    x="-60px"
                    style={{
                      fontFamily: "system-ui",
                      fontSize: "23px",
                      fill: "rgba(249, 199, 3, 1)",
                    }}
                  >
                    Germany
                  </text>
                </Marker>
              </ZoomableGroup>
            </ComposableMap>
          </div>
        </div>
        <div className="cardBackground">
          <div
            className="mainCard"
            style={{
              backgroundImage: `url("${TechStackBackImage}")`,
            }}
          >
            <div className="card_title">TECH STACK</div>
            <div className="aboutSection">
              <h2 className="infoText">{content.techStack}</h2>
              <div className="techStack">
                <TechCard imgLink="https://img.icons8.com/color/480/000000/flutter.png"></TechCard>
                <TechCard imgLink="https://img.icons8.com/color/480/000000/nodejs.png"></TechCard>
                <TechCard imgLink="https://img.icons8.com/color/480/000000/amazon-web-services.png"></TechCard>
                <TechCard imgLink="https://img.icons8.com/color/480/000000/firebase.png"></TechCard>
                <TechCard imgLink="https://img.icons8.com/color/480/000000/react-native.png"></TechCard>
                <TechCard imgLink="https://img.icons8.com/color/480/000000/mysql-logo.png"></TechCard>
                <TechCard imgLink="https://img.icons8.com/color/480/000000/ethereum.png"></TechCard>
                <TechCard imgLink="https://img.icons8.com/nolan/256/solana.png"></TechCard>
                <TechCard imgLink="https://img.icons8.com/color/480/000000/tensorflow.png"></TechCard>
                <TechCard imgLink="https://img.icons8.com/color/480/null/git.png"></TechCard>
                <TechCard imgLink="https://img.icons8.com/fluency/240/null/docker.png"></TechCard>
                <TechCard imgLink="https://img.icons8.com/color/480/null/jenkins.png"></TechCard>
                <TechCard imgLink="https://img.icons8.com/color/480/null/google-cloud-platform.png"></TechCard>
              </div>
            </div>
          </div>
        </div>
        <div className="cardBackground">
          <div
            className="mainCard"
            style={{
              backgroundImage: `url("${OurValuesBack}")`,
            }}
          >
            <div className="card_title">OUR VALUES</div>
            <div className="aboutSection">
              <h2
                className="infoText"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(66, 66, 66, 0.9), rgba(12, 12, 12, 1))",
                }}
              >
                {content.ourValues.intro}
              </h2>
              <ValueList values={content.ourValues.values} />
            </div>
          </div>
        </div>
      </Carousel>
      {!imageLoaded && <FlashScreen centerText="MEET HASHBAZE" />}
    </div>
  );
};

export default AboutUs;
