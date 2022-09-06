
// Timer.js

import React from 'react';
import { useState, useEffect } from 'react';

const Timer = (props) => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    let timer = JSON.parse(localStorage.getItem("timer")) ?? props.duration;
    let duration = JSON.parse(localStorage.getItem("timer")) ?? props.duration;
    let t = new Date();
    t.setSeconds(t.getSeconds() + timer);
    const deadline = t;

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => {
        getTime(deadline)
        duration -= 1;
        localStorage.setItem("timer", JSON.stringify(duration));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h6 class="text-white d-inline me-3">
        <b className="text-white" id="timer">
            {hours}:{minutes}:{seconds}
                            </b></h6>
  );
};

export default Timer;