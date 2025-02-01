"use client";

import { useEffect, useState } from "react";

import { Time } from "@/lib/types/weather.type";
import {
  formatAsHourAndMinutes,
  getCurrentTimeWithUserCorrection,
} from "@/utils/helperFunctions";

export default function Clock({ dt, timezone }: Time) {
  const [time, setTime] = useState<Date>(() =>
    getCurrentTimeWithUserCorrection({ dt, timezone })
  );

  useEffect(() => {
    const updateClock = () => {
      setTime(getCurrentTimeWithUserCorrection({ dt, timezone }));
    };

    updateClock();

    // Calculate the delay until the next full minute
    const now = new Date();
    const secondsUntilNextMinute = 60 - now.getSeconds();

    // Set a timeout to synchronize exactly when the next full minute starts
    const syncTimeout = setTimeout(() => {
      updateClock();

      const interval = setInterval(updateClock, 60000);

      return () => clearInterval(interval);
    }, secondsUntilNextMinute * 1000);

    return () => clearTimeout(syncTimeout);
  }, [dt, timezone]);

  const formattedTime = formatAsHourAndMinutes(time);

  return <p className="text-sm">{formattedTime}</p>;
}
