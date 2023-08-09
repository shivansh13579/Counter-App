
import { useState } from 'react';
import './App.css'

function App() {
  let Counter = 0;

  const [increment,setIncrement] = useState(0);

  return (
    <div>
    <h1>Counter Web App</h1>
    <p>Current : {Counter}</p>
    <button value={increment} onClick={(i)=>setIncrement(i+1)}>Increment</button>
    <button>Decrement</button>
    </div>
  )
}

export default App
