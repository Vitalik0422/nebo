import { WeatherForecastList } from "@/types/weatherForecastResponse";

interface TempMap {
  hour: string;
  temp: number;
  wind: number;
  sky: string;
  dayPhase: string;
}

type Device = "desktop" | "tablet" | "phone";
interface ForecastSvgDrawProps {
  weatherDays: WeatherForecastList[];
  brakePoint: Device;
}
export const objectHours = ({
  weatherDays,
  brakePoint,
}: ForecastSvgDrawProps) => {
  const value = brakePoint === "desktop" || brakePoint === "tablet" ? 8 : 4;
  const svgWidthValue =
    brakePoint === "desktop" ? 1700 : brakePoint === "tablet" ? 1300 : 450;

  const map: Array<TempMap> = [];

  for (let index = 0; index < value; index++) {
    const element = weatherDays[index];
    map.push({
      hour: element.dt_txt.split(" ")[1],
      temp: Math.round(element.main.temp),
      wind: element.wind.speed,
      sky: element.weather[0].main.toLowerCase(),
      dayPhase: element.sys.pod,
    });
  }

  const temps = map.map((i) => i.temp);
  const min = Math.min(...temps);
  const max = Math.max(...temps);

  const svgWidth = svgWidthValue;
  const svgHeight = 260;
  const paddingX = 1;
  const paddingY = 70;

  const toX = (index: number) =>
    paddingX + (index / (map.length - 1)) * (svgWidth - paddingX * 2);

  const toY = (temp: number) =>
    svgHeight -
    paddingY -
    ((temp - min) / (max - min || 1)) * (svgHeight - paddingY * 2);

  const points = [
    { x: -100, y: Math.round(toY(map[0].temp)) },
    ...map.map((item, i) => ({
      x: Math.round(toX(i)),
      y: Math.round(toY(item.temp)),
    })),
    { x: svgWidth + 100, y: Math.round(toY(map[map.length - 1].temp)) },
  ];

  const svgPoint = points
    .map((p, i) => {
      if (i === 0) return `M ${p.x} ${p.y}`;
      const prev = points[i - 1];
      const cp1x = Math.round(prev.x + (p.x - prev.x) * 0.5);
      const cp2x = Math.round(p.x - (p.x - prev.x) * 0.5);
      return `C ${cp1x} ${prev.y} ${cp2x} ${p.y} ${p.x} ${p.y}`;
    })
    .join(" ");

  return { svgPoint, points, map, svgWidthValue };
};
