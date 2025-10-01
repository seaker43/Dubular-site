import { SignIn } from "@clerk/nextjs";

export const runtime = "edge";

export default function Page() {
  return (
    <main className="min-h-[100dvh] w-full flex items-center justify-center bg-black">
      <SignIn
        signUpUrl="/sign-up"
        appearance={{
          elements: {
            /* make the whole widget fill and center */
            rootBox: "w-full h-full flex items-center justify-center",
            /* stretch to viewport width on mobile, cap on desktop */
            card:
              "w-full h-full max-w-[30rem] sm:max-w-[34rem] md:max-w-[38rem] " +
              "bg-black text-white border-none shadow-none p-6 sm:p-8 mx-auto",
            headerTitle: "text-white text-2xl sm:text-3xl font-bold text-center",
            headerSubtitle: "text-white/70 text-center mb-6",
            formFieldLabel: "text-white/70",
            formFieldInput:
              "w-full rounded-xl bg-zinc-900/80 border border-white/10 text-white " +
              "placeholder:text-white/40 focus:border-white/30",
            formButtonPrimary:
              "w-full rounded-xl bg-dubular-green/90 hover:bg-dubular-green text-black mt-4",
            socialButtonsBlockButton:
              "w-full rounded-xl bg-zinc-900/80 hover:bg-zinc-900 text-white " +
              "border border-white/10 mb-3",
            dividerRow: "text-white/50 my-6",
            footerActionText: "text-white/70 text-center",
            footerActionLink: "text-dubular-green hover:text-[var(--laser-green)]",
          },
          variables: {
            colorPrimary: "var(--laser-green)",
            colorText: "white",
            colorBackground: "black",
            colorInputBackground: "rgb(24 24 27 / 0.8)",
          },
        }}
      />
    </main>
  );
}
