"use client";

import { useState } from "react";

export default function NotificationsClient() {
  const [email, setEmail] = useState(true);
  const [push, setPush] = useState(false);

  async function onSave(e: React.FormEvent) {
    e.preventDefault();
    try {
      await fetch("/api/settings/notifications", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, push }),
      });
      alert("Saved");
    } catch {
      alert("Failed");
    }
  }

  return (
    <div className="mx-auto w-full max-w-3xl px-4 pb-24 pt-6 text-white">
      <h1 className="text-2xl font-semibold mb-6">Notifications</h1>
      <form onSubmit={onSave} className="rounded-2xl bg-neutral-900/60 p-6 border border-neutral-800 shadow-lg space-y-4">
        <label className="flex items-center gap-3">
          <input type="checkbox" checked={email} onChange={e => setEmail(e.target.checked)} />
          <span>Email alerts</span>
        </label>
        <label className="flex items-center gap-3">
          <input type="checkbox" checked={push} onChange={e => setPush(e.target.checked)} />
          <span>Push notifications</span>
        </label>
        <button type="submit" className="mt-2 rounded-lg bg-[var(--laser-green,#00ff00)]/10 px-4 py-2 text-sm text-[var(--laser-green,#00ff00)] border border-[var(--laser-green,#00ff00)]/40">
          Save
        </button>
      </form>
    </div>
  );
}
