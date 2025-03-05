
import { useState } from 'react';
import './App.css';
 import About from './components/About';
import Navbar from './components/Navbar';
import TestForm from './components/TestForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
 const[mode,setMode] =useState("dark")//whether dark mode is enable or not
 const[alert, setAlert]=useState(null);

 const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  
setTimeout(()=>{
  setAlert(null)
},1500)

  
 }
 const toggleMode=()=>{
  if(mode==="light"){
setMode("dark")
document.body.style.backgroundColor="#0b1d53"
showAlert("dark mode has been enabled","success")
//  document.title="TextUtils DarkMode"


 }else{
  setMode("light")
  document.body.style.backgroundColor="white"
  showAlert("light mode has been enabled","success")
  //  document.title="TextUtils LightMode"
 }}
  return (
     <>
  {/* <Navbar/>   */}
<Router>
<Navbar title="TextUtils" aboutText="AboutTextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className='container my-3'>

<Routes> 
          <Route path="/about" element={<About mode={mode}/>}>
            {/* <About/> */}
          </Route>
          
          <Route path="/" element={<TestForm showAlert={showAlert} heading="Try TextUtils-Word Counter, Character Counter, Remove extra spaces" mode={mode}/>}>
          {/* {<TestForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/> } */}
          </Route>
        </Routes>
        
</div>
</Router> 
    </>
  );
}

export default App;
