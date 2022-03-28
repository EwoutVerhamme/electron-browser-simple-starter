import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Favpages from "./Favpages";

const Tabbody = () => {
  var [url, setUrl] = useState(null);
  var [Webview, setWebview] = useState(null);

  useEffect(() => {
    // console.log(url);
    // ipcRenderer.send("changeWindow", url);
  }, [url]);

  const setWebviewRef = element => {
    setWebview(element);
    // console.log(Webview);
  }

  return (
    <>
      <Navbar setUrl={setUrl} webview={Webview} />
      {/* <Favpages /> */}
      <webview id="content_frame" ref={setWebviewRef} src={url ? url : "http://www.google.com"}></webview>
    </>
  );
};

export default Tabbody;
