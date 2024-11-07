import {jsx as _jsx} from "react/jsx-runtime"
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import React from 'react'

function MyApp() {
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)



const anotherUser = "Lorem5"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank' },
  'click me to visit google',
  anotherElement
)

createRoot(document.getElementById('root')).render(

  // <App/>
  reactElement

)

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <MyApp/>
//   </StrictMode>,
// )
