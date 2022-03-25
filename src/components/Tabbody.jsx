import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Favpages from './Favpages';


const Tabbody = () => {
  const [url, setUrl] = useState(null);
  // useEffect(() => {console.log(url); ipcRenderer.send("changeWindow", url);}, [url])
  return (
    <>
      <Navbar setUrl={setUrl}/>
      {/* <Favpages /> */}
      <webview src="https://www.github.com/" style={{display: "inline-flex", width: "640px", height: "480px"}} ></webview>
    </>
  )
}

export default Tabbody;