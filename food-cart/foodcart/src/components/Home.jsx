import React, { useState } from 'react'
import data from '../assets/Products.json'
import { Product } from './Product';
import "./Home.css"

const Home = () => {
    const [products] = useState(data);
  

  return (
    <>
    <div className="product-container">
        {products.children.map((item)=>{
          return (<Product key={item.id} product={item}/>) 
        })}
    </div>
    </>  
  )
}

export default Home