import { useEffect } from "react";

export default function BodyPad({ children }) {
  useEffect(() => {
    document.body.classList.add("has-bottom-bar");
    return () => document.body.classList.remove("has-bottom-bar");
  }, []);

  return <div className="pb-20">{children}</div>; // pb-20 ensures bottom padding
}
