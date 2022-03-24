//generate component react
//rfc
import React, { useState } from "react";
import "./TextForm.css";

export default function TextForm(props) {
  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "black" : "white",
  };
  const handleUpClick = () => {
    // console.log("UpperCase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);

    props.showAlert("Converted to lowercase", "success");
  };

  const handleOnChange = (event) => {
    // console.log("onChange() function : Text = " + event.target.value);
    setText(event.target.value);
  };

  const handleWordsAndCharactersCount = () => {
    let dummyText = text;
    dummyText = dummyText.trim();
    let arr = dummyText.split(" ");
    if (arr.length === 1 && arr[0].length === 0) {
      setWords(0);
      setCharacters(0);
      return;
    } else if (arr.length === 1) {
      setWords(1);
      setCharacters(arr[0].length);
    } else {
      setWords(arr.length);
      let characters = 0;
      for (let i = 0; i < arr.length; i++) {
        characters = characters + arr[i].length;
      }
      setCharacters(characters);
    }
    props.showAlert("Calculated words and characters", "success");
  };

  const trim = () => {
    console.log("called " + text);
    let dText = text.trim();
    setText(dText);

    props.showAlert("sentence trimmed", "success");
  };

  const preview = () => {
    setHidePreview("");
    setPreviewText(text);

    props.showAlert("Preview available", "success");
  };

  const reset = () => {
    setText("");
    setWords(0);
    setCharacters(0);
    setHidePreview("hidden");
    setPreviewText("");
    props.showAlert("TextArea is reset", "success");
  };

  const [text, setText] = useState("");
  const [words, setWords] = useState(0);
  const [characters, setCharacters] = useState(0);
  //   const [minutes, setMinutes] = useState(0);
  const [hidePreview, setHidePreview] = useState("hidden");
  const [previewText, setPreviewText] = useState("");

  //Wrong way to change state : text = "some value"
  //right way to change state : setText("some value");
  return (
    <>
      <div className="container">
        <h1 className="mu-2 mb-2">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            id="myBox"
            rows="8"
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={myStyle}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary myBtn "
          style={myStyle}
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </button>

        <button
          disabled={text.length === 0 ? true : false}
          className="btn btn-primary myBtn "
          style={myStyle}
          onClick={handleLoClick}
        >
          Convert to LowerCase
        </button>

        <button
          disabled={text.length === 0 ? true : false}
          className="btn btn-primary myBtn"
          style={myStyle}
          onClick={handleWordsAndCharactersCount}
        >
          Count Words and Characters
        </button>

        <button
          disabled={text.length === 0 ? true : false}
          className="btn btn-primary myBtn"
          style={myStyle}
          onClick={trim}
        >
          Trim
        </button>

        <button
          disabled={text.length === 0 ? true : false}
          className="btn btn-primary myBtn "
          style={myStyle}
          onClick={preview}
        >
          Preview
        </button>

        <button
          disabled={text.length === 0 ? true : false}
          className="btn btn-primary myBtn"
          style={myStyle}
          onClick={reset}
        >
          Reset
        </button>
      </div>

      <div className="container">
        <h2>Your Text Summary</h2>
        <h3>Number of words and characters : </h3>
        <p>
          {words} words and {characters} characters
        </p>
        <p>{((words * 0.5) / 60).toFixed(2)} minutes to read this paragraph.</p>
        <h2>Preview</h2>
        <p hidden={hidePreview}>{previewText}</p>
      </div>
    </>
  );
}
