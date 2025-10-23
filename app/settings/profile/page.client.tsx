"use client";

import { useState } from "react";

export default function ProfileEditor() {
  const [handle, setHandle] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [bio, setBio] = useState("");
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  async function onSave() {
    setSaving(true);
    setMsg(null);
    try {
      const res = await fetch("/api/profile", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ handle, displayName, bio }),
      });
      const text = await res.text();
      if (!res.ok) {
        // show server message (Invalid handle / Handle already taken / etc.)
        setMsg(`Save failed (${res.status}): ${text}`);
        return;
      }
      const j = JSON.parse(text);
      setMsg("Saved!");
      // auto-redirect to public profile (uncomment if you want)
      // location.href = `/u/${encodeURIComponent(j.handle)}`;
    } catch (e: any) {
      setMsg(`Save error: ${e?.message || String(e)}`);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="p-6 max-w-xl mx-auto space-y-4 text-white">
      <div>
        <label className="block text-sm mb-1">Handle</label>
        <input
          className="w-full rounded-md bg-neutral-900/60 border border-neutral-800 p-3"
          placeholder="yourname"
          value={handle}
          onChange={(e) => setHandle(e.target.value)}
        />
        <p className="text-xs text-neutral-500 mt-1">
          2–32 chars: letters, numbers, . _ ~ -
        </p>
      </div>

      <div>
        <label className="block text-sm mb-1">Display Name</label>
        <input
          className="w-full rounded-md bg-neutral-900/60 border border-neutral-800 p-3"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Bio</label>
        <textarea
          className="w-full rounded-md bg-neutral-900/60 border border-neutral-800 p-3 min-h-32"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      </div>

      <button
        onClick={onSave}
        disabled={saving}
        className="rounded-lg border border-[var(--laser-green,#00ff00)] px-4 py-2"
      >
        {saving ? "Saving..." : "Save"}
      </button>

      {msg && <p className="text-sm mt-2">{msg}</p>}
    </div>
  );
}
