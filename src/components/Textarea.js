import React from 'react'
import { useState } from 'react';

function Textarea(props) {

  const handleUpperCaseClick= () => {
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to Uppercase!","success")
  }

  const handleLowerCaseClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Text converted to LowerCase!","success")
  }

  const handleClearText= () =>{
    setText("");
    props.showAlert("Text cleared!","success")
  }

  const handleReverseText = ()=>{
    let newText=text.split("").reverse().join("");
    setText(newText);
    props.showAlert("Text Reversed!","success")
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    document.getSelection().removeAllRanges()
    props.showAlert("Text copied!","success")
  }

  const handleChange = (event) =>{
     setText(event.target.value);
  }

  const handleExtraSpaces = () =>{
    let newText=text.split(/[ ]+/);
    console.log(newText);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!","success")
  }


  const [text,setText] = useState("");  
  

  return (
    <>
    <div className='container my-5' style={{color:props.mode==='dark'?'white':'black'}}>
      <div className="mb-2">
        <h1>{props.heading}</h1>
        <textarea className="form-control" onChange={handleChange} placeholder='Enter your text here' style={{backgroundColor:props.mode==='dark'?'#6a5f5f':'white',color:props.mode==='dark'?'white':'black'}} value={text} id="floatingTextarea2" rows="13"></textarea>  
        <button type="button" disabled={text.length === 0} onClick={handleUpperCaseClick} className="btn btn-primary mx-3 my-3">UpperCase</button> 
        <button type="button" disabled={text.length === 0} onClick={handleLowerCaseClick} className="btn btn-primary mx-3 my-3">LowerCase</button> 
        <button type="button" disabled={text.length === 0} onClick={handleClearText} className="btn btn-primary mx-3 my-3">Clear Text</button> 
        <button type="button" disabled={text.length === 0} onClick={handleReverseText} className="btn btn-primary mx-3 my-3">Reverse Text</button> 
        <button type="button" disabled={text.length === 0} onClick={handleCopy} className="btn btn-primary mx-3 my-3">Copy Text</button> 
        <button type="button" disabled={text.length === 0} onClick={handleExtraSpaces} className="btn btn-primary mx-3 my-3">Remove Extra Spaces</button> 
      </div>
    </div>  
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Information</h2>
        <p> {text.split(" ").filter((element) => {return element.length!==0}).length} Words  {text.length} Characters</p>
        <p>Expected Reading Time: {0.008*text.split(" ").length}</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter some text in the textarea above to preview it here"}</p>
    </div>
    </>
  )
}

export default Textarea;

