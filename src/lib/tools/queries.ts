import { useQuery } from "@tanstack/react-query"
import { getForecastByLocation } from "./api";
import { Coord } from "../types/weather.type";

export const useForecastByLocation = (location: Coord | null) => {
  return useQuery({
    queryKey: ["forecast_by_location", location],
    queryFn: () => {
      if(!location) return null;
      return getForecastByLocation(location);
    },
  });
}