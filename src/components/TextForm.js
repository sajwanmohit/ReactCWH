//generate component react
//rfc
import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("UpperCase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("onChange() function : Text = " + event.target.value);
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter Text Here");
  //Wrong way to change state : text = "some value"
  //right way to change state : setText("some value");
  return (
    <div>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea
          id="myBox"
          rows="8"
          className="form-control"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to UpperCase
      </button>
    </div>
  );
}
