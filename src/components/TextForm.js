//generate component react
//rfc
import React, { useState } from "react";
import "./TextForm.css";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("UpperCase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
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
  };

  const trim = () => {
    console.log("called " + text);
    let dText = text.trim();
    setText(dText);
  };

  const preview = () => {
    setHidePreview("");
    setPreviewText(text);
  };

  const reset = () => {
    setText("");
    setWords(0);
    setCharacters(0);
    setHidePreview("hidden");
    setPreviewText("");
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
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            id="myBox"
            rows="8"
            className="form-control"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary myBtn " onClick={handleUpClick}>
          Convert to UpperCase
        </button>

        <button className="btn btn-primary myBtn " onClick={handleLoClick}>
          Convert to LowerCase
        </button>

        <button
          className="btn btn-primary myBtn"
          onClick={handleWordsAndCharactersCount}
        >
          Count Words and Characters
        </button>

        <button className="btn btn-primary myBtn" onClick={trim}>
          Trim
        </button>

        <button className="btn btn-primary myBtn " onClick={preview}>
          Preview
        </button>

        <button className="btn btn-primary myBtn" onClick={reset}>
          Reset
        </button>
      </div>

      <div className="container">
        <h1>Your Text Summary</h1>
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
