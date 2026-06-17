export type Coordinates = {
  lat: number;
  lon: number;
};

export type PlaceType = Coordinates | { city: string };

export interface WeatherCondition {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface WeatherMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level?: number;
  grnd_level?: number;
}

export interface WeatherWind {
  speed: number;
  deg: number;
  gust?: number;
}

export interface WeatherClouds {
  all: number;
}

export interface WeatherPrecipitation {
  "1h"?: number;
  "3h"?: number;
}

export interface WeatherSys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface WeatherResponse {
  coord: Coordinates;
  weather: WeatherCondition[];
  base: string;
  main: WeatherMain;
  visibility: number;
  wind: WeatherWind;
  rain?: WeatherPrecipitation;
  snow?: WeatherPrecipitation;
  clouds: WeatherClouds;
  dt: number;
  sys: WeatherSys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface DayDetails {
  pop: number;
  feel_temp: number;
  pressure: number;
  humidity: number;
}
export interface DailyForecastDay {
  day: string;
  sky: string;
  details: DayDetails;
  time: string;
}
