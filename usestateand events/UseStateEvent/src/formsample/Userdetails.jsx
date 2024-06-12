import {useState} from 'react'

export const Userdetails = () => {
    const [user,setuser]=useState({name:'sam',age:21})
    const handlename = () => {
        //   username == 'ram'? setusername("tamil") : setusername("ram")
          setuser({ ...user, name:'Yogesh'})
          user.name == 'sam'?setuser({...user,name:'Yogesh'}):setuser({...user,name:'sam'})
    }
    const handleage = () => {
        // userage == 21 ? setuserage(35) : setuserage(21)
        setuser({ ...user, age:25})
        user.age == 21 ? setuser({...user,age:25}):setuser({...user,age:21})
    }
  return (
    <>
    <h1>UserDetails</h1>
    <h3>{user.name}</h3>
    <h3>{user.age}</h3>
    <button onClick={handlename}>updatename</button>        
    <button onClick={handleage}>updateAge</button>        
    </>
   

  )
}
