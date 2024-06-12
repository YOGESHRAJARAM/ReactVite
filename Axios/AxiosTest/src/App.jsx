import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListOfProducts from './Components/ListOfProducts'
import AddProduct from './Components/AddProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h2>React Axios</h2>
     <ListOfProducts/>
     <AddProduct/>
    </>
  )
}

export default App
