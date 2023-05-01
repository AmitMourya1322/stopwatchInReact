
import { useRef, useState } from 'react';
import {FaPlayCircle,FaPauseCircle,FaRedo} from "react-icons/fa"
import './App.css';

function App() {
  const[time,setTime] = useState({ms:0,s:0,m:0,h:0});
  const [int,setInt] = useState(null)
  const timeRef = useRef(null)


  const startTimer=()=>{
    if(int!==null) clearInterval(int)
    setInt(setInterval(displayTimer,10))
  }  //displayTimer will define later

  const pauseTimer =()=> clearInterval(int)
  const resetTimer = ()=>{
    clearInterval(int)
    setTime({ms:0,s:0,m:0,h:0})
  }

  const displayTimer=()=>{
    setTime((prevTime)=>{
      let{ms,s,m,h}= prevTime;
      ms +=10;
      if(ms===1000){
        ms=0;
        s +=1

        if(s===1000){
          s=0;
          m +=1
          if(m===1000){
            m=0;
            h +=1
          }

        }
      }
      return {ms,s,m,h}
    })
  }

  const {ms,s,m,h} =time;
  const hour = h<10 ?"0"+h:h;
  const minutes = m<10 ? "0" + m:m
  const seconds = s<10 ? "0" +s :s;
  const milliseconds = ms<10?"00" +ms:ms<100? "0" +ms:ms

  return (
    <div className="App">
      <h1>Mechanical Coder</h1>
      <div className="box">
      <div className="timeDisplay" ref={timeRef}>
          {hour}:{minutes}:{seconds}:{milliseconds}
      </div>
      <div className="buttons">
        <button id='start' onClick={startTimer}>
          <FaPlayCircle className="icons"/>
          <span>Start</span>
        </button>
        <button id='start' onClick={pauseTimer}>
          <FaPauseCircle className="icons"/>
          <span>Pause</span>
        </button>
        <button id='start' onClick={resetTimer}>
          <FaRedo className="icons"/>
          <span>Reset</span>
        </button>
      </div>
      </div>
    </div>
  );
}

export default App;
