"use client";
export const runtime = "edge";
import { AuthenticateWithRedirectCallback } from "@clerk/nextjs";
export default function SSO() {
  return <AuthenticateWithRedirectCallback redirectUrlComplete="/" />;
}
