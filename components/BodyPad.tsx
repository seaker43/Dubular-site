import { useEffect, ReactNode } from "react";

export default function BodyPad({ children }: { children: ReactNode }) {
  useEffect(() => {
    document.documentElement.style.setProperty("--bb-h", "72px");
    document.body.classList.add("pb-safe");
    return () => document.body.classList.remove("pb-safe");
  }, []);
  return <>{children}</>;
}
