import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
// import { Cards } from './compoments/Cards.jsx'
import { Regfrm } from './compoments/Regfrm.jsx'
import { RecapRegfrm } from './compoments/RecapRegfrm.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Cards/> */}
    {/* <Regfrm/> */}
    <RecapRegfrm/>


  </React.StrictMode>,
)
