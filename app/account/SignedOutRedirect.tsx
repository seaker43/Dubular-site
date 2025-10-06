"use client";
import { useEffect } from "react";
export default function SignedOutRedirect(){
  useEffect(()=>{ window.location.replace("/sign-in"); },[]);
  return null;
}
