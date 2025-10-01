import { SignIn } from "@clerk/nextjs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign in ’ “Dubular”",
};

export default function Page() {
  return (\n    <main className="flex-1 flex items-stretch p-0 m-0">\n      <SignIn\n        appearance={{\n          layout: {\n            logoPlacement: "none",\n            socialButtonsPlacement: "bottom",\n            socialButtonsVariant: "blockButton",\n          },\n          variables: {\n            colorBackground: "#0a0a0a",\n            colorPrimary: "#22d3ee",\n            colorText: "#ffffff",\n            colorInputBackground: "#171717",\n            colorInputText: "#e5e5e5",\n            colorAlphaShade: "#262626",\n            borderRadius: "0px",\n          },\n          elements: {\n            card: "rounded-none w-full max-w-none bg-neutral-950 text-white flex items-center justify-center",\n            headerTitle: "hidden",\n            headerSubtitle: "hidden",\n            formButtonPrimary:"w-full rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold",\n            formFieldInput:"w-full bg-neutral-900 border border-neutral-700 text-white placeholder:text-neutral-500 focus:ring-2 focus:ring-cyan-500/60",\n            footerActionLink: "text-cyan-300 hover:text-cyan-200",\n            dividerText: "text-neutral-400",\n          },\n        }\n         routing="hash"\n         signUpUrl="/sign-up"\n         afterSignInUrl="/"\n      />\n    </main>\n  );\n}\n