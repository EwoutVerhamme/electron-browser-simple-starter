import React, { useRef, useState } from "react";

const Tile = ({ url }) => {
  var favicon = 'http://' + url + '/favicon.ico';
  var domain = 'www.' + url;

  return (
    <>
      <img src={favicon} alt="github" className="w-16" />
      <span>{domain}</span>
    </>
  );
};

export default Tile;
