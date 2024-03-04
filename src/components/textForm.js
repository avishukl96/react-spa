import React, { useState } from "react";
export default function TextForm(props) {
  const [text, setText] = useState("Enter Test here");
  //setText("avanish");
  const handleUpClick = () => {
    console.log("Uppercase Clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleDownClick = () => {
    console.log("lowercase Clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    console.log("lowercase Clicked");
    let newText = "";
    setText(newText);
  };

  const handleCamelClick = () => {
    let newText = text
      .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      })
      .replace(/\s+/g, "");
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="mb-3 my-10">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="myBox"
          rows={6}
          value={text}
          onChange={handleOnChange}
        />
        <button className="btn btn-primary my-3" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary my-3 mx-1" onClick={handleDownClick}>
          Convert to LowerCase
        </button>
        <button
          className="btn btn-primary my-3 mx-1"
          onClick={handleCamelClick}
        >
          Convert to CanelCase
        </button>
        <button className="btn btn-primary my-3" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} charecters
        </p>
        <p>{0.08 * text.split(" ").length} second to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
