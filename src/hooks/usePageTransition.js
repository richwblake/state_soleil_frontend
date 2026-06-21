import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function usePageTransition() {
  const location = useLocation();
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (el) {
      el.classList.remove("page-enter");
      // Force reflow
      void el.offsetWidth;
      el.classList.add("page-enter");
    }
  }, [location.pathname]);

  return ref;
}
