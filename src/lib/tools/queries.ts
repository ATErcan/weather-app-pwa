import { useQuery } from "@tanstack/react-query"

import { getForecastByLocation, getLocationsBySearch } from "./api";
import { Coord } from "../types/weather.type";
import { LocationStore } from "../types/location.type";
import { ForecastResponse } from "../types/responses/responses.type";

export const useForecastByLocation = (location: Coord | null) => {
  return useQuery({
    queryKey: ["forecast_by_location", location],
    queryFn: () => {
      if(!location) return null;
      return getForecastByLocation(location);
    },
  });
}

export const useSearchByLocation = (searchString: string) => {
  return useQuery({
    queryKey: ["search_by_location", searchString],
    queryFn: () => getLocationsBySearch(searchString),
  });
};

export const useStoredLocations = () => {
  return useQuery({
    queryKey: ["stored_locations"],
    queryFn: async() => {
      const store = localStorage.getItem("locations");
      if (!store) return [];
      
      const locations: LocationStore = JSON.parse(store);
      const results = await Promise.allSettled(
        locations.map((location) => getForecastByLocation(location))
      );

      return results
        .filter((result) => result.status === "fulfilled")
        .map((result: { value: ForecastResponse }) => result.value);
    }
  })
}