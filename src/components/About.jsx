import { ImLocation } from "react-icons/im";
import { FaCalendarAlt } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="bg-orange-600 h-20 flex">
      <ul className="flex justify-items-center flex-col px-4 py-2">
        <li className="flex text-white justify-items-center p-1">
          <ImLocation className="pt-1"></ImLocation> ACCRA, GHANA
        </li>
        <li className="flex text-white text-sm justify-items-center p-1">
          <FaCalendarAlt className="pt-1"></FaCalendarAlt> AUG 14 - FEB 24, 2024
        </li>
      </ul>
      < CountDown></CountDown>
    </div>
  );
};

const CountDown = () => {
  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": 15 }}></span>
        </span>
        days
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": 10 }}></span>
        </span>
        hours
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": 24 }}></span>
        </span>
        min
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": 12 }}></span>
        </span>
        sec
      </div>
    </div>
  );
};
export default AboutPage;
