import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

import { LOCATION_LIMIT, OPEN_WEATHER_API_URL } from "../constants/api";
import { ForecastResponse, LocationResponse } from "../types/responses/responses.type";
import { Coord } from "../types/weather.type";
import { sendNotification } from "@/app/actions";

const WEATHER_API = axios.create({
  baseURL: OPEN_WEATHER_API_URL,
});

/**
 * Fetches data from a given URL using axios and handles any errors.
 *
 * @template T
 * @param {string} url - The API endpoint to fetch data from.
 * @param {AxiosRequestConfig} [options={}] - Optional axios request configuration.
 * @returns {Promise<T>} - The data retrieved from the API.
 * @throws Will throw an error if the request fails.
 */
export const fetchData = async <T>(
  url: string,
  options: AxiosRequestConfig = {},
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await WEATHER_API.get(url, options);
    return response.data;
  } catch (error) {
    console.error('Error retrieving data:', error);
    throw new Error('Could not get data');
  }
};

export const getForecastByCity = async (city: string) => {;
  const url = `data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}&units=metric`;
  const response = await fetchData<ForecastResponse>(url);
  return response;
}

export const getForecastByLocation = async (location: Coord) => {  
  const url = `data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}&units=metric`;
  const response = await fetchData<ForecastResponse>(url);

  const forecast = response.weather[0].main;

  if (forecast === "Thunderstorm") {
    await sendNotification(
      "⚠️ Thunderstorm Alert! Take precautions and stay safe."
    );
  }
  return response;
}

export const getLocationsBySearch = async (query: string) => {
  const url = `geo/1.0/direct?q=${query}&limit=${LOCATION_LIMIT}&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}`;
  const response = await fetchData<LocationResponse>(url);
  return response;
} 