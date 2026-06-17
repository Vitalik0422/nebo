import { create } from "zustand";

interface LocationCoords {
  lon: number;
  lat: number;
}
interface useLocationStoreState {
  location: LocationCoords | null;
}

interface useLocationStoreAction {
  setLocation: (location: useLocationStoreState) => void;
}

export const useLocationStore = create<
  useLocationStoreState & useLocationStoreAction
>((set) => ({
  location: null,
  setLocation: (location) => set(location),
}));
