"use client";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function ProfileSettingsPage() {
  const { user, isLoaded } = useUser();
  const [displayName, setDisplayName] = useState("");
  const [bio, setBio] = useState("");
  const [status, setStatus] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (!isLoaded) return;
    if (!user) {
      router.push("/sign-in?redirect_url=/settings/profile");
      return;
    }
    fetch("/api/profile")
      .then((r) => r.json())
      .then((data) => {
        if (data.display_name) setDisplayName(data.display_name);
        if (data.bio) setBio(data.bio);
      })
      .catch(() => {});
  }, [isLoaded, user]);

  async function handleSave(e) {
    e.preventDefault();
    setStatus("Saving...");
    const res = await fetch("/api/profile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ displayName, bio }),
    });
    setStatus(res.ok ? "Saved!" : "Error saving");
    if (res.ok) setTimeout(() => setStatus(""), 2000);
  }

  if (!isLoaded || !user) return <div className="text-center mt-20 text-neutral-400">Loading...</div>;

  return (
    <div className="mx-auto max-w-2xl px-4 pb-24 pt-6 text-white">
      <h1 className="text-2xl font-semibold mb-6">Profile Settings</h1>
      <form onSubmit={handleSave} className="space-y-6 rounded-2xl bg-neutral-900/60 p-6 border border-neutral-800 shadow-lg">
        <div>
          <label className="block text-sm mb-1 text-neutral-400">Display Name</label>
          <input
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="w-full rounded-lg bg-neutral-950 border border-neutral-800 px-3 py-2 text-white"
          />
        </div>
        <div>
          <label className="block text-sm mb-1 text-neutral-400">Bio</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            rows={3}
            className="w-full rounded-lg bg-neutral-950 border border-neutral-800 px-3 py-2 text-white resize-none"
          />
        </div>
        <button
          type="submit"
          className="rounded-lg px-4 py-2 text-sm bg-[var(--laser-green,#00ff00)]/10 border border-[var(--laser-green,#00ff00)] text-[var(--laser-green,#00ff00)]"
        >
          Save
        </button>
        {status && <p className="text-sm text-neutral-400 mt-2">{status}</p>}
      </form>
    </div>
  );
}
