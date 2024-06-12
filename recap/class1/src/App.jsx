import './App.css'
import { ChildComponent } from './compoments/ChildComponent'
import { Students } from './compoments/Students'
import { ArrySamples } from './compoments/ArrySamples'

// import { useState } from 'react'
// import { LearnComponent } from './compoments/LearnComponent'
// import { Headers } from './compoments/Headers'

function App() {

  const iterms=[{id:1,name:"iterm1"},{id:2,name:"iterm2"},{id:3,name:"iterm3"}]
  // const [count, setCount] = useState(0)
  // let bannertext = "failed"
  // let slogan = "sucess"
  // const login = true;
  // let greeting = login ? "welcome to this course" : "please login"
  // const iterms =["iterm1","iterm2","iterm3"];

  return (
    <>
      {/* <Headers/>
       <h1>{count}</h1>
     <LearnComponent/>
     <button onClick={()=>setCount(prCount => prCount+1)}>click to increase</button>
     <button onClick={()=>setCount(recount => recount-1)}>click to minus</button> */}
     {/* <h1 className={bannertext}> Yogesh R</h1>
     <p className={slogan}> learn more be smart</p>
     <p>25+25={25+25}</p>
     <p>{greeting}</p>
    <div>
      <ul>
        {iterms.map((iterm,index) => (<li key={index}>{iterm}</li>))}
      </ul>
      
    </div> */}
 <Students name="Yogesh" age={25} isMarried={true} />
 <Students name="Ramesh" age={21} isMarried={true} />
 <Students name="Gokul" age={23} isMarried={true} />
 <Students/>
 <ChildComponent>
      <p>this is para1</p>
      <p>this is para2</p>
      <p>this is para3</p>
 </ChildComponent>
 <ArrySamples iterms={iterms}/>
    </>
  )
}

export default App
