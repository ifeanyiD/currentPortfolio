import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function PageTransition() {
  const location = useLocation();
  const overlayRef = useRef(null);
  const isFirstLoad = useRef(true);

  useEffect(() => {
    const el = overlayRef.current;
    if (!el) return;
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      el.classList.remove("active");
      return;
    }
    

    el.classList.remove("active");
    void el.offsetWidth;
    el.classList.add("active");
  }, [location.pathname]);

  return <div ref={overlayRef} className="page-overlay" />;
}
