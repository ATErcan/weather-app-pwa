import { OPEN_WEATHER_API_ICONS_URL } from "@/lib/constants/api";
import { IWeatherCardProps } from "@/lib/types/props.type";
import { WeatherCondition } from "@/lib/types/weather.type";
import { getCurrentTime } from "@/utils/helperFunctions";
import Image from "next/image";

export default function WeatherCard({ data }: IWeatherCardProps) {
  const time = getCurrentTime(data);
  const { name, weather, main: { temp, temp_max, temp_min } } = data;
  const { main, icon } = weather[0];
  
  return (
    <section className="flex justify-between bg-blue-600 px-3 py-2 h-24 text-white rounded-2xl">
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-medium">{name}</h2>
          <p className="text-sm">{time}</p>
        </div>
        <div className="flex items-center">
          <Image
            src={`${OPEN_WEATHER_API_ICONS_URL}${icon}@2x.png`}
            alt={`${main} icon`}
            width={25}
            height={25}
          />
          <p className="text-sm">{WeatherCondition[main as keyof typeof WeatherCondition]}</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between">
        <p className="text-3xl">{Math.round(temp)}°</p>
        <div className="flex gap-2 text-sm">
          <p>H: {Math.round(temp_max)}°</p>
          <p>L: {Math.round(temp_min)}°</p>
        </div>
      </div>
    </section>
  );
}