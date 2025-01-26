'use client'

import { useEffect, useState } from "react";

import { Coord } from "@/lib/types/weather.type";
import { useForecastByLocation } from "@/lib/tools/queries";
import WeatherCard from "./WeatherCard";

export default function LocationForecast() {
  const [location, setLocation] = useState<Coord | null>(null);

  const { data, isLoading, isError } = useForecastByLocation(location);

  console.log(data, isLoading, isError);

  useEffect(() => {
    if('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        setLocation({ lat: latitude, lon: longitude })
      })
    }
  }, [])

  if(isLoading) return <div>Loading...</div>;

  if(!data) return <div>Weather forecast of your current location could not be fetched. Please make sure location permission is enabled on your browser.</div>

  return <WeatherCard data={data} />
}