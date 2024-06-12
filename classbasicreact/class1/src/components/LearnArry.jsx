import PropTypes from 'prop-types'

export const LearnArry = (props) => {
    const {itermvalue} = props;
  return (
    <div>
        <ul>
          {itermvalue.map((itereach)=>(
            <li key={itereach.id}>{itereach.name}</li>
          ))}  
        </ul>
    </div>
  )

}
LearnArry.proptypes={
    itermvalue:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            name:PropTypes.string.isRequired,

        })
    ).isRequired
  };
