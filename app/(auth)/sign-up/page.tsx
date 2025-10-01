"use client";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-neutral-950 text-white p-4">
      <SignUp
        appearance={{
          layout: {
            logoPlacement: "none",
            socialButtonsPlacement: "top",
            socialButtonsVariant: "blockButton",
          },
          variables: {
            colorBackground: "#0a0a0a",
            colorPrimary: "var(--laser-green)",
            colorText: "#ffffff",
            colorInputBackground: "#171717",
            colorInputText: "#e5e5e5",
            colorAlphaShade: "#262626",
            borderRadius: "8px",
          },
          elements: {
            card: "w-full max-w-md bg-neutral-950 text-white rounded-xl shadow-lg border border-neutral-800",
            headerTitle: "hidden",
            headerSubtitle: "hidden",
            formButtonPrimary:
              "w-full rounded-lg bg-[var(--laser-green)] hover:opacity-90 text-black font-semibold py-3 shadow-[0_0_20px_var(--laser-green)] transition",
            formFieldInput:
              "w-full bg-neutral-900 border border-neutral-700 text-white placeholder:text-neutral-500 focus:ring-2 focus:ring-[var(--laser-green)] rounded-lg py-2 px-3",
            footer: "hidden",
            dividerText: "text-neutral-400",
          },
        }}
        routing="hash"
        signInUrl="/sign-in"
        afterSignUpUrl="/"
      />
      <p className="mt-4 text-sm text-neutral-400">
        Already have an account?{" "}
        <a
          href="/sign-in"
          className="text-[var(--laser-green)] hover:opacity-80 font-medium"
        >
          Sign in
        </a>
      </p>
    </main>
  );
}
