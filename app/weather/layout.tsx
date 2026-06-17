import css from "./Weather.module.css";
import React from "react";

interface Layout {
  children: React.ReactNode;
  weatherForecast: React.ReactNode;
  nearbyPlaces: React.ReactNode;
}

const layout = async ({ children, weatherForecast, nearbyPlaces }: Layout) => {
  return (
    <>
      {children}
      <div className={css.contentGrid}>
        {nearbyPlaces}
        {weatherForecast}
      </div>
    </>
  );
};

export default layout;
