'use client';
import { useEffect, useState } from 'react';

type Status = 'idle' | 'saving' | 'saved' | 'error' | 'unauth';

export default function Settings() {
  const [dark, setDark] = useState(false);
  const [email, setEmail] = useState(true);
  const [push, setPush] = useState(false);
  const [status, setStatus] = useState<Status>('idle');

  useEffect(() => {
    (async () => {
      try {
        const r = await fetch('/api/settings', { cache: 'no-store' });
        if (r.status === 401) { setStatus('unauth'); return; }
        if (r.ok) {
          const s = await r.json();
          setDark(!!s.dark); setEmail(!!s.email); setPush(!!s.push);
        }
      } catch { /* ignore */ }
    })();
  }, []);

  async function save() {
    setStatus('saving');
    const prefs = { dark, email, push };
    localStorage.setItem('prefs', JSON.stringify(prefs));
    try {
      const res = await fetch('/api/settings', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(prefs),
      });
      if (res.status === 401) { setStatus('unauth'); return; }
      if (!res.ok) { setStatus('error'); return; }
      setStatus('saved');
      setTimeout(() => setStatus('idle'), 1500);
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="mx-auto max-w-3xl p-6 text-white">
      <h1 className="text-2xl font-semibold mb-6">Settings</h1>
      <div className="space-y-4">
        <label className="flex items-center gap-3">
          <input type="checkbox" checked={dark} onChange={e=>setDark(e.target.checked)} />
          <span>Dark theme</span>
        </label>
        <label className="flex items-center gap-3">
          <input type="checkbox" checked={email} onChange={e=>setEmail(e.target.checked)} />
          <span>Email notifications</span>
        </label>
        <label className="flex items-center gap-3">
          <input type="checkbox" checked={push} onChange={e=>setPush(e.target.checked)} />
          <span>Push notifications</span>
        </label>

        <button onClick={save} disabled={status==='saving'} className="rounded-lg border px-4 py-2">
          {status==='saving' ? 'Saving…' : 'Save'}
        </button>

        <div className="text-sm mt-2 text-neutral-400">
          {status==='saved' && 'Saved!'}
          {status==='error' && 'Error saving settings.'}
          {status==='unauth' && <span>Sign in required. <a className="underline" href="/sign-in">Sign in</a></span>}
        </div>
      </div>
    </div>
  );
}
