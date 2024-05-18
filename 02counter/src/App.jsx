import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter]  = useState(0)

  const addValue = () => {
    // if(counter<20){
    //   setCounter(counter+1)
    // }

    // //the above 4 lines  increment the value only once because due to useState they are sent in batches to ui so only one increment occurs (fiber concept)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)

    //so if we want to do the above task as we are wanting to do ,do like this
    //as we know setCounter is a function it accepts a callback function, here in below we are passing parameter name prevCounter(gives the existing state) which is the last updated state or previous value of counter(meaning:we fetched the value of previous updated state and passed to the callback function), so in this context after clicking we increment the value by 4
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)

    //now they are not a bunch of packages that  are passed once, we are taking the previous state as reference so they are sent individually

  }

  const removeValue = () => {
    if(counter>0){
      setCounter(counter - 1)
    }
  }
  
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button> 

      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>

      <p>footer: {counter}</p>
    </>
  )
}

export default App