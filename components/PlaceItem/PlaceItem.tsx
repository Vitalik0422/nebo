import css from "./PlaceItem.module.css";
import { NearbyPlacesPhotoRequest } from "@/types/nearbyPlaces";
import Image from "next/image";
interface PlaceItemProps {
  name: string;
  photo: NearbyPlacesPhotoRequest;
}

const PlaceItem = ({ photo }: PlaceItemProps) => {
  return (
    <>
      {photo && (
        <Image
          className={css.placeImage}
          src={photo.photoUri}
          alt="Place photo"
          width={180}
          height={108}
          loading="eager"
        />
      )}
    </>
  );
};

export default PlaceItem;
