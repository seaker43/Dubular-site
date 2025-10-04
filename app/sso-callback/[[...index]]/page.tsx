"use client"
import { AuthenticateWithRedirectCallback } from "@clerk/nextjs";
export const runtime = "edge";
export default function Page(){
  return <AuthenticateWithRedirectCallback />;
}
