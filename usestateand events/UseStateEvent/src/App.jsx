import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {CartDetail} from './formsample/CartDetail.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (

      <CartDetail  />
  
  )
}

export default App
