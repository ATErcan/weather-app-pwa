import { ForecastResponse } from "./responses/responses.type";

export type SearchParamsProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export interface IWeatherCardProps {
  data: ForecastResponse;
}

export interface IWeatherDetailsCardProps {
  icon: string;
  title: string;
  measure: string;
  desc: string;
}

export interface ILocationDetailsCardProps {
  lon: number;
  lat: number;
  name: string;
  country: string;
}