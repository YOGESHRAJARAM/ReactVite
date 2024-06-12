import React, { useEffect,useState } from 'react'

const List = ({getItems}) => {
  const [items, setitems] = useState([])
  useEffect(()=>{
    setitems(getItems())
  },[getItems])
  return (
    <div>
      <h3>list of iterms</h3>
      <ul>
        {items.map((item,index)=>(<li key={index}>{item}</li>))}
      </ul>
    </div>
  )
}

export default List