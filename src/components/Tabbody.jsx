import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import Favpages from './Favpages';

const Tabbody = () => {
  const [url, setUrl] = useState(null);
  // useEffect(() => {console.log(url); ipcRenderer.send("changeWindow", url);}, [url])
  return (
    <>
      <Navbar />
      {/* <Favpages /> */}
      <webview src="https://www.google.com/" ></webview>
    </>
  )
}

export default Tabbody;