import { useState } from 'react'
import './App.css'
import Onepg from './Components/Onepg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Onepg/>
    </>
  )
}

export default App
