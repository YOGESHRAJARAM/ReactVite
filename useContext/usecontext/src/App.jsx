
import { createContext } from 'react'
import './App.css'
import Grand from './component/Grand'


function App() {
  const data = 'hello makela this is tas'


  return (
    <>
    <GrandContext.Provider value={data}>
        <Grand/>
    </GrandContext.Provider>

     
    </>
  )
}
export const GrandContext = createContext();
export default App
