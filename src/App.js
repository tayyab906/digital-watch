
import React, { useState } from 'react';
import './App.css';

function App() {

  let name = "Digital Watch";
  let time  = new Date().toLocaleTimeString();

  const [cTime, setCtime] = useState(time)

  const UpdateTime = () => {
    time  = new Date().toLocaleTimeString();
    setCtime(time)

  }


  setInterval(UpdateTime, 1000);

  return (
    <div className="App">
      <h1>{name}</h1>
      <h1>{cTime} </h1>
    </div>
  );
}

export default App;
