import { useState } from 'react'
import Button from './Button.jsx'

const App = () => {

  let [count, setCount] = useState(0)

  return (
    <div>


      <h1 style={{
        fontSize: "5em",
        position: "absolute",
        left: "50%",
        top: "30%"
      }}> {count} </h1>
      <div className="buttons" style={{
        display: "flex",
        flexDirection: "row",
        gap: "5px",
      }}>


        <Button name="Increment" onButton={() => setCount(count += 1)} />
        <Button name="Reset" onButton={() => setCount(0)} />
        <Button name="Decrement" onButton={() => setCount(count -= 1)} />

      </div>

    </div>
  )
}

export default App
