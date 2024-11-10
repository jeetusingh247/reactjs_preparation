import { useState } from 'react'

function App() {
  const [color, setColor] = useState('black')

  return (
    <>
    <div className="fixed top-0 left-0 w-full h-16 bg-gray-800 text-white flex items-center justify-center">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg p-3 bg-gray-800 text-white bg-white px-3 py-2 rounded-3xl">
        <button 
        onClick={() => setColor('red')}
        className="outline-none px-4 py-1 rounded-full shadow-md"
        style={{backgroundColor: 'red'}}
        >Red</button>
        <button
        onClick={() => setColor('green')} 
        className="outline-none px-4 py-1 rounded-full shadow-md"
        style={{backgroundColor: 'green'}}
        >Green</button>
        <button 
        onClick={() => setColor('blue')}
        className="outline-none px-4 py-1 rounded-full shadow-md"
        style={{backgroundColor: 'blue'}}
        >Blue</button>
        <button 
        onClick={() => setColor('orange')}
        className="outline-none px-4 py-1 rounded-full shadow-md"
        style={{backgroundColor: 'orange'}}
        >Orange</button>
        <button 
        onClick={() => setColor('yellow')}
        className="outline-none px-4 py-1 rounded-full shadow-md"
        style={{backgroundColor: 'yellow'}}
        >Yellow</button>
        <button 
        onClick={() => setColor('magenta')}
        className="outline-none px-4 py-1 rounded-full shadow-md"
        style={{backgroundColor: 'magenta'}}
        >Magenta</button>
        <button 
        onClick={() => setColor('pink')}
        className="outline-none px-4 py-1 rounded-full shadow-md"
        style={{backgroundColor: 'pink'}}
        >Pink</button>
        <button 
        onClick={() => setColor('purple')}
        className="outline-none px-4 py-1 rounded-full shadow-md"
        style={{backgroundColor: 'purple'}}
        >Purple</button>

      </div>
    </div>
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}} // inline css
    ></div>
    </>
  )
}

export default App
