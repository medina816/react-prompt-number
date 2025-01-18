import { useState } from 'react'
import './App.css'
import MyComponent from './InFo'

function App() {

  const [count, setCount] = useState(0)

  return (
    <>
 
     <MyComponent></MyComponent>
    </>
  )
}

export default App
