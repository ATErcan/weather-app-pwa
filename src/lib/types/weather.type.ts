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

export const WeatherCondition: Record<string, string> = {
  Thunderstorm: "Stormy",
  Drizzle: "Light Rain",
  Rain: "Rainy",
  Snow: "Snowy",
  Clear: "Sunny",
  Clouds: "Cloudy",
  
  Atmosphere: "Foggy",
  Mist: "Foggy",
  Smoke: "Foggy",
  Haze: "Foggy",
  Dust: "Foggy",
  Fog: "Foggy",
  Sand: "Foggy",
  Ash: "Foggy",
  Squall: "Foggy",
  Tornado: "Foggy",
};

export const WeatherConditionImage: Record<string, string> = {
  Thunderstorm: "/images/thunderstorm.jpg",
  Drizzle: "/images/drizzle.jpg",
  Rain: "/images/rainy.jpg",
  Snow: "/images/snowy.jpg",
  Clear: "/images/clear.jpg",
  Clouds: "/images/cloudy.jpg",

  Atmosphere: "/images/fog.jpg",
  Mist: "/images/fog.jpg",
  Smoke: "/images/fog.jpg",
  Haze: "/images/fog.jpg",
  Dust: "/images/fog.jpg",
  Fog: "/images/fog.jpg",
  Sand: "/images/fog.jpg",
  Ash: "/images/fog.jpg",
  Squall: "/images/fog.jpg",
  Tornado: "/images/fog.jpg",
};

export type Time = {
  dt: number;
  timezone: number;
}