import { SignUp } from "@clerk/nextjs";
export const runtime = "edge";
export default function Page() {
  return (
    <main className="min-h-[100dvh] w-full px-4 py-6 flex items-center justify-center">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl">
        <SignUp signInUrl="/sign-in" appearance={{
          elements:{
            rootBox:"w-full",
            card:"w-full rounded-2xl bg-black/80 text-white border border-white/10 shadow-2xl backdrop-blur",
            headerTitle:"text-white",headerSubtitle:"text-white/70",
            formFieldLabel:"text-white/70",
            formFieldInput:"w-full rounded-xl bg-zinc-900/80 border border-white/10 text-white placeholder:text-white/40 focus:border-white/30",
            formButtonPrimary:"w-full rounded-xl bg-dubular-green/90 hover:bg-dubular-green text-black",
            socialButtonsBlockButton:"w-full rounded-xl bg-zinc-900/80 hover:bg-zinc-900 text-white border border-white/10",
            dividerRow:"text-white/50",footerActionText:"text-white/70",
            footerActionLink:"text-dubular-green hover:text-[var(--laser-green)]"},
          variables:{colorPrimary:"var(--laser-green)",colorText:"white",colorBackground:"transparent",colorInputBackground:"rgb(24 24 27 / 0.8)"}
        }}/>
      </div>
    </main>
  );
}
