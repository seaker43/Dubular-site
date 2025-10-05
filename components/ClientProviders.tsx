'use client';

import * as React from 'react';
import { ClerkProvider } from '@clerk/nextjs';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      frontendApi={process.env.NEXT_PUBLIC_CLERK_FRONTEND_API}
    >
      {children}
    </ClerkProvider>
  );
}
