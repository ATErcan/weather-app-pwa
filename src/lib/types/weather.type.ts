export interface Coord {
  lon: number;
  lat: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

export interface Wind {
  speed: number;
  deg: number;
}

export interface Clouds {
  all: number;
}

export interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export enum WeatherCondition {
  Thunderstorm = "Stormy",
  Drizzle = "Light Rain",
  Rain = "Rainy",
  Snow = "Snowy",
  Atmosphere = "Foggy",
  Clear = "Sunny",
  Clouds = "Cloudy",
}

export enum WeatherConditionImage {
  Thunderstorm = "/images/thunderstorm.jpg",
  Drizzle = "/images/drizzle.jpg",
  Rain = "/images/rainy.jpg",
  Snow = "/images/snowy.jpg",
  Atmosphere = "/images/fog.jpg",
  Clear = "/images/clear.jpg",
  Clouds = "/images/cloudy.jpg"
}

export type Time = {
  dt: number;
  timezone: number;
}