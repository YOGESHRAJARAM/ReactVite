import PropTypes from "prop-types";
export const Students = (props) => {
  return (
    <div className='student'>
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
                    <th>isMarried</th>
                    <td>{props.isMarried ? "Yes": "No"}</td>
                </tr>
            </tbody>
        </table>
    </div>
  );
};
Students.propTypes={
    name: PropTypes.string,
    age:PropTypes.number,
    isMarried:PropTypes.bool,
}
Students.defaultProps={
    name:"no name",
    age:0,
    isMarried:false
}