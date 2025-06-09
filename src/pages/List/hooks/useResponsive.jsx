import { useEffect, useState } from "react";
import { BREAKPOINTS } from "../../../constants/constants";

const getBreakpoint = () => {
  const width = window.innerWidth;
  if (width >= BREAKPOINTS.lg) return "desktop";
  if (width >= BREAKPOINTS.md) return "tablet";
  return "mobile";
};

const useResponsive = () => {
  const [breakpoint, setBreakpoint] = useState(getBreakpoint());

  useEffect(() => {
    const handleResize = () => {
      setBreakpoint(getBreakpoint());
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return breakpoint;
};

export default useResponsive;
