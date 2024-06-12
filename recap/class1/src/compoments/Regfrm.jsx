import React from 'react'
import { useState } from 'react';
import '../Regfrm.css';

export const Regfrm = () => {


    const[user, setUser] = useState({
      name: "Ram  Kumar",
      age:25,
      gender:"Male",
      isMarried:true,
      country:"India"
    });

    function ChangeHandler(e){
       const name = e.target.name;
       const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
       setUser({...user,[name]:value})
    }
  return (
    <>
     <table>
        <tbody>
            <tr>
                <td>Name</td>
                <td>{user.name}</td>
            </tr>
            <tr>
                <td>age</td>
                <td>{user.age}</td>
            </tr>
            <tr>
                <td>gender</td>
                <td>{user.gender}</td>
            </tr>
            <tr>
                <td>Marital status</td>
                <td>{user.isMarried ? "Married":"Not Married"}</td>
            </tr>
            <tr>
                <td>Country</td>
                <td>{user.country}</td>
            </tr>
        </tbody>
     </table>
     <form>
        <input type="text" name='name' placeholder='full name' value={user.name} onChange={ChangeHandler} />
        <input type="number" name='age' placeholder='age' value={user.age} onChange={ChangeHandler} />
        <div className="gender">
            <label htmlFor='male'>
                <input type="radio" name="gender" id="male" checked={user.gender == "Male"} value='Male' onChange={ChangeHandler} />
                Male
            </label>
            <label htmlFor='fmale'>
                <input type="radio" name="gender" id="female" checked={user.gender == "Female"} value='Female' onChange={ChangeHandler} />
                Female
            </label>
        </div>
        <label htmlFor='isMarried'>
           <input type='checkbox' name='isMarried' id="isMarried" checked={user.isMarried} onChange={ChangeHandler} />
           Is Married
        </label>
        <select name='country' id='country' value={user.country} onChange={ChangeHandler}>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
        </select>
     </form>
    </>
  )
}
