import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Userdetails } from './formsample/Userdetails.jsx'
import { NewForm } from './formsample/NewForm.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Userdetails /> */}
   <NewForm />
  
  </React.StrictMode>,
)
