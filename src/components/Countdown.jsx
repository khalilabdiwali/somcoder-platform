import React, { useState, useEffect } from "react";

function Countdown() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Set the date you want to count down to
    const countDownDate = new Date("June 30, 2023 23:59:59").getTime();

    // Update the countdown every 1 second
    const interval = setInterval(() => {
      // Get the current date and time
      const now = new Date().getTime();

      // Find the distance between now and the countdown date
      const distance = countDownDate - now;

      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Update state with the new values
      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container  mx-auto my-4 p-4 space-x-5">
          <h1 className="text-4xl text-white text-center m-4">Discount is running</h1>

      <div className="grid grid-cols-4 gap-4 p-3 md:p-7 text-white">
        <div className="bg-slate-900 p-4 text-center">
          <div className="text-3xl font-bold">{days}</div>
          <div className="text-2xl">Days</div>
        </div>
        <div className="bg-slate-900 p-4 text-center">
          <div className="text-3xl font-bold">{hours}</div>
          <div className="text-2xl">Hours</div>
        </div>
        <div className="bg-slate-900 p-4 text-center">
          <div className="text-3xl font-bold">{minutes}</div>
          <div className="text-2xl">Minutes</div>
        </div>
        <div className="bg-slate-900 p-4 text-center">
          <div className="text-3xl font-bold">{seconds}</div>
          <div className="text-2xl">Seconds</div>
        </div>
      </div>
    </div>
  );
}

export default Countdown;