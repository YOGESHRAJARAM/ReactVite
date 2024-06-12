import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

const Header = ({Cart}) => {

  return (
    <div className='navbar'>
       <div className="logo">Food Cart</div> 
      <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/Cart'}>ViewCart <span style={{fontSize:"12px", color:"greenyellow"}}> {Cart.length} </span></Link></li>
      
      </ul>
    </div>
  )
}

export default Header