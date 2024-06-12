import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import axios from 'axios'

//interseptor

axios.interceptors.response.use(
  (response)=>{console.log(response);
    return{...response,data:{resp: response.data,title:'api interceptor'}}
  },(err)=>console.log(err)
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>,
)
