import { useState } from 'react'
import '../index.css'


const colorPicker = () => {
  const [color, setColor] = useState('#ffffff')

  const handleColorChange = () => {
    setColor(event.target.value)
  }
  return (
    <div>
      <div className="color-display" style={{
        backgroundColor: color,
      }}>
        <h2> Selected Color </h2>
        <span style={{
          fontSize: "1.5em",
        }}> {color} </span>
      </div>

      <div className="color-picker">
        <label> Select a color </label>
        <input type='color' value={color} onChange={handleColorChange} />
      </div>
    </div>
  )
}

export default colorPicker
