import { useState } from 'react'
import './App.css'

function App() {
  // let counter = 0;
  const [counter, setCounter] = useState(0);

  const addCounter = ()=>{
    if(counter < 20){
      setCounter(counter + 1)
    }else{
      setCounter(20)
    }
  }
  const removeCounter = ()=>{
    if(counter > 0){
      setCounter(counter - 1);
    }else{
      setCounter(0)
    }
  }

  return (
    <>
     <h2>Counter: {counter}</h2>
     <button onClick={addCounter}>Add: {counter}</button>
     <br /><br />
     <button onClick={removeCounter}>Remove: {counter}</button>
    </>
  )
}

export default App
