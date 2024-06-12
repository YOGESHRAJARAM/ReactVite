import React from 'react'
import PropTypes from 'prop-types'

export const LearnChildren = (props) => {
  return (
    <div>
        {props.children}
    </div>

  )
}

LearnChildren.prototypes={
    children:PropTypes.array,
};