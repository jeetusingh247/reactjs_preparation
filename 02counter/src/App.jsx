import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)
  
  // let counter = 5

  const addValue = () => {
    // console.log("clicked", Math.random())
    console.log("clicked", counter)
    counter = counter + 1
    setCounter(counter)
  }

  const removeValue = () => {
    
    // console.log("clicked", Math.random());
    console.log("clicked", counter);
    if(counter > 0){
      counter = counter - 2
    } 
    setCounter(counter)   
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter Value : {counter}</h2>
      <button
      onClick={addValue}
      >Add Value {counter}</button>
      <br />
      <button
      onClick={removeValue}
      >Remove Value {counter}</button>
    </>
  )
}

export default App
