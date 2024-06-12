
import './App.css'
import {OneofColor} from './components/OneofColor.jsx'
import { Studend } from './components/Studend.jsx'
import { LearnChildren } from './components/LearnChildren.jsx'
import { LearnArry } from './components/LearnArry.jsx'
function App() {
  const iterms =[{id:0,name:'Tamil'},
  {id:1,name:'English'},
  {id:2,name:'Math'}]

  const Handlebutton = ()=>(
    alert("hi You click the button")
  )

  return (
    <>
    <button onClick={()=>(Handlebutton())}>click the button</button>
      <Studend name='Yogesh' age={25} ismaried={true}/>
      <Studend name='Mahesh' age={23} ismaried={false}/>
      <Studend name='Gowthem' age={33} ismaried={true}/>
      <Studend />
      <LearnChildren>
        <p>hi this is props children</p>
        <p>hi this is props children</p>
        <p>hi this is props children</p>
      </LearnChildren>
      <LearnArry itermvalue={iterms} />
      <OneofColor Color="red" clickbutton={Handlebutton}></OneofColor>




    </>
  )
}

export default App
