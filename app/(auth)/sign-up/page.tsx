import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="flex-1 flex items-stretch p-0 m-0">
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
            borderRadius: "0px",
          },
          elements: {
            card: "rounded-none w-full max-w-none bg-neutral-950 text-white flex items-center justify-center",
            headerTitle: "hidden",
            headerSubtitle: "hidden",
            formButtonPrimary:
              "w-full rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold",
            formFieldInput:
              "w-full bg-neutral-900 border border-neutral-700 text-white placeholder:text-neutral-500 focus:ring-2 focus:ring-cyan-500/60",
            footerActionLink: "text-cyan-300 hover:text-cyan-200",
            dividerText: "text-neutral-400",
          },
        }}
        routing="hash"
        signInUrl="/sign-up"
        afterSignUpUrl="/"
      />
    </main>
  );
}
