import WeatherDaySlider from "@/components/WeatherDaysSlider/WeatherDaysSlider";
import WeatherHourForecast from "@/components/WeatherHourForecast/WeatherHourForecast";
import { fetchWeatherForecast } from "@/lib/api/weatherServices";
import { cookies } from "next/headers";

const WeatherForecast = async () => {
  const cookiesStore = await cookies();
  const lat =
    cookiesStore.get("lat")?.value || process.env.NEXT_PUBLIC_INITIAL_LATITUDE;
  const lon =
    cookiesStore.get("lon")?.value || process.env.NEXT_PUBLIC_INITIAL_LONGITUDE;
  const data = await fetchWeatherForecast({
    place: {
      lat: Number(lat),
      lon: Number(lon),
    },
  });

  return (
    <>
      {data && <WeatherDaySlider weatherDays={data.list} />}
      {data && <WeatherHourForecast weatherDays={data.list} />}
    </>
  );
};

export default WeatherForecast;
