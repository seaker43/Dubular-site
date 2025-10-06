export const runtime = 'edge';
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

import RequireAuth from "@/components/RequireAuth";
import NotificationsClient from "./page.client";

export default function Page() {
  return (
    <RequireAuth>
      <NotificationsClient />
    </RequireAuth>
  );
}
