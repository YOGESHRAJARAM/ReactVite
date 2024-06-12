
import './App.css'
import Header from './components/Header'
import{Route,Routes,BrowserRouter} from 'react-router-dom'
import Home from './components/Home'
import Cartpage from './components/Cart'
import { useState } from 'react'
import { createContext } from 'react'

export const cartcontext = createContext()
function App() {
const [Cart,Setcart] = useState([])

  return (
    <>
    <cartcontext.Provider value={{Cart,Setcart}}>
        <BrowserRouter>
          <Header Cart={Cart} />
          <div className="container">
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/Cart' element={<Cartpage />}/>
            </Routes>
          </div>
        </BrowserRouter>
    </cartcontext.Provider>
    
    </>
  )
}

export default App
