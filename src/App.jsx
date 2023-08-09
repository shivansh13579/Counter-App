
import { useState } from 'react';
import './App.css'

function App() {
  

  const [count,setCount] = useState(0);

  function increasingResult(){
    setCount(count + 1);
  }

  function decreasingResult(){
    setCount(count - 1);
  }

  return (
    <div className='counter-wrapper'>
    <h1>Counter Web App</h1>
    <p>Current : {count}</p>
    <button  onClick={increasingResult}>Increment</button>
    <button onClick={decreasingResult}>Decrement</button>
    </div>
    
  )
}

export default App
