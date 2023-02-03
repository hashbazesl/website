import React, { Suspense, lazy } from "react";
import { TypeAnimation } from "react-type-animation";
import Logo from "../../assets/images/logo.png";
import "./landing.css";

const ThreeDLandingPage = ({ changeWindow }) => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="base-landing-background">
      <h1 className="base-landing-title">HashBaze</h1>

      <img
        alt=""
        className="base-landing-circle"
        src={Logo}
        onClick={() => {
          changeWindow(1);
        }}
      />
      <h1 className="base-landing-subtitle">"A SYMBOL TO LEAD ALL"</h1>
      <div className="base-landing-contact-section">
        <img
          alt=""
          className="smIcon"
          src="https://img.icons8.com/fluency/240/null/facebook.png"
          onClick={() => openInNewTab("https://www.facebook.com/HashBaze")}
        />
        <img
          alt=""
          className="smIcon"
          src="https://img.icons8.com/fluency/240/null/instagram-new"
          onClick={() =>
            openInNewTab("https://instagram.com/hash.baze?igshid=YmMyMTA2M2Y=")
          }
        />
        <img
          alt=""
          className="smIcon"
          src="https://img.icons8.com/color/480/null/linkedin.png"
          onClick={() =>
            openInNewTab("https://www.linkedin.com/company/hashbaze/")
          }
        />
        <img
          alt=""
          className="smIcon"
          src="https://img.icons8.com/color/240/null/behance.png"
          onClick={() => openInNewTab("http://be.net/hashbaze")}
        />
      </div>
    </div>
  );
};

export default ThreeDLandingPage;
