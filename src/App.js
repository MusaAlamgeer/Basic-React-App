import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Message from './Message';


function App() {

  let [count, setCount] = useState(1) //1 is the default value
  //to save useState value locally or etc 
  let [isMorning, setMorning] = useState(false)

  return (
    <div className={`box ${isMorning ? 'dayLight' : ''}`}>
      <h1>Day Time = {isMorning ? 'Morning': 'Night'}</h1>
      <Message counter={count}/>
      <br />
      {/*alert("Button is Pressed")*/}
      <button onClick={()=> setCount(++count)}>
        Update Counter
      </button>

      <button onClick={() => setMorning(!isMorning)}>
        Update Day
      </button>
    </div>
  );
}

export default App;
