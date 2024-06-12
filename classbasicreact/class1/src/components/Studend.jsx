import React from 'react'
import PropTypes from 'prop-types'

export const Studend = (props) => {
  return (
    <div className='studendTable'>
       <table>
        <tbody>
            <tr>
                <th>Name</th>
                <td>{props.name}</td>
            </tr>
            <tr>
                <th>Age</th>
                <td>{props.age}</td>
            </tr>
            <tr>
                <th>isMaried</th>
                <td>{props.ismaried?'Yes':'No'}</td>
            </tr>
        </tbody>
       </table>
    </div>
  )
}

Studend.proptypes={
    name:PropTypes.string,
    age:PropTypes.number,
    ismaried:PropTypes.bool,
};
Studend.defaultProps={
    name:'No name',
    age:0,
    ismaried:false
}
