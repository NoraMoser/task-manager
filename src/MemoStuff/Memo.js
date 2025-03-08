import React, { useState, useMemo } from "react";

function App() {
  const [number, setNumber] = useState(2);
  const [count, setCount] = useState(0);

  // Memoizing the squared number
  const squaredNumber = useMemo(() => {
    console.log("Calculating square...");
    return number * number;
  }, [number]); // Runs only when `number` changes

  return (
    <div>
      <p>Squared: {squaredNumber}</p>
      <button onClick={() => setNumber(number + 1)}>Change Number</button>
      <button onClick={() => setCount(count + 1)}>Increment Count: {count}</button>
    </div>
  );
}

export default App;
