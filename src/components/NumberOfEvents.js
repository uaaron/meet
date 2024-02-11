import { useState } from "react"

const NumberOfEvents = ({ setCurrentNOE }) => {
  const [num, setNum] = useState("32")

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setCurrentNOE(value);
    setNum(value)
  }

  return (
    <div id="number-of-events">
      <input
        type="text"
        defaultValue="32"
        value={num}
        onChange={handleInputChanged}
      />
    </div>
  )
}

export default NumberOfEvents;