import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export const runtime = "edge";

export default async function AccountPage() {
  const { userId } = auth();

  if (!userId) {
    redirect(`/sign-in?redirect_url=/account`);
  }

  // Signed-in account UI (stub for now)
  return (
    <main className="min-h-[calc(100dvh-var(--header-h)-var(--bottombar-h))] px-4 pb-[var(--bottombar-h)]">
      <div className="max-w-2xl mx-auto py-8">
        <h1 className="text-3xl font-extrabold text-cyan-400 mb-4">Your Account</h1>
        <p className="text-white/70">Welcome back! (Replace this with your real account dashboard.)</p>
      </div>
    </main>
  );
}
