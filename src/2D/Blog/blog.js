import React, { useState, useEffect, useRef } from "react";

import BlogCard from "./blogCard";
import { HiOutlineHome } from "react-icons/hi";
import "./blog.css";
import { CSSTransition } from "react-transition-group";
import TitleSectionBackImage from "../../assets/images/title-section-back.png";
import content from "../../utils/content/blog.js";
import FlashScreen from "../FlashScreen/flashScreen";
import { useNavigate } from "react-router-dom";

const Blog = ({ changeWindow }) => {
  const [displayFlash, setDisplayFlash] = useState(0);
  const [displayWindow, setDisplayWindow] = useState(false);
  const [displayTitle, setDisplayTitle] = useState(false);

  const [imageLoaded, setImageLoaded] = useState(false);
  var items = [TitleSectionBackImage];
  const navigate = useNavigate();
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

  useEffect(() => {
    if (displayFlash == 0 && !displayWindow) {
      setDisplayTitle(true);
      setDisplayWindow(true);
    }
  });

  return (
    <div className="blog-background">
      <div className="blog-content-background">
        <div
          id="blog-backToHome"
          className="blog-backToHome"
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
            navigate("/home");
          }}
        >
          {displayWindow || displayTitle ? (
            <div
              className="blog-bottomNavbar"
              style={{
                backgroundImage: `url("${TitleSectionBackImage}")`,
              }}
            >
              <h2 className="blog-bottomNavbarSubScreenText">BLOG</h2>
            </div>
          ) : (
            <div />
          )}
        </CSSTransition>

        <div className="blog-section">
          {content.blogs.map((blog, idx) => {
            return (
              <BlogCard
                key={blog.index}
                tags={blog["tags"]}
                title={blog["title"]}
                time={blog["time"]}
                date={blog["date"]}
                img={blog["img"]}
                link={blog["link"]}
              />
            );
          })}
        </div>
      </div>
      {!imageLoaded && <FlashScreen centerText="MEET HASHBAZE" />}
    </div>
  );
};

export default Blog;
