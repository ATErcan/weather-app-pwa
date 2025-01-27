'use client';

import { useEffect, useState } from "react";

import { Time } from "@/lib/types/weather.type";
import { getCurrentTime } from "@/utils/helperFunctions";

export default function Clock({ dt, timezone }: Time) {
  const [time, setTime] = useState<Date>(() => getCurrentTime({ dt, timezone }));

  useEffect(() => {
    const synchronize = () => {
      const now = new Date(time);
      const secondsUntilNextMinute = 60 - now.getSeconds();
      const nextMinute = now.getTime() + secondsUntilNextMinute * 1000;

      const timeout = setTimeout(() => {
        setTime(new Date(nextMinute));

        const interval = setInterval(() => {
          setTime((prevTime) => new Date(prevTime.getTime() + 60000));
        }, 60000);

        return () => clearInterval(interval);
      }, secondsUntilNextMinute * 1000);

      return () => clearTimeout(timeout);
    }
    
    synchronize();
  }, [time]);

  const formattedTime = `${time
    .getUTCHours()
    .toString()
    .padStart(2, "0")}:${time.getUTCMinutes().toString().padStart(2, "0")}`;

  return <p className="text-sm">{formattedTime}</p>;
}