"use client";
import css from "./WeatherForecastList.module.css";
import { buildDailyForecast } from "@/lib/utils/buildDailyForecast";
import { WeatherForecastList } from "@/types/weatherForecastResponse";
import WeatherForecastItem from "../WeatherForecastItem/WeatherForecastItem";
import WeatherDailyDetails from "../WeatherDailyDetails/WeatherDailyDetails";
import { useState } from "react";

interface WeatherForecastListProps {
  weatherList: WeatherForecastList[];
}

const WeatherForecast = ({ weatherList }: WeatherForecastListProps) => {
  const dailyWeather = buildDailyForecast({ weatherList });
  const [selectDay, setSelectDay] = useState<string>(dailyWeather[0].day);

  return (
    <div className={css.dailyWeatherWrapper}>
      <ul className={css.dailyWeatherList}>
        {dailyWeather.map(({ day, sky }) => (
          <li key={day} className={css.dailyWeatherItem}>
            <WeatherForecastItem
              setSelectDay={setSelectDay}
              weather={{ day, sky }}
            />
          </li>
        ))}
      </ul>

      <WeatherDailyDetails dailyWeather={dailyWeather} selectDay={selectDay} />
    </div>
  );
};

export default WeatherForecast;
