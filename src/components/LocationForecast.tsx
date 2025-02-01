'use client'

import { useEffect, useState } from "react";

import { Coord } from "@/lib/types/weather.type";
import { useForecastByLocation } from "@/lib/tools/queries";
import WeatherCard from "./WeatherCard";
import WeatherCardSkeleton from "./ui/skeletons/WeatherCardSkeleton";

export default function LocationForecast() {
  const [location, setLocation] = useState<Coord | null>(null);
  const [locationError, setLocationError] = useState<boolean>(false); 

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          const { latitude, longitude } = coords;
          setLocation({ lat: latitude, lon: longitude });
          setLocationError(false);
        },
        (error) => {
          console.error("Geolocation error:", error);
          setLocationError(true);
        }
      );
    } else {
      setLocationError(true);
    }
  }, [])
  
  const { data, isLoading, isError, isFetching,  } = useForecastByLocation(location);

  if (locationError) return (
    <div className="h-24 text-white rounded-2xl flex items-center">
      <p className="text-sm text-center">
        Location access denied. Please enable location services in your browser settings.
      </p>
    </div>
  );

  if (isLoading || isFetching || !location) return <WeatherCardSkeleton />

  if(!data) return (
    <div className="h-24 text-white rounded-2xl flex items-center">
      <p className="text-sm text-center">
        Weather forecast of your current location could not be fetched. Please
        make sure location permission is enabled on your browser.
      </p>
    </div>
  );

  if(isError) return (
    <div className="h-24 text-white rounded-2xl flex items-center">
      <p className="text-sm text-center">
        Something went wrong while getting the forecast of your location. Try again later.
      </p>
    </div>
  );

  return <WeatherCard data={data} isUserLocation={true} />
}