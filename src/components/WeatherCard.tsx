import Link from "next/link";
import Image from "next/image";

import { OPEN_WEATHER_API_ICONS_URL } from "@/lib/constants/api";
import { IWeatherCardProps } from "@/lib/types/props.type";
import { WeatherCondition, WeatherConditionImage } from "@/lib/types/weather.type";
import Clock from "./Clock";

export default function WeatherCard({ data, isUserLocation = false }: IWeatherCardProps) {
  const { coord: { lat, lon }, name, weather, main: { temp, temp_max, temp_min }, dt, timezone } = data;
  const { main, icon } = weather[0];

  const bgImage = WeatherConditionImage[data.weather[0].main];
  
  return (
    <section
      className={`h-24 text-white rounded-2xl relative hover:opacity-80`}
    >
      <Image
        src={bgImage}
        alt={main}
        fill
        priority
        className="object-cover rounded-2xl"
        sizes="(max-width: 640px) 100vw, 
              (max-width: 768px) 50vw,
              (max-width: 1280px) 33vw,
              33vw"
      />
      <Link
        href={`/location?lat=${lat}&lon=${lon}`}
        className="flex justify-between px-3 py-2 rounded-2xl cursor-pointer absolute z-10 inset-0"
      >
        <div className="flex flex-col justify-between">
          <div>
            <div className="flex gap-1 items-center">
              {isUserLocation && (
                <Image
                  src="/icons/maps-icon.png"
                  alt="location-icon"
                  width={12}
                  height={12}
                  className="w-auto h-auto"
                />
              )}
              <h2 className="text-lg font-medium">{name}</h2>
            </div>
            <Clock dt={dt} timezone={timezone} />
          </div>
          <div className="flex items-center">
            <Image
              src={`${OPEN_WEATHER_API_ICONS_URL}${icon}@2x.png`}
              alt={`${main} icon`}
              width={25}
              height={25}
            />
            <p className="text-sm">{WeatherCondition[main]}</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between">
          <p className="text-3xl">{Math.round(temp)}°</p>
          <div className="flex gap-2 text-sm">
            <p>H: {Math.round(temp_max)}°</p>
            <p>L: {Math.round(temp_min)}°</p>
          </div>
        </div>
      </Link>
    </section>
  );
}