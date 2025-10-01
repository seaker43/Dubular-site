"use client";
import { UserProfile } from "@clerk/nextjs";

export default function AccountClerkPanel() {
  return (
    <UserProfile
      appearance={{
        baseTheme: "dark",
        variables: { colorPrimary: "#22f37a" },
        elements: {
          card: "rounded-2xl bg-black/70 text-white backdrop-blur border border-white/10 shadow-xl",
          headerTitle: "text-white",
          headerSubtitle: "text-white/70",
          formFieldLabel: "text-white/70",
          formFieldInput:
            "bg-zinc-900/80 border border-white/10 text-white placeholder:text-white/40 focus:border-white/30",
          formButtonPrimary:
            "rounded-xl bg-[var(--laser-green,#22f37a)] text-black hover:opacity-90",
          socialButtonsBlockButton:
            "rounded-xl bg-zinc-900/80 hover:bg-zinc-900 text-white border border-white/10",
          dividerRow: "text-white/50 my-6",
          footerActionText: "text-white/70 text-center",
          footerActionLink:
            "text-[var(--laser-green)] hover:text-[var(--laser-green)]",
        },
      }}
    />
  );
}
