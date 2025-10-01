import { auth, currentUser } from "@clerk/nextjs/server";
import { UserProfile, SignOutButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export default async function AccountPage() {
  const { userId } = auth();
  if (!userId) redirect("/sign-in?redirect_url=/account");

  const user = await currentUser();
  const email = user?.primaryEmailAddress?.emailAddress ?? "—";
  const username = user?.username ?? user?.firstName ?? "You";
  const avatar = user?.imageUrl;

  return (
    <main className="min-h-[calc(100dvh-var(--header-h)-var(--bottombar-h))] px-4 pb-[var(--bottombar-h)]">
      <div className="mx-auto max-w-6xl pt-6 md:pt-10">
        <div className="mb-6 flex items-center gap-4">
          <div className="h-14 w-14 overflow-hidden rounded-full ring-1 ring-white/10">
            <img src={avatar ?? "/logo.png"} alt="Avatar" className="h-full w-full object-cover" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight text-white">{username}'s Account</h1>
            <p className="text-white/70 text-sm">{email}</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <section className="rounded-2xl bg-zinc-900/70 p-4 ring-1 ring-white/10 backdrop-blur">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/70">Quick actions</h2>
            <div className="grid gap-3">
              <a href="/favorites" className="w-full rounded-xl border border-white/10 bg-zinc-900/60 px-4 py-2 text-left text-white/90 hover:bg-zinc-900">❤️ View favorites</a>
              <a href="/rank" className="w-full rounded-xl border border-white/10 bg-zinc-900/60 px-4 py-2 text-left text-white/90 hover:bg-zinc-900">🏆 Leaderboards</a>
              <a href="/settings" className="w-full rounded-xl border border-white/10 bg-zinc-900/60 px-4 py-2 text-left text-white/90 hover:bg-zinc-900">⚙️ App settings</a>
              <div className="pt-2">
                <SignOutButton redirectUrl="/sign-in">
                  <button className="w-full rounded-xl bg-[var(--laser-green)] px-4 py-2 font-semibold text-black hover:opacity-90">Sign out</button>
                </SignOutButton>
              </div>
            </div>
          </section>

          <section className="md:col-span-2 rounded-2xl bg-zinc-900/70 p-2 ring-1 ring-white/10 backdrop-blur">
            <UserProfile
              appearance={{
                baseTheme: "dark",
                variables: { colorPrimary: "#22f37a" },
                elements: {
                  card: "rounded-2xl bg-black/70 text-white drop-blur border border-white/10 shadow-xl",
                  headerTitle: "text-white",
                  headerSubtitle: "text-white/70",
                  formFieldLabel: "text-white/70",
                  formFieldInput: "bg-zinc-900/80 border border-white/10 text-white placeholder:text-white/40 focus:border-white/30",
                  formButtonPrimary: "rounded-xl bg-[var(--laser-green,#22f37a)] text-black hover:opacity-90",
                  socialButtonsBlockButton: "rounded-xl bg-zinc-900/80 hover:bg-zinc-900 text-white border border-white/10",
                  dividerRow: "text-white/50 my-6",
                  footerActionText: "text-white/70 text-center",
                  footerActionLink: "text-[var(--laser-green)] hover:text-[var(--laser-green)]",
                },
              }}
            />
          </section>
        </div>
      </div>
    </main>
  );
}
