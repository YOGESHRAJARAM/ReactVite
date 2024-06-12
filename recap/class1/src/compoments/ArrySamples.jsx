import React from "react";
import PropTypes from "prop-types"
export const ArrySamples = (props) => {
    const {iterms} = props;
  return (
    <div>
        <h2>Iterm list</h2>
        <ul>
            {iterms.map((iterm)=><li key={iterm.id}> {iterm.name}</li>)}
        </ul>
    </div>
  )
}
ArrySamples.propTypes={
    iterms:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            name:PropTypes.string.isRequired,
        })
    ).isRequired,
}