//import React, { useState } from "react";
import React from "react";

export default function About(props) {
  // const [myStyle, setmyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  //const [btnText, setbtnText] = useState("Enable Dark Mode");

  // const toggleStyleHandle = () => {
  //   if (myStyle?.backgroundColor === "white") {
  //     setmyStyle((prev) => {
  //       return {
  //         ...prev,
  //         color: "white",
  //         backgroundColor: "black",
  //         border: "1px solid white",
  //       };
  //     });
  //     setbtnText("Enable White Mode");
  //   } else {
  //     setmyStyle((prev) => {
  //       return {
  //         ...prev,
  //         color: "black",
  //         backgroundColor: "white",
  //       };
  //     });
  //     setbtnText("Enable Black Mode");
  //   }
  // };

  let myStyle = {
    color: props.mode === "dark" ? "white" : "#042743",
    backgroundColor: props.mode === "dark" ? "#042743" : "white",
  };

  return (
    <>
      <div className="container" style={myStyle}>
        <h1 className="my-6">About Us</h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={myStyle}
              >
                <strong> Analyse Your text</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                Textutils gives you a way to analyze your text quickly and
                efficiently. be it word count, charector Count and many more.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={myStyle}
              >
                <strong>Free to use</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                Textutils is a free charector counter tools.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={myStyle}
              >
                <strong>Browser campatible</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                This word Counter software works in any web browsers
              </div>
            </div>
          </div>
        </div>
        {/* <button
          type="button"
          onClick={toggleStyleHandle}
          className="btn btn-primary my-3"
        >
          {btnText}
        </button> */}
      </div>
      {/* <div className="container">
        <button
          type="button"
          onClick={toggleStyleHandle}
          className="btn btn-primary my-3"
        >
          {btnText}
        </button>
      </div> */}
    </>
  );
}
