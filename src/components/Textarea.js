import React from 'react'
import { useState } from 'react';

function Textarea(props) {

  const handleUpperCaseClick= () => {
    console.log("Uppercase Button Clicked");
    let newText=text.toUpperCase();
    setText(newText);
  }

  const handleLowerCaseClick=()=>{
    console.log("LowerCase Button Clicked");
    let newText=text.toLowerCase();
    setText(newText);
  }

  const handleChange = (event) =>{
     console.log("This is handleChange");
     setText(event.target.value);
  }


  const [text,setText] = useState("");  
  

  return (
    <>
    <div className='container'>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea className="form-control" onChange={handleChange} placeholder='Enter your text here' value={text} id="floatingTextarea2" rows="15"></textarea>  
        <button type="button" onClick={handleUpperCaseClick} className="btn btn-primary">UpperCase</button> 
        <button type="button" onClick={handleLowerCaseClick} className="btn btn-primary mx-3">LowerCase</button> 
      </div>
    </div>  
    <div className='container'>
        <h2>Your Text Information</h2>
        <p> {text.split(" ").length} Words  {text.length} Characters</p>
        <p>Expected Reading Time: {0.008*text.split(" ").length}</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}

export default Textarea;
