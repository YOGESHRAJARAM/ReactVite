import { useState } from "react"
export const CartDetail = () => {
  const [cartcount,setcartcount]=useState(0)
  function handlecount(){
    setcartcount(cartcount+1)
  }
  return (
    <>
      <h1>number of paragraph : {cartcount}</h1>
      <button onClick={handlecount}>add to cart {cartcount}</button>
    </>
  )
}
