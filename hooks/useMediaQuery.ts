"use client";
import { useEffect, useState } from "react";
type Device = "desktop" | "tablet" | "phone" | null;

const getBreakpoint = (): Device => {
  if (window.matchMedia("(min-width: 1440px)").matches) return "desktop";
  if (window.matchMedia("(min-width: 768px)").matches) return "tablet";
  return "phone";
};
export const useMediaQuery = () => {
  const [brakePoint, setBreakpoint] = useState<Device>(null);

  useEffect(() => {
    const tablet = window.matchMedia("(min-width: 768px)");
    const desktop = window.matchMedia("(min-width: 1440px)");

    const update = () => setBreakpoint(getBreakpoint());
    update();

    tablet.addEventListener("change", update);
    desktop.addEventListener("change", update);

    return () => {
      tablet.removeEventListener("change", update);
      desktop.removeEventListener("change", update);
    };
  }, []);
  return brakePoint;
};
