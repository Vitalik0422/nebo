import css from "./WeatherDaySlider.module.css";
import WeatherForecast from "@/components/WeatherForecastList/WeatherForecastList";
import { WeatherForecastList } from "@/types/weatherForecastResponse";
import clsx from "clsx";

interface WeatherDaySliderProps {
  weatherDays: WeatherForecastList[];
}

const WeatherDaySlider = ({ weatherDays }: WeatherDaySliderProps) => {
  return (
    <section className={css.weatherDaySliderSection}>
      <div className={clsx("container", css.weatherDaySliderContainer)}>
        <WeatherForecast weatherList={weatherDays} />
      </div>
    </section>
  );
};

export default WeatherDaySlider;
