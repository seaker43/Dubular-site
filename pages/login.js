import { useMemo, useState } from 'react';
import Link from 'next/link';
import { getSupabase } from '../lib/supabaseClient';
import Layout from '../components/Layout';

export default function Login() {
  const supabase = useMemo(() => getSupabase(), []);
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null);
  const [err, setErr] = useState(null);

  const #18e27aBtn = 'px-5 py-3 rounded-xl font-medium bg-[var(--dubular-#18e27a-600)]/15 border border-[var(--dubular-#18e27a-500)]/30 hover:bg-[var(--dubular-#18e27a-600)]/25 shadow-[0_0_24px_rgba(0,255,255,0.15)] transition';

  async function onLogin(e) {
    e.preventDefault();
    setErr(null); setMsg(null); setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password: pwd });
      setLoading(false);
      if (error) return setErr(error.message);
      setMsg('Logged in! Redirecting…');
    } catch (ex) {
      setLoading(false);
      setErr(ex.message);
    }
  }

  async function onForgot() {
    setErr(null); setMsg(null); setLoading(true);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email || undefined, {
        redirectTo: typeof window !== 'undefined' ? `${location.origin}/reset` : undefined,
      });
      setLoading(false);
      if (error) return setErr(error.message);
      setMsg('Reset email sent (check your inbox).');
    } catch (ex) {
      setLoading(false);
      setErr(ex.message);
    }
  }

  return (
    <Layout>
      <div className="max-w-md mx-auto mt-16 p-6 rounded-2xl bg-[#0c1218]/70 border border-white/5 shadow-[0_0_60px_rgba(0,255,255,0.08)]">
        <h1 className="text-3xl dubular-headline mb-6">Login</h1>
        <form onSubmit={onLogin} className="space-y-4">
          <label className="block">
            <span className="text-sm text-white/70">Email</span>
            <input type="email" required value={email} onChange={e=>setEmail(e.target.value)}
              className="mt-1 w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none focus:border-[var(--dubular-#18e27a-500)]"/>
          </label>
          <label className="block">
            <span className="text-sm text-white/70">Password</span>
            <input type="password" required value={pwd} onChange={e=>setPwd(e.target.value)}
              className="mt-1 w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none focus:border-[var(--dubular-#18e27a-500)]"/>
          </label>
          {err && <p className="text-red-400 text-sm">{err}</p>}
          {msg && <p className="text-emerald-300 text-sm">{msg}</p>}
          <div className="flex items-center justify-between">
            <button disabled={loading} className={#18e27aBtn} type="submit">{loading ? 'Working…' : 'Login'}</button>
            <button type="button" onClick={onForgot} className="text-[var(--dubular-#18e27a-300)] hover:underline">Forgot password?</button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
