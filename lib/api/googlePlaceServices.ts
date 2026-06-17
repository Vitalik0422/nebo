import { googlePlace } from ".";
import axios from "axios";
import { NearbyPlace, NearbyPlacesResponse } from "@/types/nearbyPlaces";
import { Coordinates } from "@/types/weather";

export const fetchPlace = async ({
  lat,
  lon,
}: Coordinates): Promise<NearbyPlace[]> => {
  const body = {
    includedTypes: [
      "park",
      "zoo",
      "aquarium",
      "amusement_park",
      "water_park",
      "botanical_garden",
      "campground",
      "hiking_area",
      "national_park",
      "tourist_attraction",
      "stadium",
      "sports_complex",
    ],
    maxResultCount: 20,
    locationRestriction: {
      circle: {
        center: {
          latitude: lat,
          longitude: lon,
        },
        radius: 10000,
      },
    },
  };

  try {
    const response = await googlePlace.post<NearbyPlacesResponse>(
      "places:searchNearby",
      body,
    );

    return response.data.places ?? [];
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Google Places request failed", {
        message: error.message,
        status: error.response?.status,
        responseData: error.response?.data,
        requestBody: body,
        axiosRequestData: error.config?.data,
      });
    } else {
      console.error("Unexpected Google Places error", error);
    }

    throw error;
  }
};
