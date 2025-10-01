import { SignIn } from "@clerk/nextjs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign in • Dubular",
};

export default function Page() {
  return (
    <div className="flex flex-col items-center gap-6 p-6">
      <header className="w-full border-b border-neutral-800/60 p-6">
        <div className="mx-auto flex max-w-[44rem] items-center justify-center">
          <span className="text-2xl font-semibold tracking-tight text-cyan-300">dub</span>
          <span className="text-2xl font-semibold tracking-tight text-white">U</span>
          <span className="text-2xl font-semibold tracking-tight text-cyan-300">lar</span>
        </div>
      </header>

      <div className="mx-auto w-full max-w-[28rem] p-6">
        <SignIn
          appearance={{
            layout: {
              socialButtonsVariant: "blockButton",
              socialButtonsPlacement: "bottom",
              logoPlacement: "none",
            },
            variables: {
              colorBackground: "#0a0a0a",
              colorPrimary: "#22d3ee",
              colorText: "#ffffff",
              colorInputBackground: "#171717",
              colorInputText: "#e5e5e5",
              colorAlphaShade: "#262626",
              colorDanger: "#ef4444",
              colorSuccess: "#22c55e",
              borderRadius: "1rem",
            },
            elements: {
              card: "bg-neutral-900/60 border border-neutral-800/60 shadow-xl backdrop-blur-md",
              headerTitle: "text-white",
              headerSubtitle: "text-neutral-400",
              formButtonPrimary: "bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-xl",
              formFieldInput:
                "bg-neutral-800/80 text-white placeholder:text-neutral-500 border-neutral-700 focus:ring-2 focus:ring-cyan-500/60",
              footerActionLink: "text-cyan-300 hover:text-cyan-200",
              identityPreviewText: "text-neutral-300",
              dividerText: "text-neutral-400",
            },
          }}
          routing="hash"
          signUpUrl="/sign-up"
          afterSignInUrl="/"
        />
      </div>
    </div>
  );
}
