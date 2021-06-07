import React, { useState, useEffect } from "react";

export default function Timer() {
  let timerStyle = {
    color: "#616161",
  };

  let [date, setDate] = useState(new Date());

  useEffect(() => {
    let timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <p style={timerStyle} className="timer">
        {date.toLocaleTimeString()}
      </p>
    </div>
  );
}
