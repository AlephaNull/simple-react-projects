import React from 'react'
import PropTypes from 'prop-types'


const Student = (props) => {
  return (
    <div style={{
      border: "2px solid black",
      textAlign: "center",
      margin: "1em"
    }}>
      <h1> Hello, {props.name} </h1>
      <h1> Your age is {props.age} </h1>
      <h1> Are they a student:  {props.isStudent ? "Yes" : "No"} </h1>
    </div>
  )
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
}

Student.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false
}
export default Student
