import React,{useState} from 'react'

export default function TestForm(props) {

    const handleUpClick=()=>{
console.log("uppercase was clicked" + text)
 let newText = text.toUpperCase()
setText(newText)
props.showAlert("converted to upper case","success")
    }

    const handleLowerClick=()=>{
      console.log("Lowercase was clicked" + text)
       let newText = text.toLowerCase()
      setText(newText)
      props.showAlert("converted to lower case","success")
          }

    const handleOnChange=(event)=>{
        console.log("uppercase was changed")
        setText(event.target.value)
            }

            const handleClearClick=()=>{
              // console.log("Lowercase was clicked" + text)
               let newText = " "
              setText(newText)
              props.showAlert("clear text","success")
                  }  
    const [text, setText] = useState("Enter text here");
    // text="bvbn" wrong way to change the value(state)
    // setText("new text") correct way
  return (
    <>
    <div className='container' style={{color:props.mode==="dark"?"white":"#0b1d53"}}>
    <h1>{props.heading}</h1>  
<div className="mb-3" >
  <textarea className="form-control" style={{backgroundColor:props.mode==="dark"?"grey":"light",color:props.mode==="dark"?"white":"#0b1d53"}}  value={text}  onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>convert to uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLowerClick}>convert to LowerCase</button>
<button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
      
    </div>
    <div className='container my-3' style={{color:props.mode==="dark"?"white":"#0b1d53"}}>
      <h1>your text summary</h1>
      <p> {text.split(" ").length} words and{text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minutes to read</p>
      <h2>preview</h2>
      <p>{text.length>0?text:"enter some thing in the textBox above to preview it here"}</p>
      
    </div>
    </>
  )
}
