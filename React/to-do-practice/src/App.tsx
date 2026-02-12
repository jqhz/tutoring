import * as React from 'react'
import './index.css'

const { useState } = React;

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={() => {
        setCounter(counter + 1);
      }}>
        balls
      </button>
    </div>

  )
}
  

export default App;
