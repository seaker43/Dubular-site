"use client";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="flex-1 flex items-center justify-center bg-neutral-950 text-white p-6">
      <SignUp
        appearance={{
          layout: {
            logoPlacement: "none",
            socialButtonsPlacement: "bottom",
            socialButtonsVariant: "blockButton",
          },
          variables: {
            colorBackground: "#0a0a0a",
            colorPrimary: "#22d3ee",
            colorText: "#ffffff",
            colorInputBackground: "#171717",
            colorInputText: "#e5e5e5",
            colorAlphaShade: "#262626",
            borderRadius: "8px",
            boxShadow: "0 0 15px #22d3ee, 0 0 30px #22d3ee",
          },
          elements: {
            card: "w-full max-w-md bg-neutral-950 text-white p-6 rounded-xl shadow-lg border border-neutral-800",
            headerTitle: "hidden",
            headerSubtitle: "hidden",
            formButtonPrimary:
              "w-full rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-3 transition shadow-[0_0_15px_#22d3ee]",
            formFieldInput:
              "w-full bg-neutral-900 border border-neutral-700 text-white placeholder:text-neutral-500 focus:ring-2 focus:ring-cyan-500/60 rounded-lg px-3 py-2",
            footer: "hidden",
            footerActionLink: "text-cyan-300 hover:text-cyan-200",
            dividerText: "text-neutral-400",
          },
        }}
        routing="hash"
        signInUrl="/sign-in"
        afterSignUpUrl="/"
      />
    </main>
  );
}
