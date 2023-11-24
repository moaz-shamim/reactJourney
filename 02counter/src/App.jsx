import { useState } from "react";
import "./App.css";

function App() {
  // useState() hook

  let [counterValue, setCounterValue] = useState(0);
  

  const addValue = () => {
    if (counterValue < 20) {
      counterValue++;
      setCounterValue(counterValue);
    }
  };

  const removeValue = () => {
    if (counterValue > 0) {
      counterValue--;
      setCounterValue(counterValue);
    }
  };

  return (
    <>
      <h1>Counter Project</h1>
      <h2>
        Counter Value : <span> {counterValue} </span>
      </h2>
      <button onClick={addValue}>Increase Value </button>
      <br />
      <br />
      <button onClick={removeValue}>Decrease Value </button>
    </>
  );
}

export default App;
