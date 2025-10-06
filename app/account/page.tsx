export const runtime="edge";
export const dynamic="force-dynamic";
export const revalidate=0;
export const fetchCache="force-no-store";

import { SignedIn, SignedOut } from "@clerk/nextjs";
import AccountClient from "./page.client";
import SignedOutRedirect from "./SignedOutRedirect";

export default function AccountPage(){
  return (<>\n    <SignedIn><AccountClient/></SignedIn>\n    <SignedOut><SignedOutRedirect/></SignedOut>\n  </>);
}
