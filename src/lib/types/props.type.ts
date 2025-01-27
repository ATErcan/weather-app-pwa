import { ForecastResponse } from "./responses/responses.type";
import { WeatherConditionImage } from "./weather.type";

export type SearchParamsProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export interface IWeatherCardProps {
  data: ForecastResponse;
  bgImage: WeatherConditionImage;
}