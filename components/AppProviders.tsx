import type { ReactNode } from "react";

/**
 * AppProviders
 * Keep non-Clerk providers here (Theme, QueryClient, etc).
 * ClerkProvider is defined once in app/layout.tsx.
 */
export default function AppProviders({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
