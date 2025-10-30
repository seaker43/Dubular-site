export const runtime="nodejs";
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

import RequireAuth from "@/components/RequireAuth";
import DashboardClient from "./page.client";

export default function Page() {
  return (
    <RequireAuth>
      <DashboardClient />
    </RequireAuth>
  );
}
