import { useState } from 'react';
import './App.css';
import Clicker from './Clicker/Clicker';

function App() {
  const [count, setCount] = useState(0)

  const incrementCount = () =>{
    setCount(prev=>{
      return prev + 1
    })
  }
  return (
    <div className="App">
      <div>
        Total count: {count}
      </div>
      <Clicker increment={incrementCount} keyName="STATUS"/>
      <Clicker increment={incrementCount} />
    </div>
  );
}

export default App;
