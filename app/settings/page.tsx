export const runtime = 'edge';
export const dynamic = 'force-dynamic';

import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import SettingsClient from './page.client';

export default async function Page() {
  const user = await currentUser();
  if (!user) redirect('/sign-in');
  return <SettingsClient />;
}
