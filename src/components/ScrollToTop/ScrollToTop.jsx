import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // Get the current location object from react-router-dom
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });

    // The effect runs every time the 'pathname' (route) changes
  }, [pathname]);

  return null;
};

export default ScrollToTop;
