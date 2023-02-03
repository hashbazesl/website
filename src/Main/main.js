import React, { useState, Suspense } from "react";

import TwoDLandingPage from "../2D/Landing/landing";
import ThreeDLandingPage from "../3D/Landing/landing";

import FlashScreen from "../2D/FlashScreen/flashScreen";
import Projects from "../2D/Projects/projects";
import Blog from "../2D/Blog/blog";
import ContactUs from "../2D/ContactUs/contactUs";

import AboutUs from "../2D/AboutUs/aboutus";
import Facebook from "./messenger";
import PopUpWindow from "./popUpWindow";

const MainControl = () => {
  const [windowState, setWindowState] = useState(0);

  function changeWindowState(value) {
    setWindowState(value);
  }

  // return (
  //   <div>
  //     <Suspense
  //       fallback={
  //         <FlashScreen
  //           centerText="MEET HASHBAZE"
  //         />
  //       }
  //     >
  //       <AboutUs />
  //     </Suspense>
  //   </div>
  // );

  if (windowState == 0) {
    return (
      <div>
        <Facebook />
        <PopUpWindow />
        {/* <ContactUsButton /> */}
        <ThreeDLandingPage changeWindow={changeWindowState} />
      </div>
    );
  } else if (windowState == 1) {
    return (
      <div>
        <Facebook />
        <PopUpWindow />
        <TwoDLandingPage
          changeWindow={changeWindowState}
          windowState={windowState}
        />
      </div>
    );
  } else if (windowState == 2) {
    return (
      // <div>
      //   <AboutUS changeWindow={changeWindowState} />
      // </div>
      <div>
        {/* <Facebook /> */}
        <PopUpWindow />
        <AboutUs changeWindow={changeWindowState} />
      </div>
    );
  } else if (windowState == 3) {
    return (
      <div>
        <Facebook />
        <PopUpWindow />
        <Blog changeWindow={changeWindowState} />
        {/* <Suspense fallback={<FlashScreen centerText="BLOG" />}>
          <Blog changeWindow={changeWindowState} />
        </Suspense> */}
        {/* <FlashScreen centerText="BLOG" /> */}
      </div>
    );
  } else if (windowState == 4) {
    return (
      <div>
        {/* <Facebook /> */}
        {/* <PopUpWindow /> */}
        <Projects changeWindow={changeWindowState} />
      </div>
    );
  } else if (windowState == 5) {
    return (
      <div>
        <Facebook />
        <PopUpWindow />
        {/* <Suspense fallback={<FlashScreen centerText="CONTACT US" />}>
          <ContactUs changeWindow={changeWindowState} />
        </Suspense> */}
        <ContactUs changeWindow={changeWindowState} />
      </div>
    );
  }
  // return (
    // <Projects />
    // <div>
    //   <Suspense fallback={<FlashScreen centerText="MEET HASHBAZE" />}>
    //     <AboutUs/>
    //   </Suspense>
    // </div>
    // <AboutUs />
    // <Blog/>
    // <ContactUs/>
    // <FlashScreen centerText="MEET HASHBAZE" />
  // );
};

export default MainControl;
