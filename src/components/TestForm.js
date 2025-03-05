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
    const [text, setText] = useState("");
    // text="bvbn" wrong way to change the value(state)
    // setText("new text") correct way
  return (
    <>
    <div className='container' style={{color:props.mode==="dark"?"white":"#0b1d53"}}>
    <h2 className='mb-4'>{props.heading}</h2>  
<div className="mb-3" >
  <textarea className="form-control" style={{backgroundColor:props.mode==="dark"?"white":"#30356a",color:props.mode==="white"?"#0b1d53":"white"}}  value={text}  onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>convert to uppercase</button>
<button  disabled={text.length===0} className="btn btn-primary mx-1my-1" onClick={handleLowerClick}>convert to LowerCase</button>
<button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
      
    </div>
    <div className='container my-3' style={{color:props.mode==="dark"?"white":"black"}}>
     {console.log({color:props.mode})}
      
      <h1>your text summary</h1>
      <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
      <h2>preview</h2>
      <p>{text.length>0?text:"Nothing to preview!"}</p>
      
    </div>
    </>
  )
}
