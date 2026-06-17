import clsx from "clsx";
import PlaceItem from "../PlaceItem/PlaceItem";
import css from "./PlacesList.module.css";
import { NearbyPlace, NearbyPlacesPhotoRequest } from "@/types/nearbyPlaces";
import Link from "next/link";

interface Place extends Omit<NearbyPlace, "photos" | "location"> {
  photos: NearbyPlacesPhotoRequest;
  location: number;
}

interface Props {
  places: Place[];
}

const PlaceList = ({ places }: Props) => {
  return (
    <>
      {places && (
        <section className={css.nearbyPlaces}>
          <div className={clsx("container", css.placesContainer)}>
            <div className={css.placesListWrapper}>
              <p>Nearby Places</p>
              <ul className={css.placeList}>
                {places.map(
                  (place) =>
                    place.photos && (
                      <li key={place.name} className={css.placeItem}>
                        <Link
                          href={place.googleMapsLinks.placeUri}
                          target="_blank"
                          aria-label={place.name}
                        >
                          <p className={css.namePlaceTitle}>
                            {place.displayName.text}
                          </p>
                          <PlaceItem
                            name={place.displayName.text}
                            photo={place.photos}
                          />
                          <p className={css.distanceText}>
                            Distance: {place.location} meters
                          </p>
                        </Link>
                      </li>
                    ),
                )}
              </ul>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default PlaceList;
