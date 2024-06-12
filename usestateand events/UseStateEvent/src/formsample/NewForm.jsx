import React, { useState } from 'react'

export const NewForm = () => {
    const [user,setuser]=useState({name:"name",age:"age"})

    const HandleChangename = (e) =>{
        setuser({...user,name:e.target.value})
    }
    const HandleChangeage = (e) =>{
        setuser({...user,age:e.target.value})
    }
   

  return (
   <>
   <div>
    <h4>{user.name}</h4>
    <h4>{user.age}</h4>
   </div>
   <form>
      <input type="text"  placeholder='Enter User Name' onChange={HandleChangename}/>
      <input type="number"  placeholder='Enter User Age' onChange={HandleChangeage}/>
   </form>
   </>
  )
}
