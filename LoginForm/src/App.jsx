import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LoginF from './assets/components/loginDev/login'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LoginF/>
    </>
  )
}
 
export default App
