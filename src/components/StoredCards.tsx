'use client';

import useLocalStorage from "@/lib/hooks/useLocalStorage";
import { useStoredLocations } from "@/lib/tools/queries";
import WeatherCard from "./WeatherCard";

export default function StoredCards() {
  const { loading } = useLocalStorage();

  const { data, isLoading, isError } = useStoredLocations();

  if(loading || isLoading) {
    return null;
  }

  return (
    <>
      {data?.map(location => {
        return <WeatherCard key={location.id} data={location} />
      })}
    </>
  )
}