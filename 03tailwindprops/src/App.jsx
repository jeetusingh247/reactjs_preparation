import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {

  let myObj = {
    username: "Jeetu Singh",
    age: 20
  }

  let newArr = [1, 2, 3, 4]

  return (
    <>
      <div>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      </div>
      <Card title="Welcome To CoderWorld" subtitle="Advanced Cloud Upload Features" subtitle2="Highly Certified SSL" subtitle3="Queues"/>
      <Card  title="Welcome to SpectrumAi" subtitle1="Hello1" subtitle2="Hello2" subtitle3="Hello3"  /> 
    </>
  )
}

export default App
