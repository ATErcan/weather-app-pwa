import { Coord } from "./weather.type";

export type LocalNames = {
  [languageCode: string]: string;
}

export type Location = {
  name: string;
  local_names: LocalNames | undefined;
  lat: number;
  lon: number;
  country: string;
  state: string | undefined;
};

export type StoredLocationData = Coord & {
  id: number;
}

export type LocationStore = StoredLocationData[]; 