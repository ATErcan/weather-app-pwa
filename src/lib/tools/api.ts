import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { OPEN_WEATHER_API_URL } from "../constants/api";
import { ForecastResponse } from "../types/responses/responses.type";
import { Coord } from "../types/weather.type";

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
  const url = `weather?q=${city}&appid=${process.env.OPEN_WEATHER_API_KEY}&units=metric`;
  const response = await fetchData<ForecastResponse>(url);
  return response;
}

export const getForecastByLocation = async (location: Coord) => {  
  const url = `weather?lat=${location.lat}&lon=${location.lon}&appid=${process.env.OPEN_WEATHER_API_KEY}&units=metric`;
  const response = await fetchData<ForecastResponse>(url);
  return response;
}