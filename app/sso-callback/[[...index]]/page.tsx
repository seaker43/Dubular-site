"use client";
import { AuthenticateWithRedirectCallback } from "@clerk/nextjs";
export default function SSO() {
  return <AuthenticateWithRedirectCallback redirectUrlComplete="/" />;
}
