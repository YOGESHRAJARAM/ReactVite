import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [advice,setadvice]=useState("click")
  const [count,setcount]=useState(0) 

  async function handleclick(){
    const url = await fetch("https://api.adviceslip.com/advice")
    const data= await url.json()
    setadvice(data.slip.advice)
    setcount((pre)=> pre+1)
  
  }

  useEffect(function(){
    handleclick();
  },[])

  return (
    <>
     <h1>{advice}</h1>
     <button onClick={handleclick}>Generate Advice</button>
     <Para count={count}/>
    </>
  )
}
function Para(prop){
  return(
    <p>total number of advice :{prop.count}</p>
  )
   
}

export default App


