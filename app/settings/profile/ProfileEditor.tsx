"use client";
import { useState } from "react";
import { normalizeHandle, isValidHandle } from "../../../lib/handles";

export default function ProfileEditor() {
  const [displayName, setDisplayName] = useState("");
  const [handle, setHandle] = useState("");
  const [bio, setBio] = useState("");
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  const submit = async () => {
    const h = normalizeHandle(handle);
    if (!isValidHandle(h)) {
      setMsg("Handle must be 3–20 chars: a-z, 0-9, _");
      return;
    }
    setSaving(true);
    setMsg(null);
    const res = await fetch("/api/profile.upsert", {
      method: "POST",
      headers: { "content-type": "application/json", "x-user-id": "demo-user-1" },
      body: JSON.stringify({ displayName, handle: h, bio }),
    });
    if (res.ok) setMsg("Saved!");
    else setMsg(await res.text());
    setSaving(false);
  };

  return (
    <div className="max-w-xl mx-auto p-4 text-white">
      <h1 className="text-2xl font-semibold mb-4">Profile</h1>

      <label className="block mb-2 text-sm opacity-80">Display name</label>
      <input
        className="w-full rounded bg-neutral-900 p-3 mb-4"
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
      />

      <label className="block mb-2 text-sm opacity-80">Handle</label>
      <input
        className="w-full rounded bg-neutral-900 p-3 mb-4"
        value={handle}
        onChange={(e) => setHandle(e.target.value)}
        placeholder="your_handle"
      />

      <label className="block mb-2 text-sm opacity-80">Bio</label>
      <textarea
        className="w-full rounded bg-neutral-900 p-3 mb-4"
        rows={4}
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />

      <button
        onClick={submit}
        disabled={saving}
        className="rounded-2xl px-4 py-2 bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50"
      >
        {saving ? "Saving..." : "Save"}
      </button>

      {msg && <p className="mt-3 text-sm opacity-80">{msg}</p>}
    </div>
  );
}
