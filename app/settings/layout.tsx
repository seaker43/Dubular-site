export const runtime = 'edge';
export const dynamic = 'force-dynamic';

import { ReactNode } from 'react';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function SettingsLayout({ children }: { children: ReactNode }) {
  const user = await currentUser();
  if (!user) redirect('/sign-in');
  return <>{children}</>;
}
