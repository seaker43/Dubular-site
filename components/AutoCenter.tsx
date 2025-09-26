"use client";
import {useEffect,useState} from "react";
export default function AutoCenter({children}:{children:React.ReactNode}) {
  const [center,setCenter]=useState(false);
  useEffect(()=>{ const run=()=>{ 
    const css=getComputedStyle(document.documentElement);
    const h=parseInt(css.getPropertyValue("--header-h"))||100;
    const b=parseInt(css.getPropertyValue("--bottombar-h"))||64;
    const avail=window.innerHeight - h - b;
    const content=document.documentElement.scrollHeight;
    setCenter(content<=avail);
  }; run(); window.addEventListener("resize",run); return ()=>window.removeEventListener("resize",run); },[]);
  return <div className={`min-h-[calc(100vh-var(--header-h)-var(--bottombar-h,64px))] ${center?"grid place-items-center":"block"}`}>{children}</div>;
}
