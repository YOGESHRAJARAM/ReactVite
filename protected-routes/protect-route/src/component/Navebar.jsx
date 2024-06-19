import React from 'react'
import "./Navebar.css"
import {NavLink} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { SelectAlluser, removeUser } from '../Slices/userSlice.js'
import { setUser } from '../Slices/userSlice.js'

const Navebar = () => {
    const dispatch = useDispatch()
    const user = useSelector((state)=>state.userInfo.user)
    // const user = useSelector(SelectAlluser)

  return (
    <nav>
        <h1>React Product router</h1>
        <ul>{!user && (
             <NavLink onClick={()=>{dispatch(setUser("haris"))}} to='/login'>
             <li>Login</li>
             </NavLink>
        )}
       
            <>
              <NavLink to='/setting'>
            <li>Settings</li>
            </NavLink>
            <li onClick={()=>dispatch(removeUser())}>logout</li>
            </>
     
        </ul>
    </nav>
  )
}

export default Navebar