import { getDistance } from "geolib";

interface MeasureDistance {
  start: {
    lon: number;
    lat: number;
  };
  end: {
    lon: number;
    lat: number;
  };
}

export const measureDistance = ({ start, end }: MeasureDistance): number => {
  const res = getDistance(start, end);
  return res;
};
