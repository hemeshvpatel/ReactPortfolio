import React, { useState, useEffect } from "react";
import { portfolioData, stockData } from "./data";

export default function App() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <p>You clicked {count} times</p>
      <button style={{ width: "100px" }} onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <div style={{ display: "flex", flexDirection: "column", color: "blue" }}>
        {stockData &&
          stockData.map((item, key) => {
            return (
              <div key={key}>
                <p>
                  {item.company}: {item.ticker}
                </p>
                <p>
                  {item.stockPrice}: {item.timeElapsed}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
