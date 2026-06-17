import css from "./WeatherForecastItem.module.css";
interface WeatherForecastItemProps {
  weather: {
    day: string;
    sky: string;
  };
  setSelectDay: (day: string) => void;
}

const WeatherForecastItem = ({
  weather,
  setSelectDay,
}: WeatherForecastItemProps) => {
  const day = weather.day.slice(0, 3).toUpperCase();
  const handleChoseDay = () => {
    setSelectDay(weather.day);
  };
  return (
    <>
      <p className={css.forecastDayName} onClick={handleChoseDay}>
        {day}
      </p>
      <svg className={css.dayForecastIcon}>
        <use href={`/sprite.svg#icon-${weather.sky.toLowerCase()}-d`}></use>
      </svg>
    </>
  );
};

export default WeatherForecastItem;
