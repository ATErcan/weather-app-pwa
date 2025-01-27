import Image from "next/image";
import Link from "next/link";

import { IWeatherCardProps } from "@/lib/types/props.type";
import { WeatherConditionImage } from "@/lib/types/weather.type";
import { getFeelsLikeDesc, getHumidityDesc, getVisibilityDesc, getWindDesc } from "@/utils/cardsDesc";
import WeatherDetailsCard from "./cards/WeatherDetailsCard";
import { formatAsHourAndMinutes, getCurrentTime } from "@/utils/helperFunctions";
import LocationDetailsCard from "./cards/LocationDetailsCard";

export default function ForecastByCoord({ data }: IWeatherCardProps) {
  const {
    coord: { lat, lon },
    name,
    weather,
    main: { temp, temp_max, temp_min, feels_like, humidity },
    visibility,
    timezone,
    sys: { sunrise, sunset, country },
    wind: { speed },
  } = data;
  const { main } = weather[0];

  const bgImage = WeatherConditionImage[data.weather[0].main as keyof typeof WeatherConditionImage];
  const backgroundStyle = {
    backgroundImage: `url(${bgImage}`
  };

  const feelsLikeDesc = getFeelsLikeDesc(temp, feels_like);
  const humidityDesc = getHumidityDesc(humidity);
  const visibilityDesc = getVisibilityDesc(visibility);
  const windDesc = getWindDesc(speed);

  const sunriseTime = formatAsHourAndMinutes(
    getCurrentTime({ dt: sunrise, timezone })
  );
  const sunsetTime = formatAsHourAndMinutes(
    getCurrentTime({ dt: sunset, timezone })
  );

  return (
    <div
      className="min-h-screen bg-zinc-950 bg-cover bg-center bg-fixed px-2 pt-4 pb-8 font-[family-name:var(--font-geist-sans)] sm:px-6 md:py-6 md:px-7"
      style={backgroundStyle}
    >
      <div className="flex justify-between items-center max-w-[64rem] mx-auto md:px-6">
        <Link
          href="/"
          className="w-10 h-10 flex justify-center items-center p-1 bg-zinc-400/30 backdrop-blur-sm rounded-full"
        >
          <Image
            src="/icons/back-arrow.svg"
            alt="back-arrow-icon"
            width={32}
            height={32}
          />
        </Link>
        <div className="w-10 h-10 flex justify-center items-center p-1 bg-zinc-400/30 backdrop-blur-sm rounded-full">
          <Image
            src="/icons/plus.svg"
            alt="back-arrow-icon"
            width={32}
            height={32}
          />
        </div>
      </div>
      <header className="text-center text-zinc-800 py-8 max-w-[75rem] mx-auto md:py-14 md:mb-4">
        <h1 className="font-semibold text-2xl sm:text-3xl lg:text-4xl">{name}</h1>
        <p className="font-semibold text-5xl">{Math.round(temp)}°</p>
        <h2 className="font-medium lg:text-xl">{main}</h2>
        <div className="flex justify-center gap-2 font-medium lg:text-xl">
          <p>H: {Math.round(temp_max)}°</p>
          <p>L: {Math.round(temp_min)}°</p>
        </div>
      </header>
      <main className="flex flex-col gap-4 items-center max-w-[75rem] mx-auto md:gap-6">
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          <WeatherDetailsCard
            icon="temp"
            title="Feels Like"
            measure={`${Math.round(feels_like)}°`}
            desc={feelsLikeDesc}
          />
          <WeatherDetailsCard
            icon="humidity"
            title="Humidity"
            measure={`${humidity}%`}
            desc={humidityDesc}
          />
          <WeatherDetailsCard
            icon="eye"
            title="Visibility"
            measure={`${visibility / 1000} km`}
            desc={visibilityDesc}
          />
          <WeatherDetailsCard
            icon="sunrise"
            title="Sunrise"
            measure={sunriseTime}
            desc={`Sunset: ${sunsetTime}`}
          />
          <WeatherDetailsCard
            icon="wind"
            title="Wind"
            measure={`${speed} m/s`}
            desc={windDesc}
          />
        </div>
        <LocationDetailsCard
          lat={lat}
          lon={lon}
          name={name}
          country={country}
        />
      </main>
    </div>
  );
}