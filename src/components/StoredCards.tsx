'use client';

import toast from "react-hot-toast";

import useLocalStorage from "@/lib/hooks/useLocalStorage";
import { useStoredLocations } from "@/lib/tools/queries";
import WeatherCard from "./WeatherCard";
import WeatherCardSkeleton from "./ui/skeletons/WeatherCardSkeleton";

export default function StoredCards() {
  const { loading } = useLocalStorage();

  const { data, isLoading, isError } = useStoredLocations();

  if(loading || isLoading) {
    return (
      Array.from({ length: 3 }).map((_, i) => (
        <WeatherCardSkeleton key={i} />
      ))
    )
  }

  if(isError) {
    toast.error(
      "Something went wrong while fetching the added weather forecasts! Try again later.",
      {
        id: "fetch-error",
      }
    );
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