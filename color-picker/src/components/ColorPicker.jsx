import { useState } from 'react'
import '../index.css'


const colorPicker = () => {
  const [color, setColor] = useState('#ffffff')
  return (
    <div>
      <div className="color-display">
        <h2> Selected Color </h2>
        <span> {color} </span>
      </div>

      <div className="color-picker">
        <label> Select a color </label>
        <input type='color' value={color} />
      </div>
    </div>
  )
}

export default colorPicker
