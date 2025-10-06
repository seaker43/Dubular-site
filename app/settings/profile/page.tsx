export const runtime = "edge";
export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";
import ProfileClient from "./page.client";

export default function Page() {
  return (
    <>
      <SignedIn>
        <ProfileClient />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn redirectUrl="/sign-in" afterSignInUrl="/settings/profile" />
      </SignedOut>
    </>
  );
}
