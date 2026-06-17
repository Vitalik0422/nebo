import { DailyForecastDay } from "@/types/weather";
import css from "./WeatherDailyDetails.module.css";

interface WeatherDailyDetailsProps {
  dailyWeather: DailyForecastDay[];
  selectDay: string;
}

const WeatherDailyDetails = ({
  dailyWeather,
  selectDay,
}: WeatherDailyDetailsProps) => {
  const details = dailyWeather.find((item) => item.day === selectDay);

  if (!details) {
    return null;
  }
  const rain = Number(details.details.pop * 100).toFixed();
  return (
    <div className={css.dayDetails}>
      <p className={css.dayDetailsHour}>
        <svg width={24} height={24}>
          <use href="/sprite.svg#icon-clock"></use>
        </svg>
        {details.time.split(" ")[1].slice(0, 5)}
      </p>
      <div className={css.dayDetailsThumb}>
        <p className={css.detailsText}>
          <span className={css.detailsTitle}>
            <svg width={24} height={24}>
              <use href="./sprite.svg#icon-drop"></use>
            </svg>
            Chance of rain:
          </span>{" "}
          {rain}%
        </p>
        <p className={css.detailsText}>
          <span className={css.detailsTitle}>
            <svg width={24} height={24}>
              <use href="./sprite.svg#icon-humidity"></use>
            </svg>
            Humidity:
          </span>{" "}
          {details.details.humidity}%
        </p>
        <p className={css.detailsText}>
          <span className={css.detailsTitle}>
            <svg width={24} height={24}>
              <use href="./sprite.svg#icon-pressure"></use>
            </svg>
            Pressure:{" "}
          </span>
          {details.details.pressure} kPa
        </p>
        <p className={css.detailsText}>
          <span className={css.detailsTitle}>
            <svg width={24} height={24}>
              <use href="./sprite.svg#icon-thermometer"></use>
            </svg>
            Feel:{" "}
          </span>
          {Number(details.details.feel_temp).toFixed()}°C
        </p>
      </div>
    </div>
  );
};

export default WeatherDailyDetails;
