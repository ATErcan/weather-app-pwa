import { ForecastResponse } from "@/lib/types/responses/responses.type";

export const getCurrentTime = (data: ForecastResponse) => {
  const utcTime = data.dt;
  const timezoneOffset = data.timezone;

  const localTime = new Date((utcTime + timezoneOffset) * 1000);
  const hours = localTime.getUTCHours().toString().padStart(2, "0");
  const minutes = localTime.getUTCMinutes().toString().padStart(2, "0"); 
  return `${hours}:${minutes}`;
} 