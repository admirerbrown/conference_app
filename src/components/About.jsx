import { ImLocation } from "react-icons/im";
import { FaCalendarAlt } from "react-icons/fa";
import React, { useState, useEffect } from "react";


const AboutPage = () => {
  return (
    <div className="bg-orange-600 h-20">
      <ul className="flex justify-items-center flex-col px-4 py-2">
        <li className="flex text-white justify-items-center p-1">
          <ImLocation className="pt-1"></ImLocation> ACCRA, GHANA
        </li>
        <li className="flex text-white text-sm justify-items-center p-1">
          <FaCalendarAlt className="pt-1"></FaCalendarAlt> AUG 14 - FEB 24, 2024
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
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ '--value': days }}>{days}</span>
        </span>
        days
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ '--value': hours }}>{hours}</span>
        </span>
        hours
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ '--value': minutes }}>{minutes}</span>
        </span>
        min
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ '--value': seconds }}>{seconds}</span>
        </span>
        sec
      </div>
    </div>
  );
  
};


// const CountdownItem = (args) => {
//   const [value, setValue] = useState(args.value);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setValue((v) => (v <= 0 ? args.value : v - 1));
//     }, 1000);

//     return () => {
//       clearTimeout(timer);
//     };
//   }, [args.value]);

//   return <span style={{ "--value": value }}></span>;
// };


export default AboutPage;
