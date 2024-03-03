import { useState } from "react"

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const [num, setNum] = useState("32")

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setNum(value)

    let infoText;
    if (isNaN(value) || value <= 0) {
      infoText = "Only positive numbers are allowed"
    } else {
      infoText = "";
      setCurrentNOE(value);
    }
    setErrorAlert(infoText);

  }

  return (
    <div id="number-of-events">
      <input
        type="text"
        value={num}
        onChange={handleInputChanged}
      />
    </div>
  )
}

export default NumberOfEvents;