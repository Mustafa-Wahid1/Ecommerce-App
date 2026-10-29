import React, { useEffect } from "react";
import banner from "../../assets/banner.jpg";
import { useState } from "react";
const Banner = () => {
  const InitialTime = 5 * 60 * 60
  const [timeleft, setTimeleft] = useState(()=>{
    const storedTime = localStorage.getItem('remainingtime');
    return storedTime && parseInt(storedTime, 10) > 0 ?
    parseInt(storedTime, 10) : InitialTime
  })


  const fortmatTime = (time) => {

    useEffect(() => {

      if (timeleft <= 0) return

      const timer = setInterval(() => {
        setTimeleft(prev => {
          if (prev <= 1) {
            clearInterval(timer);
          localStorage.setItem('remainingtime',0);
            return 0;
          }

          const remainingtime = prev - 1
          localStorage.setItem('remainingtime',remainingtime);
          return remainingtime
        })
      }, 1000);

      return () =>clearInterval (timer);

    }, [timeleft])
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return {
      hours: String(hours).padStart(2, '0'),
      minutes: String(minutes).padStart(2, '0'),
      seconds: String(seconds).padStart(2, '0'),
    }
  }
  const { hours, minutes, seconds } = fortmatTime(timeleft);
  return (
    <section
      className=" h-[60vh] mt-[14vh] bg-cover"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="max-w-[1300px] mx-auto p-17 flex flex-col justify-center gap-3">
        <h1 className="text-red-600 text-8xl uppercase font-bold tracking-tight">
          Big Sale!
        </h1>
        <h2 className="text-zinc-600 text-3xl">
          Up to 50% oFF Limited Time Only
        </h2>
        <div className="text-6xl font-bold text-zinc-800 flex gap-x-3  p-3 ">
          <span className="text-white bg-zinc-800  ">{hours}</span>:
          <span className="text-white bg-zinc-800  ">{minutes}</span>:
          <span className="text-white bg-zinc-800  ">{seconds}</span>
        </div>
      </div>
    </section>
  );
};

export default Banner;
