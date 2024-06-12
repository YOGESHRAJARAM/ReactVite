import React, { useState } from 'react'

import { useEffect } from 'react'
import { instance } from '../axios'
const ListOfProducts = () => {
    const[Products,SetProducts]= useState([])
  
    useEffect(() => {
       instance.get('products').then((responce)=>SetProducts(responce.data.products)).catch((e)=>(console.error(e)))
    }, [])
  
  return (
    <>
      <div>ListOfProducts</div>
    <ul style={{textAlign:'left'}}>
        {Products.map((Product)=><li key={Product.id}>{Product.title} Rs:{Product.price}</li>)}

    </ul>
    </>
  )
   
  
}

export default ListOfProducts