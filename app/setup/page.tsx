"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SetupPage() {
  const router = useRouter();
  const [handle, setHandle] = useState("");
  const [display, setDisplay] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setPending(true);
    try {
      const res = await fetch("/api/profiles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          handle: handle.trim(),
          display_name: display.trim(),
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || `Request failed (${res.status})`);
      }
      router.replace("/"); // ✅ redirect after success (change if you prefer)
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setPending(false);
    }
  }

  return (
    <main className="min-h-[calc(100dvh-var(--header-h)-var(--bottombar-h))] w-full grid place-items-center px-4 pb-[var(--bottombar-h)]">
      <div className="w-full max-w-md">
        <div className="rounded-2xl border border-white/10 bg-black/40 p-6 shadow-[0_0_0_2px_rgba(255,255,255,0.06),_0_10px_40px_rgba(0,0,0,0.6)] backdrop-blur">
          <h1 className="text-2xl font-extrabold tracking-wide text-white mb-1 text-center">
            Set up your Dubular profile
          </h1>
          <p className="text-white/60 text-sm text-center mb-6">
            Pick a public handle and a display name.
          </p>

          <form className="space-y-4" onSubmit={onSubmit}>
            <label className="block">
              <span className="block text-sm text-white/70 mb-1">Handle</span>
              <div className="flex items-center gap-2">
                <span className="text-white/50">@</span>
                <input
                  value={handle}
                  onChange={(e) =>
                    setHandle(
                      e.target.value.replace(/[^a-z0-9_]/gi, "").toLowerCase(),
                    )
                  }
                  minLength={3}
                  maxLength={20}
                  required
                  placeholder="yourname"
                  className="w-full rounded-xl bg-zinc-900/70 border border-white/10 px-3 py-2 text-white outline-none focus:border-white/30"
                />
              </div>
              <p className="text-[11px] text-white/40 mt-1">
                a–z, 0–9, underscores; 3–20 chars
              </p>
            </label>

            <label className="block">
              <span className="block text-sm text-white/70 mb-1">
                Display name
              </span>
              <input
                value={display}
                onChange={(e) => setDisplay(e.target.value)}
                minLength={1}
                maxLength={40}
                required
                placeholder="Streamer Name"
                className="w-full rounded-xl bg-zinc-900/70 border border-white/10 px-3 py-2 text-white outline-none focus:border-white/30"
              />
            </label>

            {error && <p className="text-sm text-red-500">{error}</p>}

            <button
              type="submit"
              disabled={pending}
              aria-busy={pending}
              className="w-full rounded-xl bg-dubular-green/90 hover:bg-dubular-green text-black font-semibold py-2 transition disabled:opacity-60"
            >
              {pending ? "Saving…" : "Save & Continue"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
