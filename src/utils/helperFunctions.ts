import { Time } from "@/lib/types/weather.type";

export const getCurrentTime = ({ dt, timezone }: Time) => {
  const utcTime = dt;
  const timezoneOffset = timezone;

  const localTime = new Date((utcTime + timezoneOffset) * 1000);
  return localTime;
};

export const getCurrentTimeWithUserCorrection = ({ timezone }: Time) => {
  // Get the user's actual local time
  const userTime = new Date();

  // Calculate the user's timezone offset (in seconds)
  const userTimezoneOffset = userTime.getTimezoneOffset() * -60;

  // Calculate the real-world difference between user & location timezones
  const timezoneDifference = timezone - userTimezoneOffset;

  const userHours = userTime.getHours();
  const userMinutes = userTime.getMinutes();

  // Convert `timezoneDifference` from seconds to hours
  const correctedHour = (userHours + timezoneDifference / 3600) % 24;
  const actualTime = new Date(userTime);
  actualTime.setHours(correctedHour, userMinutes, 0, 0); // Set corrected hour & user’s minutes

  return actualTime;
};

export const formatAsHourAndMinutes = (time: Date) => {
  return `${time.getHours().toString().padStart(2, "0")}:${time
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;
};

export const formatSunriseAndSunset = (time: Date) => {
  return `${time.getUTCHours().toString().padStart(2, "0")}:${time
    .getUTCMinutes()
    .toString()
    .padStart(2, "0")}`;
} 