import React from 'react'
import PropTypes from 'prop-types'

export const OneofColor = (props) => {
    const {Color}=props
    const {clickbutton}=props
  return (
    <>
    <div style={{backgroundColor:Color}}>OneofColor</div>
    <button onClick={clickbutton}>last click</button>
    </>
  )
}

OneofColor.proptypes={
    Color:PropTypes.string,
    clickbutton:PropTypes.func,
}
