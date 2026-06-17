import axios from "axios";

export const mapTilerInstance = axios.create({
  baseURL: "https://api.maptiler.com/maps/",
  params: {
    key: process.env.NEXT_PUBLIC_MAPTILER_API,
  },
});

export const weatherInstance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  params: {
    appid: process.env.NEXT_PUBLIC_WEATHER_API,
    units: "metric",
  },
});

export const googlePlace = axios.create({
  baseURL: "https://places.googleapis.com/v1/",
  headers: {
    "Content-Type": "application/json",
    "X-Goog-Api-Key": process.env.NEXT_PUBLIC_GOOGLE_PLACE_API,
    "X-Goog-FieldMask":
      "places.displayName,places.photos,places.name,places.googleMapsLinks,places.location",
  },
});

export const googlePhoto = axios.create({
  baseURL: process.env.NEXT_PUBLIC_NEXT_SERVER
    ? process.env.NEXT_PUBLIC_NEXT_SERVER + "/api"
    : "http://localhost:3000/api",
});
