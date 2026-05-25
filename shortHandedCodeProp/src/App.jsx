import Greetings from "./components/Greetings"
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Greetings name="User" />
      <button onClick={() => setCount(count + 1)}>Increment +</button>
      <button onClick={() => setCount(count - 1)}>Decrement -</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <p>Count: {count}</p>
    </div>
  )
}

export default App
