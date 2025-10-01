"use client";

import { useState } from "react";
import { normalizeHandle, isValidHandle } from "../../../lib/handles";

export default function OnboardingForm() {
  const [step, setStep] = useState(1);
  const [title, setTitle] = useState("");
  const [handle, setHandle] = useState("");
  const [category, setCategory] = useState("IRL");
  const [language, setLanguage] = useState("en");
  const [msg, setMsg] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const submit = async () => {
    const h = normalizeHandle(handle);
    if (!isValidHandle(h)) {
      setMsg("Handle must be 3–20 chars: a-z, 0-9, _");
      return;
    }
    setSaving(true);
    setMsg(null);
    const res = await fetch("/api/channel.upsert", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-user-id": "demo-user-1",
      },
      body: JSON.stringify({ title, handle: h, category, language }),
    });
    if (res.ok) {
      setStep(3);
      setMsg("Saved!");
    } else {
      setMsg(await res.text());
    }
    setSaving(false);
  };

  return (
    <div className="max-w-xl mx-auto p-4 text-white">
      <h1 className="text-2xl font-semibold mb-4">Creator Onboarding</h1>

      {step === 1 && (
        <div className="space-y-4">
          <input
            className="w-full rounded bg-neutral-900 p-3"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Channel title"
          />
          <input
            className="w-full rounded bg-neutral-900 p-3"
            value={handle}
            onChange={(e) => setHandle(e.target.value)}
            placeholder="Channel handle"
          />
          <select
            className="w-full rounded bg-neutral-900 p-3"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>IRL</option>
            <option>Gaming</option>
            <option>Music</option>
            <option>Sports</option>
          </select>
          <select
            className="w-full rounded bg-neutral-900 p-3"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
          </select>

          <button
            onClick={submit}
            disabled={saving}
            className="rounded-2xl px-4 py-2 bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save & Continue"}
          </button>

          {msg && <p className="text-sm opacity-80">{msg}</p>}
        </div>
      )}

      {step === 3 && (
        <p className="mt-4">
          Done! Visit your channel at{" "}
          <span className="font-mono">/@{handle}</span>
        </p>
      )}
    </div>
  );
}
