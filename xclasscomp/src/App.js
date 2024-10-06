
import { useState } from 'react'

export default function App() {
    const [number, setNumber] = useState(0);

    const plusToggle = () => {
        setNumber((prev) => prev + 1);
    }

    const minusToggle = () => {
        setNumber((prev) => prev - 1);
    }
    
  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {number}</p>
      <div>
        <button onClick={plusToggle}>Increment</button>
        <button onClick={minusToggle}>Decrement</button>
      </div>
    </div>
  )
}