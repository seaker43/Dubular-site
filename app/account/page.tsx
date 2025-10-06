export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";
import AccountClient from "./page.client";

export default function AccountPage() {
  return (
    <>
      <SignedIn>
        <AccountClient />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn redirectUrl="/sign-in" afterSignInUrl="/account" />
      </SignedOut>
    </>
  );
}
