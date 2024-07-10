import React, { useState } from "react";
import { GrFormClock } from "react-icons/gr";

const TimeInput = () => {
  const [time, setTime] = useState({ hours: "", minutes: "" });
  const [pick, setPick]= useState(false)
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="wrapper w-28">
        <div className="w-full border-[1px] border-zinc-900 overflow-hidden rounded flex gap-[.1px]">
          <div className="time w-[95%] h-7 flex justify-between items-center relative ">
            <input
              autoFocus
              type="number"
              className={`w-[45%] h-full text-center text-sm px-1`}
              name="hour"
              placeholder="hh"
              value={time.hours}
              onChange={(e) => {
                let val = e.target.value;
                Number(val) <= 23 &&
                  setTime({
                    ...time,
                    hours: val.length > 2 ? val.substring(0, 2) : val,
                  });
              }}
              min="0"
              max="23"
            />
            <span className="absolute font-bold left-1/2 -translate-x-1/2 text-xs">
              :
            </span>
            <input
              type="number"
              className="w-[45%] h-full text-center text-sm px-1"
              name="minute"
              placeholder="mm"
              value={time.minutes}
              onChange={(e) => {
                let val = e.target.value;
                Number(val) <= 59 &&
                  setTime({
                    ...time,
                    minutes: val.length > 2 ? val.substring(0, 2) : val,
                  });
              }}
              min="0"
              max="59"
            />
          </div>
          <span onClick={()=>setPick(!pick)} className="flex items-center bg-zinc-200 cursor-pointer">
            <GrFormClock />
          </span>
        </div>
        <div className={`picker bg-zinc-400 w-[85%] flex gap-[1px] transition-all origin-top   ${pick? "scale-y-1": "scale-y-0"}`}>
          <div className="pick-hours w-1/2 h-44 overflow-y-auto bg-zinc-50 flex flex-col items-center ">
            {Array.from({ length: 24 }, (_, i) => i).map((h, i) => (
              <span
                className="w-full text-center cursor-pointer mb-3 hover:bg-zinc-200"
                key={i}
                onClick={() => {
                  setTime({...time, hours: h });
                }}
              >
                {h}
              </span>
            ))}
          </div>
          <div className="pick-minutes w-1/2 h-44 overflow-y-auto bg-zinc-50 flex flex-col items-center ">
            {Array.from({ length: 60 }, (_, i) => i).map((m, i) => (
              <span
                className="w-full text-center cursor-pointer mb-3 hover:bg-zinc-200"
                key={i}
                onClick={() => {
                  setTime({...time, minutes: m });
                }}
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeInput;
