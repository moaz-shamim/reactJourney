import { useState } from "react";
import "./App.css";

function App() {
  // useState() hook

  const [counterValue, setCounterValue] = useState(0);

  function addValue() {
    if (counterValue < 20) {
      setCounterValue(counterValue + 1);
    }
  }

  const removeValue = () => {
    if (counterValue > 0) {
      setCounterValue(counterValue - 1);
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
