import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import './App.css'

function App() {
  const style ={
    border: "1px solid green",
    margin:12,
    padding:8
  }

 const [dataSource,setDateSource] = useState(Array.from({length:20}))
 const [hasMore,sethasMore]=useState(true)
 const fetchmodedata=()=>{
   //make api call
   if(dataSource.length<200){
    setTimeout(()=>{
      setDateSource(dataSource.concat(Array.from({length:20})))
    },500);
   }else{
    sethasMore(false);
   }
  
 }

  return (
    <>
    <InfiniteScroll dataLength={dataSource.length} next={fetchmodedata} hasMore={hasMore} loader={<p>Loading...</p>}endMessage={<p>Over</p>}>

      {dataSource.map((item,index)=>{
        return <div style={style}>this is div #{index+1} inside scroll</div>
      })}

    </InfiniteScroll>
   
    </>
  )
}

export default App
