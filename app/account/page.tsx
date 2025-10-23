export const runtime = 'edge';
import Link from "next/link";
export const dynamic="force-dynamic";
export const revalidate=0;
export const fetchCache="force-no-store";

import AccountClient from "./page.client";

export default function AccountPage(){ 
  return <AccountClient/>;
}
