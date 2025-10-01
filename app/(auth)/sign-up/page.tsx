"use client";
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <main className="min-h-[calc(100dvh-var(--header-h)-var(--bottombar-h))] grid place-items-center px-4 pb-[var(--bottombar-h)]">
      <div className="w-full max-w-md">
        <SignUp
          routing="path"
          path="/sign-up"
          signInUrl="/sign-in"
          afterSignUpUrl="/"
          appearance={{
            elements: {
              rootBox: "w-full",
              card: "rounded-2xl bg-black/70 text-white backdrop-blur border border-white/10 shadow-xl",
              headerTitle: "text-white",
              headerSubtitle: "text-white/70",
              formFieldLabel: "text-white/70",
              formFieldInput: "bg-zinc-900/80 border border-white/10 text-white placeholder:text-white/40 focus:border-white/30",
              formButtonPrimary: "rounded-xl bg-dubular-green/90 hover:bg-dubular-green text-black",
              socialButtonsBlockButton: "rounded-xl bg-zinc-900/80 hover:bg-zinc-900 text-white border border-white/10",
              dividerRow: "text-white/50",
              footerActionText: "text-white/70",
              footerActionLink: "text-dubular-green hover:text-[var(--laser-green)]",
            },
            variables: {
              colorPrimary: "var(--laser-green)",
              colorText: "white",
              colorBackground: "transparent",
              colorInputBackground: "rgb(24 24 27 / 0.8)",
            },
          }}
        />
      </div>
    </main>
  );
}
