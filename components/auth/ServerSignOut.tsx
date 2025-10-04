"use server";
import { redirect } from "next/navigation";
export default async function ServerSignOut(){
  redirect("https://accounts.clerk.dev/sign-out?redirect_url=/");
}
