import React, { useState } from "react";

export default function Textarea(props) {
  const [text, setText] = useState("");
  const onChangeHandle = (event) => {
    setText(event.target.value);
  };
  const upperClickHandle = () => {
    let newTxt = text.toUpperCase();
    setText(newTxt);
  };
  const lowerClickHandle = () => {
    let newTxt = text.toLowerCase();
    setText(newTxt);
  };
  const copyClickHandle = () => {
    let copyTxt = document.getElementById("txtBox");
    copyTxt.select();
    navigator.clipboard.writeText(copyTxt.value);
    alert("Copied text: " + copyTxt.value)
  };
  const removeSpaceClickHandle = () => {
    let result = text.replace(/" "\*|\s+/gm,' ');
    setText(result);
  };
  const clearClickHandle = () => {
    setText("");
  };
  const keyDownHandle =() => {
    // document.getElementById('txtBox').style.backgroundColor = "gray";
    document.getElementById('txtBox').style.color = "blue";
  }
  const keyUpHandle =() => {
    // document.getElementById('txtBox').style.backgroundColor = "white";
    document.getElementById('txtBox').style.color = "gray";
  }
  return (
    <div className="container my-3">
      <div className="mb-3">
        <h1 className= {`text-${props.mode==="light"? "black":"white"}`}>Enter your text to analize</h1>
        <textarea
          className={`form-control bg-${props.mode==="light"? "white":"black"}`}
          id="txtBox"
          rows="8"
          value={text}
          onChange={onChangeHandle}
          onKeyDown={keyDownHandle}
          onKeyUp={keyUpHandle}
        ></textarea>
      </div>
      <div>
        <button
          type="button"
          onClick={upperClickHandle}
          className="btn btn-primary mx-1 my-1"
        >
          Uppercase
        </button>
        <button
          type="button"
          onClick={lowerClickHandle}
          className="btn btn-primary mx-1 my-1"
        >
          Lowercase
        </button>
        <button
          type="button"
          onClick={clearClickHandle}
          className="btn btn-primary mx-1 my-1"
        >
          Cleartext
        </button>
        <button
          type="button"
          onClick={copyClickHandle}
          className="btn btn-primary mx-1 my-1"
        >
          Copy Text
        </button>
        <button
          type="button"
          onClick={removeSpaceClickHandle}
          className="btn btn-primary mx-1 my-1"
          // style={{boxShadow: "0 0 10px #fff, 0 0 20px #fff,0 0 30px green, 0 0 40px #e60073, 0 0 50px yellow"}}
        >
          Remove extra spaces
        </button>
      </div>
      <div className={`text-${props.mode==="light"? "black":"white"}`}>
        <h2 className={`text-${props.mode==="light"? "black":"white"}`}>analysis</h2>
        Characters: {text.length} , Words: {text.split(" ").filter((element)=>{return element.length !==0}).length}
      </div>
      <div className={`text-${props.mode==="light"? "black":"white"}`}>
        <h2>Preview</h2>
        <p className={`text-${props.mode==="light"? "black":"white"}`} >{text}</p>
      </div>
    </div>
  );
}
