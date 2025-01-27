import { ForecastResponse } from "./responses/responses.type";
import { WeatherConditionImage } from "./weather.type";

export interface IWeatherCardProps {
  data: ForecastResponse;
  bgImage: WeatherConditionImage;
}