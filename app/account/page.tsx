export const runtime="edge";
export const dynamic="force-dynamic";
export const revalidate=0;
export const fetchCache="force-no-store";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import AccountClient from "./page.client";
export default async function AccountPage(){
  const { userId } = await auth();
  if(!userId) redirect("/sign-in");
  return <AccountClient/>;
}
