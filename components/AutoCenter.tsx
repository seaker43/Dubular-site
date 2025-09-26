"use client";
import { useEffect, useState } from "react";
export default function AutoCenter({ children }: { children: React.ReactNode }) {
  const [center, setCenter] = useState(false);
  useEffect(() => {
    const getH = () => (window.visualViewport?.height ?? window.innerHeight);
    const update = () => {
      const css = getComputedStyle(document.documentElement);
      const h = parseInt(css.getPropertyValue("--header-h")) || 100;
      const b = parseInt(css.getPropertyValue("--bottombar-h")) || 64;
      const vvh = getH();
      document.documentElement.style.setProperty("--vvh", `${vvh}px`);
      const avail = vvh - h - b;
      const content = document.documentElement.scrollHeight;
      setCenter(content <= avail);
    };
    update();
    window.addEventListener("resize", update);
    window.visualViewport?.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);
    return () => {
      window.removeEventListener("resize", update);
      window.visualViewport?.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);
  return (
    <div className={`min-h-[calc(var(--vvh)-var(--header-h)-var(--bottombar-h,64px))] ${center ? "grid place-items-center" : "block"}`}>
      {children}
    </div>
  );
}
