import React, { useEffect, useState } from 'react'
import "./Cart.css"
import { useContext } from 'react';
import { cartcontext } from '../App';


const Cartpage = () => {
  const {Cart,Setcart}=useContext(cartcontext);
  const [total, settotal]=useState(0)
  useEffect(()=>{ settotal(Cart.reduce((acc,curr) => acc+parseInt(curr.amt),0))},[Cart]);


  const removebtn = (item) =>{
  
    Setcart(Cart.filter((c)=> c.id !== item.id))
  }
  return (
   
   <>
      <h1>Cart Product</h1>
    {Cart.map((item)=>( <div className="cart-container">
 
     <div className="cart-product">
         <div className="img">
           <img src={item.pic}/>
         </div>
         <div className="cart-product-details">
           <h3>Product :{item.name}</h3>
           <p>Price Rs: {item.amt}</p>
           <button onClick={()=>removebtn(item)}>Remove</button>
         </div>
        
     </div>
    
  </div>))}
  <h3>Total Amount Rs: {total}</h3>
   </>
  )
}

export default Cartpage