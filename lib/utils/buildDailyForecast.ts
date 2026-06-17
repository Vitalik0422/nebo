import { WeatherForecastList } from "@/types/weatherForecastResponse";
import { DayDetails, DailyForecastDay } from "@/types/weather";
import { msToDate } from "./dateParse";

interface WeatherForecastListProps {
  weatherList: WeatherForecastList[];
}

interface DailyForecastAccumulator {
  day: string;
  sky: string[];
  details: DayDetails;
  time: string;
}

const getMostFrequentSky = (sky: string[]) => {
  const counts: Record<string, number> = {};

  sky.forEach((item) => {
    counts[item] = (counts[item] || 0) + 1;
  });

  return Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
};

export const buildDailyForecast = ({
  weatherList,
}: WeatherForecastListProps): DailyForecastDay[] => {
  const dailyMap: DailyForecastAccumulator[] = [];

  weatherList.forEach((item, index) => {
    const { day } = msToDate(item.dt);
    const existingDay = dailyMap.find((a) => a.day === day);

    if (!existingDay) {
      dailyMap.push({
        day,
        sky: [item.weather[0].main],
        time: item.dt_txt,
        details: {
          pop: item.pop,
          feel_temp: item.main.feels_like,
          pressure: item.main.pressure,
          humidity: item.main.humidity,
        },
      });
    } else {
      if (
        item.dt_txt.split(" ")[1] === "12:00:00" ||
        weatherList.length - 1 === index
      ) {
        const { feels_like, humidity, pressure } = item.main;
        const { dt_txt, pop } = item;
        existingDay.time = dt_txt;
        Object.assign(existingDay.details, {
          feel_temp: feels_like,
          humidity,
          pressure,
          pop,
        });
      }

      existingDay.sky.push(item.weather[0].main);
    }
  });

  return dailyMap.map((item) => ({
    day: item.day,
    sky: getMostFrequentSky(item.sky),
    time: item.time,
    details: item.details,
  }));
};
