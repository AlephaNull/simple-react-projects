import AddItem from './components/AddItem.jsx'

const App = () => {
  return (
    <div>

      <div className="circle1" style={{
        width: "30em",
        height: "30em",
        position: "absolute",
        top: "9em",
        left: "29vw",
        borderRadius: "100%",
        border: "1px solid #864ee0",
        background: "#864ee0"

      }}>
      </div>
      <div className="circle2" style={{
        width: "30em",
        height: "30em",
        position: "absolute",
        top: "15em",
        left: "50vw",
        borderRadius: "100%",
        border: "1px solid #2c1b72",
        background: "#2c1b72"
      }}>
      </div>
      <h1> Todo List </h1>
      <AddItem />

    </div>
  )
}

export default App
