import React, { useState, useEffect } from "react";
import { HiOutlineHome } from "react-icons/hi";

import { CSSTransition } from "react-transition-group";

import Faq from "react-faq-component";
import FlashScreen from "../FlashScreen/flashScreen";
import TitleSectionBackImage from "../../assets/images/title-section-back.png";
import FAQBackImage from "../../assets/images/faq-back.png";
import FAQMainBackImage from "../../assets/images/projects-back.png";

import "./contactUs.css";

const ContactUs = ({ changeWindow }) => {
  const [displayFlash, setDisplayFlash] = useState(0);
  const [displayWindow, setDisplayWindow] = useState(false);
  const [displayTitle, setDisplayTitle] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  var items = [TitleSectionBackImage, FAQBackImage, FAQMainBackImage];

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

  // const items = [
  //   {
  //     title: "May 1940",
  //     cardTitle: "Dunkirk",
  //     cardSubtitle:
  //       "Men of the British Expeditionary Force (BEF) wade out to..",
  //     cardDetailedText:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages",
  //   },
  //   {
  //     title: "May 1940",
  //     cardTitle: "Dunkirk",
  //     cardSubtitle:
  //       "Men of the British Expeditionary Force (BEF) wade out to..",
  //     cardDetailedText:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages",
  //   },
  //   {
  //     title: "May 1940",
  //     cardTitle: "Dunkirk",
  //     cardSubtitle:
  //       "Men of the British Expeditionary Force (BEF) wade out to..",
  //     cardDetailedText:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages",
  //   },
  //   {
  //     title: "May 1940",
  //     cardTitle: "Dunkirk",
  //     cardSubtitle:
  //       "Men of the British Expeditionary Force (BEF) wade out to..",
  //     cardDetailedText:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages",
  //   },
  // ];

  const data = {
    title: "",
    rows: [
      {
        title: "How do you guarantee product quality?",
        content: `We work in a short iteration mode and regularly test the work results, taking into account all customer preferences and the target audience's reactions. This approach allows us to provide our customers with high-quality products.`,
      },
      {
        title:
          "Do you provide product support services after the app development is complete?",
        content:
          "Yes, we are always here to provide technical support and service for the apps we have developed. We will be more than happy to help you out with implementing new features or integrating third-party services.",
      },
      {
        title: "Will you sign an NDA?",
        content: `Yes, sure. If you want to sign an NDA, we are always ready to do so.`,
      },
      {
        title: "Which payment model do you practice?",
        content:
          "HashBaze offers its customers several pricing models, which allows any company to choose the best option: Fixed Price, Time & Materials, or Dedicated Team Model. We are also open to partnering up with you as well.",
      },
      {
        title:
          "I need an app for iOS and Android. Which platform is better to start with?",
        content:
          "Which platform you should choose depends solely on the future application idea as well as its target audience. Each platform has its own monetization model. Apple users spend more money on paid apps and in-app purchases. If the goal is direct monetization, then iOS should be chosen. There are more Android users; however, they are less likely to pay for app installation and prefer free applications. The more downloads, the more expensive the advertising is in the application. Android should be chosen if the goal is managing user attention. We highly recommend starting with only one platform or building a cross-platform application. This will speed up the launching of the project, and help to assess its weaknesses and make any necessary changes. This will save you money and time.",
      },
      {
        title:
          "Should I be familiar with the technical details to work with you?",
        content:
          "There is absolutely no need for this. After all, you do not have to know medical nuances when seeking a dentist’s services. You do not have to be an expert in software development because, actually, we are. We are ready to explain to you all the unclear moments and the essence of all stages while working on the project. On your part, all you need is a clear vision of what objectives you want to achieve using the desired software product. Therefore, you just have to focus on your needs, and we will help you make them a reality.",
      },
    ],
  };

  useEffect(() => {
    if (displayFlash == 0 && !displayWindow) {
      setDisplayTitle(true);
      setDisplayWindow(true);
    }
  });

  return (
    <div
      className="contact-background"
      style={{
        backgroundImage: `url("${FAQMainBackImage}")`,
      }}
    >
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
            className="contact-bottomNavbar"
            style={{
              backgroundImage: `url("${TitleSectionBackImage}")`,
            }}
          >
            <h2 className="contact-bottomNavbarSubScreenText">FAQ</h2>
          </div>
        ) : (
          <div />
        )}
      </CSSTransition>
      <div
        id="contact-backToHome"
        className="contact-backToHome"
        onClick={() => {
          setDisplayTitle(false);
        }}
      >
        <HiOutlineHome color="#0fd346" size="1.7em" />
      </div>
      <div
        className="contact-sectionBackground"
        style={{
          backgroundImage: `url("${FAQBackImage}")`,
        }}
      >
        {/* <div className="contact-section_sub_title">OUR VALUES</div>
        <div style={{ width: "500px" }}>
          <Chrono
            items={items}
            mode="VERTICAL_ALTERNATING"
            hideControls="true"
          />
        
        </div>
         */}
        {/* <div className="contact-section_sub_title">
          Frequently Asked Questions
        </div> */}
        <div
          style={{
            width: "90vw",
          }}
        >
          <div className="faq-style-wrapper">
            <Faq
              data={data}
              styles={{
                bgColor: "black",
                arrowColor: "white",
              }}
            />
          </div>
        </div>
      </div>
      {!imageLoaded && <FlashScreen centerText="FAQ" />}
    </div>
  );
};

export default ContactUs;
