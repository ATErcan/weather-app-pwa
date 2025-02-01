import { Time } from "@/lib/types/weather.type";

export const getCurrentTime = ({ dt, timezone }: Time) => {
  const utcTime = dt;
  const timezoneOffset = timezone;

  const localTime = new Date((utcTime + timezoneOffset) * 1000);
  return localTime;
};

export const formatAsHourAndMinutes = (time: Date) => {
  return `${time.getUTCHours().toString().padStart(2, "0")}:${time
    .getUTCMinutes()
    .toString()
    .padStart(2, "0")}`;
} 