
import './App.css';
import react from 'react'
import {useState} from 'react'

function App() {

  const [count, setCount] = useState(0)

  const add = () => {
    setCount(count + 1)
  }


  const subtract = () => {
    setCount(count - 1)
  }


  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
    </div>
  );
}

export default App;
