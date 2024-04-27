const Button = ({ name, onButton }) => {
  return (
    <div>
      <button style={{
        width: "33vw",
        height: "3em",
        backgroundColor: "#43a9d8"
      }} onClick={onButton}> {name} </button>
    </div>
  )
}

export default Button
