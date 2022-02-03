import React, { useState } from "react";
import "../App.css";
export const Counter = () => {
  const [count, setCount] = useState(0);
  const handleClick = (value) => {
    setCount(count + value);
  };
  const doubleCount = () => {
    setCount(count * 2);
  };
  return (
    <div>
      <h1>Simple Counter Application</h1>
      <div>
        <h3>The current count is {count}</h3>
        <button className="btn" onClick={() => handleClick(1)}>
          ADD
        </button>
        <button className="btn" onClick={() => handleClick(-1)}>
          REDUCE
        </button>
        <button className="btn" onClick={() => doubleCount()}>
          Double Count
        </button>
      </div>
    </div>
  );
};
