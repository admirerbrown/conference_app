import { ImLocation } from "react-icons/im";
import { FaCalendarAlt } from "react-icons/fa";
import React, { useState, useEffect } from "react";

const Counter = () => {
  return (
    <div className="bg-[#e45914] sm:h-20 lg:h-24 xl:24 flex justify-between md:px-24">
      <ul className="flex justify-items-center flex-col px-4 py-2">
        <li className="flex text-white justify-items-center p-1">
          <ImLocation className="pt-1"></ImLocation> ACCRA, GHANA
        </li>
        <li className="flex text-white text-sm justify-items-center p-1">
          <FaCalendarAlt className="pt-1 "></FaCalendarAlt> AUG 14 - FEB 24,
          2024
        </li>
      </ul>
      <Countdown></Countdown>
    </div>
  );
};

const Countdown = () => {
  const [days, setDays] = useState(99);
  const [hours, setHours] = useState(10);
  const [minutes, setMinutes] = useState(24);
  const [seconds, setSeconds] = useState(49);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds((s) => s - 1);
      } else {
        if (minutes > 0) {
          setMinutes((m) => m - 1);
          setSeconds(59);
        } else {
          if (hours > 0) {
            setHours((h) => h - 1);
            setMinutes(59);
            setSeconds(59);
          } else {
            if (days > 0) {
              setDays((d) => d - 1);
              setHours(23);
              setMinutes(59);
              setSeconds(59);
            }
          }
        }
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div className="grid-flow-col gap-5 text-center auto-cols-max py-4 hidden md:grid">
      <div className="flex flex-col p-2 bg-neutral  text-neutral-content h-16">
        <span className="countdown font-mono text-3xl">
          <span style={{ "--value": days }}>{days}</span>
        </span>
        days
      </div>
      <div className="flex flex-col p-2 bg-neutral  text-neutral-content h-16">
        <span className="countdown font-mono text-3xl ">
          <span style={{ "--value": hours }}>{hours}</span>
        </span>
        hours
      </div>
      <div className="flex flex-col p-2 bg-neutral  text-neutral-content h-16">
        <span className="countdown font-mono text-3xl">
          <span style={{ "--value": minutes }}>{minutes}</span>
        </span>
        min
      </div>
      <div className="flex flex-col p-2 bg-neutral text-neutral-content h-16">
        <span className="countdown font-mono text-3xl">
          <span style={{ "--value": seconds }}>{seconds}</span>
        </span>
        sec
      </div>
    </div>
  );
};

export default Counter;
