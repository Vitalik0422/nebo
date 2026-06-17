import { WeatherForecastResponse } from "@/types/weatherForecastResponse";
import { weatherInstance } from ".";
import type { PlaceType, WeatherResponse } from "@/types/weather";

interface fetchWeatherForecastRequest {
  place: PlaceType;
  cnt?: number;
}

export const fetchWeather = async (
  place: PlaceType,
): Promise<WeatherResponse> => {
  const params = {};
  if ("city" in place) {
    Object.assign(params, { q: place.city });
  } else {
    Object.assign(params, { lat: place.lat, lon: place.lon });
  }
  const response = await weatherInstance.get<WeatherResponse>("/weather", {
    params,
  });

  return response.data;
};

export const fetchWeatherForecast = async ({
  place,
  cnt = 40,
}: fetchWeatherForecastRequest): Promise<WeatherForecastResponse> => {
  const params = { cnt };

  if ("city" in place) {
    Object.assign(params, { q: place.city });
  } else {
    Object.assign(params, { lat: place.lat, lon: place.lon });
  }
  const response = await weatherInstance.get<WeatherForecastResponse>(
    "/forecast",
    {
      params,
    },
  );

  return response.data;
};
