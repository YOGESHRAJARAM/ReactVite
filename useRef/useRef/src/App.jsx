import { useRef } from "react"
import './App.css'
function App() {
  const inputref = useRef();
  const textIref = useRef();
  const display = () =>{
   textIref.current.style.color='red';
   inputref.current.focus()
    alert(`you typed ${inputref.current.value}`)
  }

  return (
    <>
   <h>input</h>
   <input ref={inputref} type="text"/>
   <button ref={textIref} onClick={display}>show</button>
    </>
  )
}

export default App
