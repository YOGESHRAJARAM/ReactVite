import React from 'react'

export const CardContainer = (props) => {
  return (
    <div className='card-container'>
        <span className={props.status?"pro online":"pro offline"}>{props.status?"Online":"Offline"}</span>
        <img className='profile' src={props.profile_img} alt='this image'></img>
        <h3>{props.fullname}</h3>
        <h3>{props.location}</h3>
        <p>{props.roll}</p>
        <div>
            <button>message</button>
            <button className='follo'>following</button>
        </div>
        <div className='skillarea'>
            <h5>Skills</h5>
            <ul>
              {props.skills.map((iterm,index)=>(<li key={index}>{iterm}</li>))}
            </ul>
        </div>
    </div>
  )
}
