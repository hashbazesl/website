import React, { useEffect } from "react";


const Facebook = () => {
  function init() {
    var chatbox = document.getElementById("fb-customer-chat");
    chatbox.setAttribute("page_id", "108722461942007"); // TODO: move to args
    chatbox.setAttribute("attribution", "biz_inbox");

    window.fbAsyncInit = function () {
      window.FB.init({
        xfbml: true,
        version: "v15.0",
      });
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }

  function cleanup() {
    (function (d, id) {
      var target = d.getElementById(id);
      if (target) {
        target.parentNode.removeChild(target);
      }
    })(document, "facebook-jssdk");

    delete window.FB;
  }

  useEffect(() => {
    init();

    return () => {
      cleanup();
    };
  }, []);

  return (
    <div>
      <div id="fb-root"></div>

      <div id="fb-customer-chat" className="fb-customerchat"></div>
    </div>
  );
};

export default Facebook;
