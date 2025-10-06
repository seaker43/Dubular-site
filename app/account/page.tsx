export const runtime="edge";
export const dynamic="force-dynamic";
export const revalidate=0;
export const fetchCache="force-no-store";

import { auth } from "@clerk/nextjs/server";
import AccountClient from "./page.client";

export default async function AccountPage(){
  const { userId } = auth();
  if (!userId) return null; // prevent server crash on unauthenticated
  return <AccountClient />;
}
