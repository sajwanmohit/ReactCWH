//generate component react
//rfc
import React from "react";

export default function TextForm(props) {
  return (
    <div>
      <div className="mb-3">
        <h1> {props.heading}</h1>
        <textarea id="myBox" rows="8" className="form-control"></textarea>
      </div>
      <button className="btn btn-primary">Convert to UpperCase</button>
    </div>
  );
}
