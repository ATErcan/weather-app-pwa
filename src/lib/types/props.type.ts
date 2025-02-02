import { ForecastResponse } from "./responses/responses.type";
import { Coord } from "./weather.type";

export type SearchParamsProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export interface IWeatherCardProps {
  data: ForecastResponse;
  isUserLocation?: boolean; 
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

export interface IToggleStoreBtnProps extends Coord{
  id: number
}

export interface IPushNotificationModalProps {
  subscription: PushSubscription | null;
  subscribeToPush(): Promise<void>;
  unsubscribeFromPush(): Promise<void>;
}