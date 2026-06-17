import {
  Coordinates,
  WeatherClouds,
  WeatherCondition,
  WeatherMain,
  WeatherWind,
} from "./weather";

interface WeatherForecastMain extends WeatherMain {
  humidity: number;
  temp_kf: number;
}
interface WeatherForecastSys {
  pod: string;
}

export interface WeatherForecastList {
  dt: number;
  main: WeatherForecastMain;
  weather: WeatherCondition[];
  clouds: WeatherClouds;
  wind: WeatherWind;
  visibility: number;
  pop: number;
  sys: WeatherForecastSys;
  dt_txt: string;
}
interface WeatherForecastCity {
  id: number;
  name: string;
  coord: Coordinates;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface WeatherForecastResponse {
  cod: string;
  message: number;
  cnt: number;
  list: WeatherForecastList[];
  city: WeatherForecastCity;
}
