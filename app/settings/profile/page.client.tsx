"use client";
import { useState } from "react";

export default function ProfileClient() {
  const [displayName, setDisplayName] = useState("");
  const [bio, setBio] = useState("");
  const [saving, setSaving] = useState(false);

  async function onSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch("/api/profile", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ displayName, bio }),
      });
      if (!res.ok) throw new Error(await res.text());
      alert("Saved!");
    } catch (err: any) {
      alert(`Save failed: ${err?.message ?? "Unknown error"}`);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-2xl p-6 text-white">
      <h1 className="text-2xl font-semibold mb-4">Edit profile</h1>
      <form onSubmit={onSave} className="space-y-4 rounded-2xl bg-neutral-900/60 p-6 border border-neutral-800 shadow-lg">
        <label className="block text-sm text-neutral-300 mb-1">Display name</label>
        <input
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          placeholder="Display name"
          className="w-full rounded-lg bg-neutral-900/60 border border-neutral-800 px-3 py-2 outline-none"
        />
        <label className="block text-sm text-neutral-300 mb-1 mt-3">Bio</label>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Bio"
          className="w-full rounded-lg bg-neutral-900/60 border border-neutral-800 px-3 py-2 min-h-28 outline-none"
        />
        <button
          type="submit"
          disabled={saving}
          className="mt-2 rounded-lg bg-[var(--laser-green,#00ff00)]/10 px-4 py-2 text-sm text-[var(--laser-green,#00ff00)] border border-[var(--laser-green,#00ff00)]/40 disabled:opacity-60"
        >
          {saving ? "Saving..." : "Save"}
        </button>
      </form>
    </div>
  );
}
