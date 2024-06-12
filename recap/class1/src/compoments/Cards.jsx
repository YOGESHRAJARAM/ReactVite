import React from 'react'
function Users(){
    return(
        <div className="card-container">
            <span className='online pro'>ONLINE</span>
            <img className='profile' src='1.jpg'></img>
            <h3>fullName</h3>
            <h3>salem</h3>
            <p>front-end developer</p>
            <div>
                <button>message</button>
                <button className='follo'>following</button>
            </div>
             <div className='skillarea'>
                
                <h6>Skills</h6>
                <ul>
                <li>UI/ UX</li>
                <li>Front enddevelopment</li>
                <li>Html</li>
                <li>Javascript</li>
                <li>react</li>
                <li>node</li>
                </ul>
             </div>
        </div>
    )
}

export const Cards = () => {
  return (
    <>
    
    <Users/>
    <Users/>
    </>

  )
}
