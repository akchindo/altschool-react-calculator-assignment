import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  const [digit, setDigit] = useState([]);
  return (
    <div className='App'>
      <section id='calculator'>
        <div className='cal-container'>
          <h1 className='contact-head'>Calculator</h1>
          <div className='cal-value'>
            <input type='text' className='caltext' placeholder={digit} />
          </div>
          <div className='grid-values'>
            <div className='val' onClick={()=>setDigit(digit + "*")} >
              <p value='*' >*</p>
            </div>
            <div className='val' onClick={()=>setDigit(digit + "/")} >
              <p value='/' >/</p>
            </div>
            <div className='val' onClick={()=>setDigit(digit + "-")} >
              <p value='-'  >-</p>
            </div>
            <div className="val" onClick={()=>setDigit(digit + "+")} >
              <p value='+'   >+</p>
            </div>
            <div className='val' onClick={()=>setDigit(digit + "%")} >
              <p value='%'>%</p>
            </div>
            <div className='val' onClick={()=>setDigit(digit + "9")} >
              <p value='9'>9</p>
            </div>
            <div className='val' onClick={()=>setDigit(digit + "6")} >
              <p value='6'>6</p>
            </div>
            <div className='val' onClick={()=>setDigit(digit + "7")} >
              <p value='7'>7</p>
            </div>
            <div className='val' onClick={()=>setDigit(digit + "8")} >
              <p value='8'>8</p>
            </div>
            <div className='val' onClick={()=>setDigit(digit + "3")} >
              <p value='3'>3</p>
            </div>
            <div className='val' onClick={()=>setDigit(digit + "4")} >
              <p value='4'>4</p>
            </div>
            <div className='val' onClick={()=>setDigit(digit + "5")} >
              <p value='5'>5</p>
            </div>
            <div className='val'  onClick={()=>setDigit(digit + "0")} >
              <p value='0'>0</p>
            </div>
            <div className='val' onClick={()=>setDigit(digit + "1")} >
              <p value='1'>1</p>
            </div>
            <div className='val' onClick={()=>setDigit(digit + "2")} >
              <p value='2'>2</p>
            </div>
            <div className='val' onClick={(prev)=>setDigit(digit + prev)}>
              <p value='='>=</p>
            </div>
            <div className='val' onClick={()=>setDigit("")} >
              <p value='C'>C</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
