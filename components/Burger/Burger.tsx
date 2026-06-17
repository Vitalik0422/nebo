"use client";
import { useQuery } from "@tanstack/react-query";
import css from "./Burger.module.css";
import clsx from "clsx";
import { fetchWeather } from "@/lib/api/weatherServices";
import { useEffect, useState } from "react";
import { useBurgerStore } from "@/lib/store/burgerStore";
import { useRouter } from "next/navigation";

const Burger = () => {
  const isOpen = useBurgerStore((state) => state.isOpen);
  const close = useBurgerStore((state) => state.close);
  const router = useRouter();

  const [city, setCity] = useState<string>("");
  const { data } = useQuery({
    queryKey: ["weather", city],
    queryFn: () => fetchWeather({ city: city }),
    enabled: !!city,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: false,
  });

  const handleCloseBurger = () => {
    close();
  };

  useEffect(() => {
    if (!data) return;
    document.cookie = `lat=${data.coord.lat}`;
    document.cookie = `lon=${data.coord.lon}`;
    router.refresh();
  }, [data]);

  const handleSubmitCity = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const city = formData.get("city") as string;
    setCity(city);
    e.currentTarget.reset();
    close();
  };
  return (
    <div className={clsx(css.modal, { [css.isActive]: isOpen })}>
      <form
        action=""
        className={css.searchBurgerForm}
        onSubmit={handleSubmitCity}
      >
        <input
          type="text"
          className={css.searchInput}
          placeholder="Enter your city..."
          name="city"
        />
        <div className={css.buttonGroup}>
          <button type="submit" className={css.searchButton}>
            Search
          </button>
          <button
            type="button"
            className={css.closeFormButton}
            onClick={handleCloseBurger}
          >
            Close
          </button>
        </div>
      </form>

      <button
        type="button"
        className={css.closeButtonBurger}
        onClick={handleCloseBurger}
      >
        <svg width={24} height={24} className={css.closeButtonBurgerIcon}>
          <use href="/sprite.svg#icon-arrow"></use>
        </svg>
      </button>
    </div>
  );
};

export default Burger;
