"use client";
import { useWeatherStore } from "@/lib/store/weatherStore";
import css from "./SearchBar.module.css";
import { ChangeEvent, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

const SearchBar = () => {
  const setPlace = useWeatherStore((state) => state.setPlace);
  const [city, setCity] = useState<string>("");
  const [query] = useDebounce(city, 1000);
  const handleSearchCity = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  useEffect(() => {
    if (!query) return;
    setPlace({ city: query });
  }, [query, setPlace]);

  return (
    <main>
      <div className={`container ` + css.searchBarContainer}>
        <input
          className={css.citySearchInput}
          type="text"
          name="city"
          value={city}
          onChange={handleSearchCity}
        />
      </div>
    </main>
  );
};

export default SearchBar;
