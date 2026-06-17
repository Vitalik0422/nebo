export interface NearbyPlacesName {
  text: string;
}

export interface NearbyPlacesPhoto {
  googleMapsUri: string;
  name: string;
}

export interface NearbyPlacesPhotoRequest {
  name: string;
  photoUri: string;
}

export interface MapsLink {
  placeUri: string;
}

interface Location {
  latitude: number;
  longitude: number;
}

export interface NearbyPlace {
  name: string;
  displayName: NearbyPlacesName;
  photos?: NearbyPlacesPhoto[] | null;
  googleMapsLinks: MapsLink;
  location: Location;
}

export interface NearbyPlacesResponse {
  places: NearbyPlace[];
}
