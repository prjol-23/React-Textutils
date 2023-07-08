import React, { useState } from "react";
export default function TextForm(props) {

  const [text, setText] = useState("Enter text here");
  // {text="does it ever happen";} wrong way to change the state

  //setText('does it ever happen'); correct
  const handleUpClick = () => {
    console.log("You have clicked Uppercase button "  + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    console.log("You have clicked Lowercase button "  + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClear = () => {
    console.log("You have clicked clear button"  +  text);
    let newText = ('');
    setText(newText);
  };
  const handleCopy = () => {
    let text= document.getElementById('myBox');
    console.log("You have clicked to copy"  + text);
    text.select();
    navigator.clipboard.writeText(text.value)
  };

  const handleOnChange = (event) => {
    console.log("Handle on change");
    setText(event.target.value);
  };
  
  return (
    <>
        <div className="container">
            <h1>{props.heading} </h1>
            <h2>{props.subHead}</h2>
            <textarea
                value={text}
                className="form-control"
                id="myBox"
                onChange={handleOnChange}
                rows="8"
            >
            </textarea>
            
             <button className="btn btn-primary mx-2 my-3" onClick={handleUpClick}>
                Convert to Uppercase
            </button>

            <button className="btn btn-primary mx-2 my-3" onClick={handleLowClick}>
                Convert to Lowercase
            </button>

            <button className="btn btn-secondary mx-2 my-3" onClick={handleCopy}>
                Copy Text
            </button>

            <button className="btn btn-danger mx-2 my-3" onClick={handleClear}>
                Clear
            </button>
        </div>

        <div className="container my-5">
            <h1>Your text summary</h1>
            <p>No. of words are {text.split(" ").length}, having {text.length} characters</p>
            <p>{0.008*text.split(" ").length} minutes to read</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
    </>
  );
}


