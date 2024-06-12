import React, { useContext } from 'react'
import { GrandContext } from '../App'

const Child = () => {
    const value = useContext(GrandContext);
  return (
    <>
       <div>Child</div>
        <p>{value}</p>
    </>
 
  )
}

export default Child