"use client";
import { msToDate } from "@/lib/utils/dateParse";
import css from "./Hero.module.css";
import { useBurgerStore } from "@/lib/store/burgerStore";

interface Weather {
  city: string;
  temp: number;
  cloudy: string;
  date: number;
  sys: string;
}

interface HeroProps {
  weather: Weather;
}

const Hero = ({ weather }: HeroProps) => {
  const open = useBurgerStore((state) => state.open);
  const handleBurgerOpen = () => {
    open();
  };

  const { day, date, month, year } = msToDate(weather.date);
  return (
    <section className={css.heroSection}>
      <div className={`container  + ${css.heroContainer} `}>
        <div className={css.cityNameThumb}>
          <svg width={24} height={24}>
            <use href="/sprite.svg#icon-point"></use>
          </svg>
          <p className={css.cityName}>{weather.city}</p>
          <button type="button" onClick={handleBurgerOpen}>
            <svg width={24} height={24} className={css.burgerButtonArrow}>
              <use href="/sprite.svg#icon-arrow"></use>
            </svg>
          </button>
        </div>
        <div className={css.weatherHeroThumb}>
          <h1 className={css.weatherCloudHero}>{weather.cloudy}</h1>
          <svg width={200} height={160} className={css.weatherIconHero}>
            <use
              href={`/sprite.svg#icon-${weather.cloudy.toLowerCase()}-${weather.sys}`}
            ></use>
          </svg>
          <div className={css.timeThumb}>
            <h2 className={css.weatherTempHero}>{weather.temp.toFixed()}°C</h2>
            <p className={css.dateHero}>
              {`${day} | ${date} ${month} ${year}`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
