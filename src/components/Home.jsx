import React, { useState } from 'react'

function Home() {
    const [count,setCount] = useState(0);
    
      function increment(){
        setCount(prev => prev + 1);
      }
    
      function decrement(){
        setCount(prev => prev - 1);
      }
  return (
    <div>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Home
