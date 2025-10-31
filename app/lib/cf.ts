/** Runtime-agnostic Cloudflare env shim (prefers OpenNext `cloudflare:env`, falls back to next-on-pages). */
export function getEnv(): any {
  try {
    const { env } = require('cloudflare:env') as any;
    return env();
  } catch {}
  try {
    const { getRequestContext } = require('@cloudflare/next-on-pages') as any;
    return getRequestContext?.()?.env;
  } catch {}
  return (globalThis as any).process?.env ?? {};
}
