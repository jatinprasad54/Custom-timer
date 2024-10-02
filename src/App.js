import './App.css';
import {useState, useRef, useCallback,useEffect} from 'react';

function App() {
  const [timer,setTimer] = useState(5);
  let timerRef = useRef(0);
  const startTimer = useCallback(() => {
   timerRef.current = setInterval(() => {
    setTimer((state) => state-1);
   },[1000]);
  },[setTimer]);

  const stopTimer = useCallback(() => {
   clearInterval(timerRef.current);
   setTimer(5);
  },[setTimer]);
  

  useEffect(() => {
    if(timer<1){
     return stopTimer;
    }
  },[timer]);
  return (
    <div className="App">
    <h1>{timer}</h1>
    <button onClick={startTimer}>Start Timer</button>
    <button onClick={stopTimer}>Stop Timer</button>
    </div>
  );
}

export default App;
