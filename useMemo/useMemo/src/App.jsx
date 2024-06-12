import react, { useMemo } from 'react'
import { useState } from 'react'
import'./App.css'

function App() {
   const [number,setNumber]=useState(0);
   const [dark,setDark]=useState(false);
   const doblenumber =useMemo(()=>{return  slowFunction(number); },[number])
   const theamstyle ={
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black"
   };

  

  return (
    <div>
       <input type='number' value={number} onChange={(e)=>setNumber(e.target.value)}/>
    <button onClick={()=> setDark((curr)=> !curr)}>Toggle Theam</button>
    <div style={theamstyle}>{doblenumber}</div>

    </div>
  
  )
}

export default App;

function slowFunction(num){
  for(let i=0;i<1000000000;i++){
    
  }
return num*2;
}