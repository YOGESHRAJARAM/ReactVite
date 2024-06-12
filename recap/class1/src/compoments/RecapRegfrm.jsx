import React from 'react'
import { useState } from 'react'

export const RecapRegfrm = () => {

   const [user,setuser]=useState({
    name:"",
    age:0,
    maritalstatus:true
    
   })  
   
   function Changehandler(e){
      const name = e.target.name;
      const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;   
      setuser({...user,[name]:value});
   }

  return (
   <>
   <h3>Name:{user.name}</h3>
   
   <h3>Age:{user.age}</h3>

   <h3> Maritel Status:{user.maritalstatus ? "married":"Single"}</h3>
   <label htmlFor='name'>
   Full name
     <input type='text' name='name' value={user.value} onChange={Changehandler}/>
    
   </label>
   <label htmlFor='age'>
   Age
     <input type='number' name='age' value={user.value} onChange={Changehandler}/>
     ------
   </label>
   <label htmlFor='maritalstatus'>
      maritel status
     <input type='checkbox' name='maritalstatus' id='maritalstatus' checked={user.maritalstatus} onChange={Changehandler}/>
    
   </label>

   </>
  )
}
