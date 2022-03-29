import React, { useState, useRef, useEffect } from "react";
import { AiOutlineReload, AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const Navbar = ({ webview }) => {
  const urlRef = useRef();
  var url;
  // const [canGoBack, setCanGoBack] = useState(false);

  // const handleColor = () => {
  //   if (!webview.canGoBack()) {
  //     console.log("true");
  //     // setCanGoBack(true);
  //   } else {
  //     // setCanGoBack(false);
  //     console.log("false");
  //   }
  // };

  // useEffect(() => {handleColor()}, [])

  const handleSubmit = (e) => {
    urlRef.current.blur();
    var exp = /((?:(http|https|Http|Https|rtsp|Rtsp):\/\/(?:(?:[a-zA-Z0-9\$\-\_\.\+\!\*\'\(\)\,\;\?\&\=]|(?:\%[a-fA-F0-9]{2})){1,64}(?:\:(?:[a-zA-Z0-9\$\-\_\.\+\!\*\'\(\)\,\;\?\&\=]|(?:\%[a-fA-F0-9]{2})){1,25})?\@)?)?((?:(?:[a-zA-Z0-9][a-zA-Z0-9\-]{0,64}\.)+(?:(?:aero|arpa|asia|a[cdefgilmnoqrstuwxz])|(?:biz|b[abdefghijmnorstvwyz])|(?:cat|com|coop|c[acdfghiklmnoruvxyz])|d[ejkmoz]|(?:edu|e[cegrstu])|f[ijkmor]|(?:gov|g[abdefghilmnpqrstuwy])|h[kmnrtu]|(?:info|int|i[delmnoqrst])|(?:jobs|j[emop])|k[eghimnrwyz]|l[abcikrstuvy]|(?:mil|mobi|museum|m[acdghklmnopqrstuvwxyz])|(?:name|net|n[acefgilopruz])|(?:org|om)|(?:pro|p[aefghklmnrstwy])|qa|r[eouw]|s[abcdeghijklmnortuvyz]|(?:tel|travel|t[cdfghjklmnoprtvwz])|u[agkmsyz]|v[aceginu]|w[fs]|y[etu]|z[amw]))|(?:(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[1-9])\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[1-9]|0)\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[1-9]|0)\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[0-9])))(?:\:\d{1,5})?)(\/(?:(?:[a-zA-Z0-9\;\/\?\:\@\&\=\#\~\-\.\+\!\*\'\(\)\,\_])|(?:\%[a-fA-F0-9]{2}))*)?(?:\b|$)/gi;
    var regex = new RegExp(exp);
    url = urlRef.current.value;
    e.preventDefault();

    // if url matches url regex
    if (regex.test(url)) {
      if (!url.includes("www")) {
        url = "www." + url;
      }
      if (!url.includes("http://")) {
        url = "http://" + url;
      }
    } else {
      url = "http://www.google.com/search?q=" + url;
    }
    webview.loadURL(url);
  };

  return (
    <>
      <div id="search-and-nav" className="flex mb-2">
        <button
          id="brows-back"
          className="brows-btn p-1 m-1 hover:bg-gray-200 rounded-full"
          onClick={() => {
            webview.goBack();
            webview.addEventListener("load-commit", () => {
              urlRef.current.value = webview.getURL().slice(12, -1);
            });
          }}
        >
          <AiOutlineLeft size={"1.5em"} />
        </button>
        <button
          id="brows-forw"
          className="brows-btn p-1 m-1 hover:bg-gray-200 rounded-full"
          onClick={() => {
            webview.goForward();
            webview.addEventListener("load-commit", () => {
              urlRef.current.value = webview.getURL().slice(12, -1);
            });
          }}
        >
          <AiOutlineRight size={"1.5em"} />
        </button>
        <button
          id="brows-relo"
          className="brows-btn p-1 m-1 hover:bg-gray-200 rounded-full"
          onClick={() => {
            webview.reload();
          }}
        >
          <AiOutlineReload size={"1.5em"} />
        </button>
        <form className="flex w-full" onSubmit={handleSubmit}>
          <input
            type="text"
            name="url-search"
            id="url-search"
            className="leading-8 px-2 ml-1 mr-2 bg-gray-200 w-full"
            ref={urlRef}
            // defaultValue="google.com"
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
