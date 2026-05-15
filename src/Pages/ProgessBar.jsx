import React, { useEffect, useState } from "react";

function ProgessBar() {
  const [bar, setBar] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setBar((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return prev;
        }
        return prev + 10;
      });
    }, 1000);

    //returning to prevent memorey leak
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="container">
      <div>
        <h1>Progress BAR</h1>
      </div>
      <div className="pBarContainer">
        <div className="pBar" style={{ width: `${bar}%` }}>
          <div align="center" style={{ padding: "10px" }}>
            {bar}%
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgessBar;
