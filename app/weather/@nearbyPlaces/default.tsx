import PlaceList from "@/components/PlacesList/PlacesList";
import { fetchPhoto } from "@/lib/api/googlePhotoServices";
import { fetchPlace } from "@/lib/api/googlePlaceServices";
import { fetchWeather } from "@/lib/api/weatherServices";
import { measureDistance } from "@/lib/utils/getDistance";
import { cookies } from "next/headers";

const NearbyPlaces = async () => {
  const cookiesStore = await cookies();
  const lat =
    cookiesStore.get("lat")?.value || process.env.NEXT_PUBLIC_INITIAL_LATITUDE;
  const lon =
    cookiesStore.get("lon")?.value || process.env.NEXT_PUBLIC_INITIAL_LONGITUDE;
  const place = await fetchWeather({
    lat: Number(lat),
    lon: Number(lon),
  });
  const nearbyPlacesAll = await fetchPlace({
    lat: place.coord.lat,
    lon: place.coord.lon,
  });

  const nearbyPlacesFiltered = nearbyPlacesAll.filter(
    (place, index, array) =>
      index === array.findIndex((p) => p.name === place.name),
  );

  const nearbyPlacesPhotoFiltered = nearbyPlacesFiltered
    .filter((place) => place.photos && place.photos.length > 1)
    .slice(0, 4);

  const nearbyPlacesPhotos = async (url: string) => {
    const res = await fetchPhoto(url);
    return res;
  };
  const photos = await Promise.all(
    nearbyPlacesPhotoFiltered.map(
      async (place) =>
        await nearbyPlacesPhotos(place.photos?.[0]?.name as string),
    ),
  );

  const places = nearbyPlacesPhotoFiltered.map((place, index) => {
    return {
      displayName: place.displayName,
      name: place.name,
      photos: photos[index],
      googleMapsLinks: place.googleMapsLinks,
      location: measureDistance({
        start: { lon: Number(lon), lat: Number(lat) },
        end: { lon: place.location.longitude, lat: place.location.latitude },
      }),
    };
  });
  return <PlaceList places={places} />;
};

export default NearbyPlaces;
