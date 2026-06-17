"use client";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import css from "./ForecastSvgDraw.module.css";
import { objectHours } from "@/lib/utils/buildHourForecast";
import { WeatherForecastList } from "@/types/weatherForecastResponse";

interface ForecastSvgDrawProps {
  weatherDays: WeatherForecastList[];
}

const ForecastSvgDraw = ({ weatherDays }: ForecastSvgDrawProps) => {
  const brakePoint = useMediaQuery() || null;
  if (!brakePoint) return <div style={{ width: "100%", height: 262 }} />;

  const { svgPoint, points, map, svgWidthValue } = objectHours({
    weatherDays,
    brakePoint,
  });

  return (
    <svg viewBox={`0 0 ${svgWidthValue} 420`} className={css.svgChart}>
      <path
        d={svgPoint}
        stroke="white"
        opacity={0.6}
        strokeWidth={5}
        fill="none"
      />
      <g>
        <circle cx={points[1].x} cy={points[1].y} r={5} fill="white" />
        <line
          x1={points[1].x}
          y1={points[1].y}
          x2={points[1].x}
          y2={points[1].y + 70}
          stroke="white"
          strokeDasharray="10 5"
          strokeWidth={3}
          opacity={0.6}
        />
      </g>
      {points.slice(1, -1).map((point, index) => (
        <g key={index}>
          <text
            x={point.x}
            y={point.y - 20}
            fill="white"
            fontSize={24}
            textAnchor="middle"
          >
            {map[index].temp}°C
          </text>
          {index === 0 ? (
            <g>
              <svg width={50} height={50} x={point.x - 24} y={point.y + 80}>
                <use
                  href={`/sprite.svg#icon-${map[index].sky}-${map[index].dayPhase}`}
                ></use>
              </svg>
              <text
                x={point.x}
                y={point.y + 155}
                fill="white"
                fontSize={24}
                textAnchor="middle"
              >
                {map[index].wind}km/h
              </text>
              <text
                x={point.x}
                y={point.y + 180}
                fill="white"
                fontSize={20}
                textAnchor="middle"
              >
                Now
              </text>
            </g>
          ) : (
            <g>
              <svg width={50} height={50} x={point.x - 24} y={point.y + 20}>
                <use
                  href={`/sprite.svg#icon-${map[index].sky}-${map[index].dayPhase}`}
                ></use>
              </svg>
              <text
                x={point.x}
                y={point.y + 95}
                fill="white"
                fontSize={24}
                textAnchor="middle"
              >
                {map[index].wind}km/h
              </text>
              <text
                x={point.x}
                y={point.y + 120}
                fill="white"
                fontSize={20}
                textAnchor="middle"
              >
                {map[index].hour.slice(0, 5)}
              </text>
            </g>
          )}
        </g>
      ))}
    </svg>
  );
};

export default ForecastSvgDraw;
