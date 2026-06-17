import { create } from "zustand";

interface BurgerState {
  isOpen: boolean;
}
interface BurgerAction {
  open: () => void;
  close: () => void;
}

export const useBurgerStore = create<BurgerState & BurgerAction>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
