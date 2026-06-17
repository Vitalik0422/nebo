import ForecastSvgDraw from "@/components/ForecastSvgDraw/ForecastSvgDraw";
import css from "./WeatherHourForecast.module.css";
import { WeatherForecastList } from "@/types/weatherForecastResponse";

interface WeatherForecastProps {
  weatherDays: WeatherForecastList[];
}

const WeatherForecast = ({ weatherDays }: WeatherForecastProps) => {
  return (
    <section className={css.weatherForecastSection}>
      <div className={`container ` + css.weatherForecastContainer}>
        <div className={css.weatherForecastWrapper}>
          <div className={css.weatherForecastInterval}>
            <svg width={16} height={16}>
              <use href="/sprite.svg#icon-clock"></use>
            </svg>
            <p className={css.intervalText}>24-hour forecast</p>
          </div>
          <div className={css.hourForecastWrapper}>
            <ForecastSvgDraw weatherDays={weatherDays} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeatherForecast;
