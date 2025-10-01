"use client";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="min-h-[calc(100svh-128px)] flex items-center justify-center bg-neutral-950">
      <SignIn
        appearance={{
          layout: {
            logoPlacement: "none",
            socialButtonsPlacement: "top",
            socialButtonsVariant: "blockButton",
          },
          variables: {
            colorPrimary: "#00ff00",
            colorText: "#ffffff",
            colorBackground: "#0a0a0a",
          },
          elements: {
            card: "w-full h-full rounded-none bg-neutral-900 text-white border border-neutral-800 shadow-[0_0_30px_#00ff00]",
            formButtonPrimary:
              "w-full bg-[var(--laser-green,#00ff00)] text-black font-semibold py-3 rounded-lg hover:opacity-90 transition",
            formFieldInput:
              "w-full bg-neutral-800 border border-neutral-700 text-white placeholder:text-neutral-500 focus:ring-[var(--laser-green,#00ff00)] focus:border-[var(--laser-green,#00ff00)] rounded-lg px-3 py-2",
            footerActionLink:
              "text-[var(--laser-green,#00ff00)] hover:underline",
          },
        }}
        routing="hash"
        signUpUrl="/sign-up"
        afterSignInUrl="/"
      />
    </main>
  );
}
