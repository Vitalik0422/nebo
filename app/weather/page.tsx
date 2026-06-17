import { fetchWeather } from "@/lib/api/weatherServices";
import Hero from "@/components/Hero/Hero";
import { cookies } from "next/headers";

const Weather = async () => {
  const cookiesStore = await cookies();
  const lat =
    cookiesStore.get("lat")?.value || process.env.NEXT_PUBLIC_INITIAL_LATITUDE;
  const lon =
    cookiesStore.get("lon")?.value || process.env.NEXT_PUBLIC_INITIAL_LONGITUDE;
  const weather = await fetchWeather({
    lat: Number(lat),
    lon: Number(lon),
  });
  return (
    <>
      {weather?.main.temp && (
        <Hero
          weather={{
            city: weather.name,
            temp: weather.main.temp,
            cloudy: weather.weather[0].main,
            date: weather.dt,
            sys: weather.weather[0].icon.slice(2),
          }}
        />
      )}
    </>
  );
};

export default Weather;
