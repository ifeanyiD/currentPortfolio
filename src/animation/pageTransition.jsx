import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function PageTransition() {
  const location = useLocation();
  const overlayRef = useRef(null);
  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }
    const el = overlayRef.current;
    if (!el) return;

    el.classList.remove("active");
    void el.offsetWidth;
    el.classList.add("active");
  }, [location.pathname]);

  return <div ref={overlayRef} className="page-overlay" />;
}
