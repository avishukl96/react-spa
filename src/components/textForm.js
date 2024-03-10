import React, { useState } from "react";
export default function TextForm(props) {
  const [text, setText] = useState("Enter Test here");
  //setText("avanish");
  const handleUpClick = () => {
    console.log("Uppercase Clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Uppercase Clicked", "success");
  };

  const handleDownClick = () => {
    console.log("lowercase Clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Lowercase Clicked", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  };

  const handleCamelClick = () => {
    let newText = text
      .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      })
      .replace(/\s+/g, "");
    setText(newText);
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleRemoveExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="mb-3 my-10 container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="myBox"
          rows={6}
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "dark" ? "grey" : "white",
            color: props.mode === "dark" ? "white" : "#042743",
          }}
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
          Convert to CamelCase
        </button>
        <button className="btn btn-primary my-3 mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button
          className="btn btn-primary my-3 mx-1"
          onClick={handleRemoveExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary my-3" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} charecters
        </p>
        <p>{0.2 * text.split(" ").length} second to read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in above textbox to preview here"}
        </p>
      </div>
    </>
  );
}
