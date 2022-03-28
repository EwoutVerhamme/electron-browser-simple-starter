import React, { useState, useRef } from "react";
import { AiOutlineReload, AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const Navbar = ({ setUrl }) => {
  const urlRef = useRef();

  const handleSubmit = (e) => {
    var url = urlRef.current.value;
    e.preventDefault();
    console.log(`URL before: ${url}`);
    if(!url.includes("www")) {
      url = "www." + url;
    }
    if(!url.includes("http://")) {
      url = "http://" + url;
    }
    setUrl(url);
  };
  return (
    <>
      <div id="search-and-nav" className="flex">
        <button
          id="brows-back"
          className="brows-btn p-1 m-1 hover:bg-gray-200 rounded-full"
          onClick={() => {
            history.back();
          }}
        >
          <AiOutlineLeft size={"1.5em"} />
        </button>
        <button
          id="brows-forw"
          className="brows-btn p-1 m-1 hover:bg-gray-200 rounded-full"
          onClick={() => {
            history.forward();
          }}
        >
          <AiOutlineRight size={"1.5em"} />
        </button>
        <button
          id="brows-relo"
          className="brows-btn p-1 m-1 hover:bg-gray-200 rounded-full"
          onClick={() => {
            location.reload();
          }}
        >
          <AiOutlineReload size={"1.5em"} />
        </button>
        <form className="flex w-full mb-2" onSubmit={handleSubmit}>
          <input
            type="text"
            name="url-search"
            id="url-search"
            className="leading-8 px-2 mx-1 bg-gray-200 w-full"
            ref={urlRef}
          />
          <input
            type="text"
            name="search"
            id="search"
            className="leading-8 px-2 ml-1 mr-2 bg-gray-200 w-80"
            placeholder="Zoeken op Google..."
          />
          <input type="submit" hidden />
        </form>
      </div>
      {/* <div id="bookmarks" className="flex m-2 mt-1 leading-8 bg-slate-200">
          bookmarks test
      </div> */}
    </>
  );
};

export default Navbar;
