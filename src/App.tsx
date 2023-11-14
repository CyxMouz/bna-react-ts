import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className="text-3x1 text-red-600 font-bold underline">BNA APP</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>click me</button>
        <p>{count}</p>
      </div>
    </div>
  );
};

export default App;
