import React, { useState } from "react";
// eslint-disable-next-line import/prefer-default-export
export function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      React App Demo
      <div>count: {count}</div>
      <div onClick={() => setCount(count + 1)}>
        <button> add </button>
      </div>
      <div onClick={() => setCount(count - 1)}>
        <button> sub </button>
      </div>
    </div>
  );
}
