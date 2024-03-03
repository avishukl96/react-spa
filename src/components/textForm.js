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

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    // JSX representing your component
    <div>
      <div className="mb-3 my-10">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="myBox"
          rows={8}
          value={text}
          onChange={handleOnChange}
        />
        <button className="btn btn-primary my-3" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary my-3 mx-3" onClick={handleDownClick}>
          Convert to LowerCase
        </button>
      </div>
    </div>
  );
}
