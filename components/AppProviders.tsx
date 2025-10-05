"use client";
import { ClerkProvider } from "@clerk/nextjs";
import type { ReactNode } from "react";

export default function AppProviders({ children }: { children: ReactNode }) {
  return {children};
}
