import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Favpages from "./Favpages";

const Tabbody = ({ type }) => {
  var [Webview, setWebview] = useState(null);

  const setWebviewRef = (element) => {
    setWebview(element);
    // console.log(Webview);
  };

  return (
    <>
      <Navbar webview={Webview} />
      {type == 'landing' ? (
        <Favpages />
      ) : (
        <webview
          id="content_frame"
          ref={setWebviewRef}
          src="http://www.google.com"
        ></webview>
      )}
    </>
  );
};

export default Tabbody;
