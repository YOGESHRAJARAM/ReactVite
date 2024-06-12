import React from 'react'
import './Product.css'
import { useContext } from 'react';
import { cartcontext } from '../App';

export const Product = ({product}) => {
    const Name = product.name.length > 21 ? product.name.substring(0,20)+"..":product.name;
    const {Cart,Setcart}= useContext(cartcontext)

    const addcart=()=>{
        Setcart([...Cart , product]);
        
    }
    const removebtn = ()=>{
        Setcart(Cart.filter((c)=> c.id !== product.id))
    }
  return (
    <div className='product'>
        <div className="img">
            <img  src={product.pic} alt={product.name}/>
        </div>
        <div className="details">
            <h3>{Name}</h3>
            <p>Price Rs:{product.amt}</p>
           {Cart.includes(product)?(<button onClick={removebtn} className='btnremove'>Remove from cart</button>):(<button onClick={addcart}>add to cart</button>)}
        </div>
        
    </div>
  )
}
